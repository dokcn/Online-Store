<script setup lang="ts">
import { useMemberStore } from '@/stores'

import { ref } from 'vue'

const memberStore = useMemberStore()
let data = ref('empty')

function getData() {
  uni.request({
    url: '/goods',
    data: {
      id: '4000914',
    },
    success: (res) => {
      data.value = String(res.data.result.desc)
    },
  })
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData" size="mini" plain>get data</button>
    <text>{{ data }}</text>
  </view>
</template>

<style lang="scss">
//
</style>
