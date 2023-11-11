import XtxCarousel from './XtxCarousel.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    XtxCarousel: typeof XtxCarousel
  }
}
