<script setup lang="ts">
import { getBannerDataAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavBar from './components/CustomNavBar.vue'
import type { BannerItem } from '@/types/home'

const bannerData = ref<Array<BannerItem>>([])

const getBannerData = async () => {
  const data = await getBannerDataAPI()
  bannerData.value = data.result
}

onLoad(() => {
  getBannerData()
})
</script>

<template>
  <view class="index">
    <CustomNavBar />
    <XtxCarousel :banner-data="bannerData" />
  </view>
</template>

<style lang="scss"></style>
