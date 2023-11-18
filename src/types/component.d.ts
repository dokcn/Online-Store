/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */

import 'vue'

import XtxCarousel from './XtxCarousel.vue'
import XtxRecommendedForYou from './XtxRecommendedForYou.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxCarousel: typeof XtxCarousel
    XtxRecommendedForYou: typeof XtxRecommendedForYou
  }
}

export type XtxRecommendedForYouInstanceType = InstanceType<typeof XtxRecommendedForYou>
