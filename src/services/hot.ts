import type { HotQueryParams, HotRequestResult } from '@/types/hot'
import { request } from '@/utils/http'

/** 热门推荐四个接口复用方法 */
export const getHotRecommendationAPI = (uri: string, requestParams?: HotQueryParams) => {
  return request<HotRequestResult>({
    url: uri,
    data: requestParams,
  })
}
