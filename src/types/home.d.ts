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
