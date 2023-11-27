import type { PageParams, PageResult, Product } from '@/types/global'

export type HotQueryParams = PageParams & {
  subType?: string
}

export type HotRequestResult = {
  id: string
  title: string
  bannerPicture: string
  subTypes: {
    id: string
    title: string
    goodsItems: PageResult<Product>
  }[]
}
