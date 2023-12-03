<script lang="ts" setup>
import { getHotRecommendationAPI } from '@/services/hot'
import type { XtxProductListInstanceType } from '@/types/component'
import type { HotRequestResult } from '@/types/hot'
import { ref } from 'vue'

const typeMap: { [index: string]: string } = {
  1: '/hot/preference',
  2: '/hot/inVogue',
  3: '/hot/oneStop',
  4: '/hot/new',
}

const data = ref<HotRequestResult>()
const currentSubTypeId = ref<string>('')

const query = defineProps<{ type: string }>()

const getBasicData = async () => {
  const result = await getHotRecommendationAPI(typeMap[query.type])
  data.value = result.result
  currentSubTypeId.value = result.result.subTypes[0].id

  uni.setNavigationBarTitle({
    title: result.result.title,
  })
}

getBasicData()

const productListRefs: { [index: string]: XtxProductListInstanceType } = {}

const refFunc = (el: XtxProductListInstanceType, subTypeId: string) => {
  productListRefs[subTypeId] = el
}

const getProducts = async (subTypeId: string) => {
  const ref = productListRefs[subTypeId]
  if (ref) {
    const pageParams = ref.beforeFetchData()
    if (!pageParams) return

    const finalResult: HotRequestResult = (
      await getHotRecommendationAPI(typeMap[query.type], {
        ...pageParams,
        subType: subTypeId,
      })
    ).result

    ref.afterFetchData(
      finalResult.subTypes.find((el: HotRequestResult['subTypes'][number]) => el.goodsItems)!
        .goodsItems.items,
    )
  }
}
</script>

<template>
  <view class="container">
    <image class="banner" :src="data?.bannerPicture" mode="aspectFill" />
    <view class="bar">
      <view class="subType" v-for="subType in data?.subTypes" :key="subType.id">
        <text class="title" @tap="currentSubTypeId = subType.id">{{ subType.title }}</text>
        <view
          class="indicator"
          :style="{ visibility: currentSubTypeId === subType.id ? 'visible' : 'hidden' }"
        ></view>
      </view>
    </view>
    <scroll-view
      v-for="subType in data?.subTypes"
      :key="subType.id"
      v-show="currentSubTypeId === subType.id"
      class="itemList"
      scroll-y
      enable-back-to-top
      @scrolltolower="getProducts(currentSubTypeId)"
    >
      <XtxProductList
        @componentLoaded="getProducts(subType.id)"
        :ref="(el: XtxProductListInstanceType) => refFunc(el, subType.id)"
        marginTop="10rpx"
      />
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
