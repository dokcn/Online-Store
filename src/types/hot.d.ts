import type { PageParams, Product } from './global'

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
    goodsItems: {
      page: string
      pageSize: string
      counts: string
      pages: string
      items: Array<Product>
    }
  }[]
}
