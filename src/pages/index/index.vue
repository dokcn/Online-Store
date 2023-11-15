<script setup lang="ts">
import {
  getBannerDataAPI,
  getCategoryAPI,
  getRecommendationsAPI,
  getRecommendedForYouAPI,
} from '@/services/home'
import type { PageData } from '@/types/global'
import type {
  BannerItem,
  CategoryItem,
  RecommendationItem,
  RecommendedForYouItem,
} from '@/types/home'
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

const recommendedForYouData = ref<PageData<RecommendedForYouItem>>()
const getRecommendedForYouData = async () => {
  const data = await getRecommendedForYouAPI()
  recommendedForYouData.value = data.result
}

onLoad(() => {
  getBannerData()
  getCategoryData()
  getRecommendationsData()
  getRecommendedForYouData()
})
</script>

<template>
  <view class="index">
    <CustomNavBar />
    <scroll-view scroll-y class="scroll" :style="{ height: scrollViewHeight + 'px' }">
      <XtxCarousel :banner-data="bannerData" />
      <Category :category-data="categoryData" />
      <PopularRecommendations :recommendation-data="recommendationsData"></PopularRecommendations>
      <XtxRecommendedForYou :itemList="recommendedForYouData" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
}
</style>
