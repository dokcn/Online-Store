import type { BannerItem, CategoryItem, RecommendationItem } from '@/types/home'
import { request } from '@/utils/http'

export const getBannerDataAPI = (distributionSite = 1) => {
  return request<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getCategoryAPI = () => {
  return request<Array<CategoryItem>>({
    url: '/home/category/mutli',
  })
}

export const getRecommendationsAPI = () => {
  return request<RecommendationItem[]>({
    url: '/home/hot/mutli',
  })
}
