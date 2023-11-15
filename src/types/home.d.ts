export enum RedirectionType {
  Page = 1,
  Html = 2,
  MiniProgram = 3,
}

export type BannerItem = {
  id: string
  imgUrl: string
  hrefUrl: string
  type: RedirectionType
}

export type CategoryItem = {
  id: string
  name: string
  icon: string
}

export type RecommendationItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}

export type RecommendedForYouItem = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}
