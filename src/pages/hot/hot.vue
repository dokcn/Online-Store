<script lang="ts" setup>
import { getHotNewAPI } from '@/services/hot'
import type { XtxProductListInstanceType } from '@/types/component'
import type { PageParams } from '@/types/global'
import type { HotRequestResult } from '@/types/hot'
import { ref } from 'vue'

const productListRef = ref<XtxProductListInstanceType>(null)

const loadMoreProducts = () => {
  const ref = productListRef.value
  if (ref) ref.getProducts()
}

const data = ref<HotRequestResult>()

const getProductsFunc = async (pageParams: PageParams) => {
  const result = await getHotNewAPI({
    ...pageParams,
    // subType:
  })

  data.value = result.result
  uni.setNavigationBarTitle({
    title: result.result.title,
  })

  return result.result.subTypes[0].goodsItems.items
}
</script>

<template>
  <view class="container">
    <image class="banner" :src="data?.bannerPicture" mode="aspectFill" />
    <view class="bar">
      <navigator class="subType" v-for="subType in data?.subTypes" :key="subType.id">
        <text class="title">{{ subType.title }}</text>
        <view class="indicator"></view>
      </navigator>
    </view>
    <scroll-view class="itemList" scroll-y enable-back-to-top @scrolltolower="loadMoreProducts">
      <XtxProductList ref="productListRef" :getProductsFunc="getProductsFunc" marginTop="10rpx" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f5f5f5;
  height: 100%;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .banner {
      width: 100%;
      height: 260rpx;
    }
    .bar {
      box-shadow: 0 4rpx 2rpx 0 rgb(211, 211, 211);
      // position: relative;
      // bottom: 38rpx;
      margin-top: -38rpx;
      margin-left: -3.5rpx;
      width: 96%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: white;
      height: 110rpx;
      border-radius: 13rpx;
      z-index: 2;
      .subType {
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          font-size: 27rpx;
        }
        .indicator {
          margin-top: 10rpx;
          width: 45rpx;
          height: 5rpx;
          background-color: rgb(102, 217, 163);
        }
      }
    }
    .itemList {
      flex: auto;
    }
  }
}
</style>
