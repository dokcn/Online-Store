<template name="skeleton">
  <view class="sk-container">
    <view class="container">
      <scroll-view :enable-back-to-top="true" :scroll-y="true" class="scroll-view">
        <view class="carousel">
          <swiper
            :circular="true"
            class="swiper"
            :current="0"
            :interval="3000"
            :autoplay="false"
          ></swiper>
          <view class="indicator" style="true">
            <text class="sk-transparent sk-text-14-2857-233 sk-text">4/5</text>
          </view>
        </view>
        <view class="price-bar">
          <text class="rmb-sign sk-transparent sk-text-14-2857-110 sk-text">￥</text>
          <text class="price sk-transparent sk-text-14-2857-295 sk-text">83.90</text>
        </view>
        <view class="description-bar">
          <text class="title sk-transparent sk-text-14-2857-82 sk-text"
            >瑜伽裸感女式运动训练紧身裤</text
          >
          <text class="description sk-transparent sk-text-14-2857-73 sk-text"
            >面料韧性足，修身又舒适app</text
          >
        </view>
        <view class="info-bar">
          <view class="specification-bar sk-pseudo sk-pseudo-circle">
            <text class="text-left sk-transparent sk-text-14-2857-14 sk-text">选择</text>
            <text class="text-right sk-transparent sk-text-14-2857-339 sk-text">白色</text>
            <text class="arrow sk-transparent sk-opacity">&gt;</text>
          </view>
          <view class="address-bar sk-pseudo sk-pseudo-circle">
            <text class="text-left sk-transparent sk-text-14-2857-995 sk-text">送至</text>
            <text class="text-right sk-transparent sk-text-14-2857-799 sk-text"
              >请选择收货地址</text
            >
            <text class="arrow sk-transparent sk-opacity">&gt;</text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-110 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 52.5rpx;
  position: relative !important;
}
.sk-text-14-2857-295 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 82.0313rpx;
  position: relative !important;
}
.sk-text-14-2857-82 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-73 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-14 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-339 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-995 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-799 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-794 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-941 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
