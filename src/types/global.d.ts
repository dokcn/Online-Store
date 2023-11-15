export type PageData<T> = {
  /**总条数 */
  counts: number
  /**每页条数 */
  pageSize: number
  /**总页数 */
  pages: number
  /**当前页数 */
  page: number
  /**当前页数据 */
  items: T[]
}
