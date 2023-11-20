/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */

import 'vue'

import XtxCarousel from './XtxCarousel.vue'
import XtxRecommendedForYou from './XtxRecommendedForYou.vue'
import XtxProductList from './XtxProductList.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxCarousel: typeof XtxCarousel
    XtxRecommendedForYou: typeof XtxRecommendedForYou
    XtxProductList: typeof XtxProductList
  }
}

export type XtxRecommendedForYouInstanceType = InstanceType<typeof XtxRecommendedForYou>
export type XtxProductListInstanceType = InstanceType<typeof XtxProductList>
