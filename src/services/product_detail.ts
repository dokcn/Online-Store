import type { ProductDetailResult } from '@/types/product_detail'
import { request } from '@/utils/http'

export const getProductDetailAPI = (id: string) => {
  return request<ProductDetailResult>({
    url: '/goods',
    data: {
      id,
    },
  })
}
