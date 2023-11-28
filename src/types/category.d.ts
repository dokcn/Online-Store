import type { Product } from './global'

export type Category = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: {
    id: string
    name: string
    picture: string
    goods: Product[]
  }[]
}

export type CategoryResult = Category[]
