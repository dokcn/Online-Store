export interface ResponseType<T> {
  code?: string
  msg: string
  result: T
}

export type PageResult<T> = {
  /**总条数 */
  counts: number
  /**总页数 */
  pages: number
  /**每页条数 */
  pageSize: number
  /**当前页数 */
  page: number
  /**当前页数据 */
  items: T[]
}

export type PageParams = {
  page?: number = 1
  pageSize?: number = 10
}

export type Product = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  /**下单数量 */
  orderNum: number
}
