<script setup lang="ts">
import { getBannerDataAPI, getCategoryAPI, getRecommendationsAPI } from '@/services/home'
import type { XtxRecommendedForYouInstanceType } from '@/types/component'
import type { BannerItem, CategoryItem, RecommendationItem } from '@/types/home'
import { onLoad, onReady } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Category from './components/Category.vue'
import CustomNavBar from './components/CustomNavBar.vue'
import PopularRecommendations from './components/PopularRecommendations.vue'
import Skeleton from './components/Skeleton.vue'

const scrollViewHeight = ref<number>(0)

onReady(() => {
  uni.getSystemInfo({
    success: (info) => {
      const { windowHeight } = info
      uni
        .createSelectorQuery()
        .select('.scroll')
        .boundingClientRect((data) => {
          scrollViewHeight.value = windowHeight - data.top
        })
        .exec()
    },
  })
})

const bannerData = ref<BannerItem[]>([])
const getBannerData = async () => {
  const data = await getBannerDataAPI()
  bannerData.value = data.result
  loadedCount.value++
}

const categoryData = ref<Array<CategoryItem>>([])
const getCategoryData = async () => {
  const data = await getCategoryAPI()
  categoryData.value = data.result
  loadedCount.value++
}

const recommendationsData = ref<Array<RecommendationItem>>([])
const getRecommendationsData = async () => {
  const data = await getRecommendationsAPI()
  recommendationsData.value = data.result
  loadedCount.value++
}

const loadedCount = ref<number>(0)

onLoad(() => {
  getBannerData()
  getCategoryData()
  getRecommendationsData()
})

const recommendedForYouRef = ref<XtxRecommendedForYouInstanceType>(null)

function loadMoreProducts(e: UniHelper.ScrollViewOnScrolltolowerEvent) {
  if (recommendedForYouRef.value) {
    recommendedForYouRef.value.getRecommendedForYouData()
  }
}

const refresherTriggered = ref<boolean>(false)

async function onRefresherRefresh(e: UniHelper.ScrollViewOnRefresherrefreshEvent) {
  // loadedCount.value = 0
  refresherTriggered.value = true

  await Promise.allSettled([
    getBannerData(),
    getCategoryData(),
    getRecommendationsData(),
    recommendedForYouRef.value.resetData(),
  ])

  refresherTriggered.value = false
}
</script>

<template>
  <view class="index">
    <CustomNavBar />
    <!-- <button @tap="refresherTriggered = true">refresh</button> -->
    <scroll-view
      @scrolltolower="loadMoreProducts"
      scroll-y
      class="scroll"
      :style="{ height: scrollViewHeight + 'px' }"
      refresher-enabled
      refresher-background="#00c19e"
      @refresherrefresh="onRefresherRefresh"
      :refresher-triggered="refresherTriggered"
      enable-back-to-top
    >
      <Skeleton v-if="loadedCount < 3"></Skeleton>
      <template v-else>
        <XtxCarousel :banner-data="bannerData" />
        <Category :category-data="categoryData" />
        <PopularRecommendations :recommendation-data="recommendationsData"></PopularRecommendations>
        <XtxRecommendedForYou ref="recommendedForYouRef" />
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: rgb(245, 245, 245);
  // background-color: red;
  box-sizing: border-box;
}
</style>
