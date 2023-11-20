import type { HotQueryParams, HotRequestResult } from '@/types/hot'
import { request } from '@/utils/http'

/** 特惠推荐 */
export const getHotPreferenceAPI = (data: HotQueryParams) => {
  return request<HotRequestResult>({
    url: '/hot/preference',
    data,
  })
}

/** 爆款推荐 */
export const getHotInVogueAPI = (data: HotQueryParams) => {
  return request<HotRequestResult>({
    url: '/hot/inVogue',
    data,
  })
}

/** 一站买全 */
export const getHotOneStopAPI = (data: HotQueryParams) => {
  return request<HotRequestResult>({
    url: '/hot/oneStop',
    data,
  })
}

/** 新鲜好物 */
export const getHotNewAPI = (data: HotQueryParams) => {
  return request<HotRequestResult>({
    url: '/hot/new',
    data,
  })
}
