import type { CategoryResult } from '@/types/category'
import { request } from '@/utils/http'

export const getCategoryDataAPI = () => {
  return request<CategoryResult>({
    url: '/category/top',
  })
}
