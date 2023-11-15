import type { PageData } from '@/types/global'
import type {
  BannerItem,
  CategoryItem,
  RecommendationItem,
  RecommendedForYouItem,
} from '@/types/home'
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

export const getRecommendedForYouAPI = (page: number = 1, pageSize: number = 10) => {
  return request<PageData<RecommendedForYouItem>>({
    url: '/home/goods/guessLike',
    data: {
      page,
      pageSize,
    },
  })
}
