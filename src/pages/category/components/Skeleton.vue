<template name="skeleton">
  <view class="sk-container">
    <view class="container">
      <view class="search-bar">
        <text
          class="search-placeholder icon-search sk-transparent sk-text-14-2857-381 sk-text sk-pseudo sk-pseudo-circle"
        >
          女装</text
        >
      </view>
      <view class="two-column">
        <view class="level-one-category">
          <scroll-view scroll-y="true" class="level-one-category-scroll-view">
            <text
              class="category-title active sk-transparent sk-text-14-2857-384 sk-text sk-pseudo sk-pseudo-circle"
              >居家</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-767 sk-text sk-pseudo sk-pseudo-circle"
              >美食</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-1000 sk-text sk-pseudo sk-pseudo-circle"
              >服饰</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-622 sk-text sk-pseudo sk-pseudo-circle"
              >母婴</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-288 sk-text sk-pseudo sk-pseudo-circle"
              >个护</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-50 sk-text sk-pseudo sk-pseudo-circle"
              >严选</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-795 sk-text sk-pseudo sk-pseudo-circle"
              >数码</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-220 sk-text sk-pseudo sk-pseudo-circle"
              >运动</text
            >
            <text
              class="category-title sk-transparent sk-text-14-2857-436 sk-text sk-pseudo sk-pseudo-circle"
              >杂项</text
            >
          </scroll-view>
        </view>
        <scroll-view enable-back-to-top="true" scroll-y="true" class="main">
          <view class="carousel-container">
            <view is="components/XtxCarousel" class="carousel">
              <view class="carousel XtxCarousel--carousel">
                <swiper circular="true" autoplay="false" current="0" interval="3000">
                  <swiper-item
                    style="
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      transform: translate(0%, 0px) translateZ(0px);
                    "
                  >
                    <navigator class="navigator XtxCarousel--navigator" hover-class="none">
                      <image class="image XtxCarousel--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                  <swiper-item
                    style="
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      transform: translate(100%, 0px) translateZ(0px);
                    "
                  >
                    <navigator class="navigator XtxCarousel--navigator" hover-class="none">
                      <image class="image XtxCarousel--image sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                </swiper>
                <view class="indicator XtxCarousel--indicator">
                  <text class="dot XtxCarousel--dot active XtxCarousel--active"></text>
                  <text class="dot XtxCarousel--dot"></text>
                  <text class="dot XtxCarousel--dot"></text>
                  <text class="dot XtxCarousel--dot"></text>
                  <text class="dot XtxCarousel--dot"></text>
                </view>
              </view>
            </view>
          </view>
          <view class="level-two-category">
            <view class="sub-category-title">
              <text class="title-left sk-transparent sk-text-14-2857-490 sk-text"
                >居家生活用品</text
              >
              <text class="to-all sk-transparent sk-text-14-2857-527 sk-text">全部&gt;</text>
            </view>
            <view class="product-list">
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-173 sk-text"
                  >法国年份雅文邑700毫升</text
                >
                <view class="price-group">
                  <text class="rmb-sign sk-transparent sk-opacity">￥</text>
                  <text class="price sk-transparent sk-text-14-2857-289 sk-text">1480.00</text>
                </view>
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-95 sk-text"
                  >梅乃宿梅酒720毫升</text
                >
                <view class="price-group">
                  <text class="rmb-sign sk-transparent sk-opacity">￥</text>
                  <text class="price sk-transparent sk-text-14-2857-197 sk-text">168.00</text>
                </view>
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-925 sk-text"
                  >多米尼加陈年朗姆酒700毫升</text
                >
                <view class="price-group">
                  <text class="rmb-sign sk-transparent sk-opacity">￥</text>
                  <text class="price sk-transparent sk-text-14-2857-735 sk-text">238.00</text>
                </view>
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-335 sk-text"
                  >全新升级，四川酸辣粉195克*6杯</text
                >
                <view class="price-group">
                  <text class="rmb-sign sk-transparent sk-opacity">￥</text>
                  <text class="price sk-transparent sk-text-14-2857-467 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-451 sk-text"
                  >川味牛肉辣椒酱190克</text
                >
                <view class="price-group">
                  <text class="rmb-sign sk-transparent sk-opacity">￥</text>
                  <text class="price sk-transparent sk-text-14-2857-880 sk-text">38.00</text>
                </view>
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-735 sk-text"
                  >极光限定 珠光蓝珐琅锅</text
                >
                <view class="price-group">
                  <text class="rmb-sign sk-transparent sk-opacity">￥</text>
                  <text class="price sk-transparent sk-text-14-2857-461 sk-text">199.00</text>
                </view>
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-993 sk-text"
                  >智利老牌名庄，梅洛干红750毫升</text
                >
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-292 sk-text"
                  >钻石陶瓷涂层多用锅18cm 小奶锅</text
                >
              </navigator>
              <navigator class="product">
                <image class="product-image sk-image" mode="aspectFill"></image>
                <text class="product-title sk-transparent sk-text-14-2857-707 sk-text"
                  >黄金玉粟粥米500克</text
                >
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-381 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-384 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-767 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-1000 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-622 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-288 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-50 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-795 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-220 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-436 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  /* background-size: 100% 36.0938rpx; */
  position: relative !important;
}
.sk-text-14-2857-490 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-527 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-173 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-289 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-95 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-text-14-2857-197 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-925 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-text-14-2857-735 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-335 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-text-14-2857-467 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-451 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-text-14-2857-880 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-461 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.5313rpx;
  position: relative !important;
}
.sk-text-14-2857-993 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-text-14-2857-292 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
  position: relative !important;
}
.sk-text-14-2857-707 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 26.25rpx;
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
