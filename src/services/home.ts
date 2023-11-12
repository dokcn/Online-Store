import type { BannerItem } from '@/types/home'
import { request } from '@/utils/http'

export const getBannerDataAPI = (distributionSite = 1) => {
  return request<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}
