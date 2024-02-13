<template name="skeleton">
  <view class="index">
    <view is="components/XtxCarousel">
      <view class="carousel XtxCarousel--carousel">
        <swiper :circular="true" :autoplay="true" :current="0" :interval="3000"></swiper>
        <view class="indicator XtxCarousel--indicator">
          <text class="dot XtxCarousel--dot active XtxCarousel--active"></text>
          <text class="dot XtxCarousel--dot"></text>
          <text class="dot XtxCarousel--dot"></text>
          <text class="dot XtxCarousel--dot"></text>
          <text class="dot XtxCarousel--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/components/Category">
      <view class="category Category--category">
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-535 sk-text">居家</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-18 sk-text">锦鲤</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-882 sk-text">服饰</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-540 sk-text">母婴</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-144 sk-text">个护</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-872 sk-text">严选</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-196 sk-text">数码</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-798 sk-text">运动</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-425 sk-text">杂项</text>
        </navigator>
        <navigator class="category-item Category--category-item" hover-class="none">
          <image class="icon Category--icon sk-image"></image>
          <text class="text Category--text sk-transparent sk-text-14-2857-663 sk-text">品牌</text>
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/PopularRecommendations">
      <view class="hot PopularRecommendations--hot">
        <view class="item PopularRecommendations--item">
          <view class="title PopularRecommendations--title">
            <text
              class="title-text PopularRecommendations--title-text sk-transparent sk-text-14-2857-278 sk-text"
              >特惠推荐</text
            >
            <text
              class="title-desc PopularRecommendations--title-desc sk-transparent sk-text-14-2857-356 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator class="cards PopularRecommendations--cards" hover-class="none">
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
        <view class="item PopularRecommendations--item">
          <view class="title PopularRecommendations--title">
            <text
              class="title-text PopularRecommendations--title-text sk-transparent sk-text-14-2857-114 sk-text"
              >爆款推荐</text
            >
            <text
              class="title-desc PopularRecommendations--title-desc sk-transparent sk-text-14-2857-647 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator class="cards PopularRecommendations--cards" hover-class="none">
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
        <view class="item PopularRecommendations--item">
          <view class="title PopularRecommendations--title">
            <text
              class="title-text PopularRecommendations--title-text sk-transparent sk-text-14-2857-956 sk-text"
              >一站买全</text
            >
            <text
              class="title-desc PopularRecommendations--title-desc sk-transparent sk-text-14-2857-711 sk-text"
              >精心优选</text
            >
          </view>
          <navigator class="cards PopularRecommendations--cards" hover-class="none">
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
        <view class="item PopularRecommendations--item">
          <view class="title PopularRecommendations--title">
            <text
              class="title-text PopularRecommendations--title-text sk-transparent sk-text-14-2857-404 sk-text"
              >新鲜好物</text
            >
            <text
              class="title-desc PopularRecommendations--title-desc sk-transparent sk-text-14-2857-789 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator class="cards PopularRecommendations--cards" hover-class="none">
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
            <image class="image PopularRecommendations--image sk-image" mode="aspectFill"></image>
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-0-0000-930 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25.7813rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-584 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-535 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-18 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-882 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-540 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-144 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-872 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-196 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-798 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-425 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-663 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-278 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 45.9375rpx;
  position: relative !important;
}
.sk-text-14-2857-356 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-114 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 45.9375rpx;
  position: relative !important;
}
.sk-text-14-2857-647 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-956 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 45.9375rpx;
  position: relative !important;
}
.sk-text-14-2857-711 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-text-14-2857-404 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 45.9375rpx;
  position: relative !important;
}
.sk-text-14-2857-789 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.0938rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
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
