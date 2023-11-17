<script setup lang="ts">
import { getBannerDataAPI, getCategoryAPI, getRecommendationsAPI } from '@/services/home'
import type { BannerItem, CategoryItem, RecommendationItem } from '@/types/home'
import { onLoad, onReady } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Category from './components/Category.vue'
import CustomNavBar from './components/CustomNavBar.vue'
import PopularRecommendations from './components/PopularRecommendations.vue'

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
}

const categoryData = ref<Array<CategoryItem>>([])
const getCategoryData = async () => {
  const data = await getCategoryAPI()
  categoryData.value = data.result
}

const recommendationsData = ref<Array<RecommendationItem>>([])
const getRecommendationsData = async () => {
  const data = await getRecommendationsAPI()
  recommendationsData.value = data.result
}

onLoad(() => {
  getBannerData()
  getCategoryData()
  getRecommendationsData()
})

const loading = ref<boolean>(false)

function loadMoreProducts(e: UniHelper.ScrollViewOnScrolltolowerEvent) {
  loading.value = true
}

function finishLoad() {
  loading.value = false
}
</script>

<template>
  <view class="index">
    <CustomNavBar />
    <scroll-view
      @scrolltolower="loadMoreProducts"
      scroll-y
      class="scroll"
      :style="{ height: scrollViewHeight + 'px' }"
    >
      <XtxCarousel :banner-data="bannerData" />
      <Category :category-data="categoryData" />
      <PopularRecommendations :recommendation-data="recommendationsData"></PopularRecommendations>
      <XtxRecommendedForYou @finish-load="finishLoad" :isLoading="loading" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: rgb(250, 250, 250);
  // background-color: red;
  box-sizing: border-box;
}
</style>
