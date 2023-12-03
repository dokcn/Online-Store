import type { Product } from './global'

export type ProductDetailResult = {
  id: string
  spuCode: string
  name: string
  desc: string

  price: string
  oldPrice: string
  /**折扣 */
  discount: number

  /**库存 */
  inventory: number

  /**销售数量 */
  salesCount: number
  /**评价数量 */
  commentCount: number
  /**收藏数量 */
  collectCount: number

  mainVideos: string[]
  /**主图视频比例,1为1:1/16:9，2为3:4 */
  videoScale: number
  mainPictures: string[]

  /**是否预售 */
  isPreSale: boolean

  specs: Spec[]
  brand: Brand
  skus: SKU[]
  categories: Category[]
  details: {
    properties: Property[]
    pictures: string[]
  }
  similarProducts: Product[]
}

type Spec = {
  id: string
  name: string
  values: {
    name: string
    picture?: string
    avaiable: boolean
    desc: string
  }
}

type Brand = {
  id: string
  name: string
  nameEn: string
  picture: string
  logo: string
}

type SKU = {
  id: string
  skuCode: string
  price: string
  oldPrice: string
  inventory: number
  picture?: string
  specs: {
    name: string
    valuesName: string
  }
}

type Category = {
  id: string
  name: string
  layer: number
  parent: Category
}

type Property = {
  name: string
  value: string
}
