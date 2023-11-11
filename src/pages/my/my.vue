<script setup lang="ts">
import { useMemberStore, useUserStore } from '@/stores'
import { request } from '@/utils/http'

import { ref } from 'vue'

const memberStore = useMemberStore()
const userStore = useUserStore()

let data = ref('empty')

const getData = async () => {
  const res = await request<{ desc: string }>({
    url: '/goods',
    data: {
      id: '4000914',
    },
  })
  data.value = String(res.result.desc)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ userStore.token }}</view>
    <button @tap="userStore.setToken('123155')" size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="userStore.setToken(undefined)" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData" size="mini" plain>get data</button>
    <text>{{ data }}</text>
  </view>
</template>

<style lang="scss">
//
</style>
