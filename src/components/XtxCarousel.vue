<template>
  <view class="carousel">
    <swiper
      :interval="3000"
      :autoplay="true"
      circular
      @change="onChangeIndicatorIndex"
      :current="activeIndex"
    >
      <swiper-item v-for="item in bannerData" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image :src="item.imgUrl" mode="aspectFill" class="image" />
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        @tap="changeBannerIndex(index)"
        v-for="(item, index) in bannerData.length"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const props = defineProps<{
  bannerData: BannerItem[]
}>()

let activeIndex = ref<number>(0)

const onChangeIndicatorIndex: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail.current
}

function changeBannerIndex(targetIndex: number) {
  activeIndex.value = targetIndex
}
</script>

<style lang="scss">
.carousel {
  height: 300rpx;
  position: relative;
  overflow: hidden;
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 40rpx;
      height: 6rpx;
      margin: 0 8rpx;
      background-color: rgba(255, 255, 255, 0.8);
    }
    .active {
      background-color: #00c09d;
    }
  }
  .navigator {
    width: 100%;
    height: 100%;
  }
}
</style>
