<template>
  <view class="container">
    <view class="title-container">
      <image src="@/static/images/bubble.png" mode="aspectFill" />
      <text class="title">猜你喜欢</text>
      <image src="@/static/images/bubble.png" mode="aspectFill" />
    </view>
    <XtxProductList ref="productListRef" :getProductsAPI="getProductsAPI" />
  </view>
</template>

<script lang="ts" setup>
import { getRecommendedForYouAPI } from '@/services/home'
import type { XtxProductListInstanceType } from '@/types/global'
import { ref } from 'vue'

const getProductsAPI: Function = getRecommendedForYouAPI

const productListRef = ref<XtxProductListInstanceType>(null)

const getRecommendedForYouData = () => {
  productListRef.value.getProducts()
}

const resetData = () => {
  productListRef.value.resetData()
}

defineExpose({
  getRecommendedForYouData,
  resetData,
})
</script>

<style lang="scss">
.container {
  margin: 28rpx 0;
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25rpx;
    image {
      width: 20rpx;
      height: 20rpx;
      padding-top: 5rpx;
    }
    .title {
      font-size: 36rpx;
      margin: 0 10rpx;
    }
  }
}
</style>
