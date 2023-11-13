<script setup lang="ts">
import { getBannerDataAPI, getCategoryAPI, getRecommendationsAPI } from '@/services/home'
import type { BannerItem, CategoryItem, RecommendationItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import Category from './components/Category.vue'
import CustomNavBar from './components/CustomNavBar.vue'
import PopularRecommendations from './components/PopularRecommendations.vue'

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
</script>

<template>
  <view class="index">
    <CustomNavBar />
    <XtxCarousel :banner-data="bannerData" />
    <Category :category-data="categoryData" />
    <PopularRecommendations :recommendation-data="recommendationsData"></PopularRecommendations>
  </view>
</template>

<style lang="scss">
page {
  background-color: rgb(250, 250, 250);
  box-sizing: border-box;
}
</style>
