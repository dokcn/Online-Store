<template>
  <view class="container">
    <view class="title-container">
      <image src="@/static/images/bubble.png" mode="aspectFill" />
      <text class="title">猜你喜欢</text>
      <image src="@/static/images/bubble.png" mode="aspectFill" />
    </view>
    <XtxProductList ref="productListRef" :getProductsFunc="getProductsFunc" />
  </view>
</template>

<script lang="ts" setup>
import { getRecommendedForYouAPI } from '@/services/home'
import type { XtxProductListInstanceType } from '@/types/component'
import type { PageParams } from '@/types/global'
import { ref } from 'vue'

const getProductsFunc: Function = async (pageParams: PageParams) => {
  const result = await getRecommendedForYouAPI(pageParams)
  return result.result.items
}

const productListRef = ref<XtxProductListInstanceType>(null)

const getRecommendedForYouData = () => {
  const ref = productListRef.value
  if (ref) ref.getProducts()
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
