<template>
  <view class="carousel">
    <swiper :interval="3000" :autoplay="false" circular @change="changeIndicatorIndex">
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_1.jpg"
            mode="aspectFill"
            class="image"
          />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_2.jpg"
            mode="aspectFill"
            class="image"
          />
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image
            src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/uploads/slider_3.jpg"
            mode="aspectFill"
            class="image"
          />
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        v-for="(item, index) in 3"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let activeIndex = ref<number>(0)

const onChangeIndicatorIndex: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail.current
}
</script>

<style lang="scss">
.carousel {
  height: 280rpx;
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
      background-color: rgba(255, 255, 255, 0.6);
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
