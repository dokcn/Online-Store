<script lang="ts" setup>
import { getProductDetailAPI } from '@/services/product_detail'
import type { XtxProductListInstanceType } from '@/types/component'
import type { ProductDetailResult } from '@/types/product_detail'
import { computed, ref } from 'vue'

const booleanForTest = ref<boolean>(true)

const scrollViewHeight = ref<number>(0)
const bottomBarPaddingBottom = ref<number>(0)

const { windowHeight, safeAreaInsets } = uni.getSystemInfoSync()

bottomBarPaddingBottom.value = safeAreaInsets!.bottom
if (!bottomBarPaddingBottom.value) bottomBarPaddingBottom.value = 4

uni
  .createSelectorQuery()
  .select('.bottom-bar')
  .boundingClientRect((data) => {
    scrollViewHeight.value = windowHeight - (data as UniApp.NodeInfo).height!
  })
  .exec()

const query = defineProps<{
  productId: string
}>()

const productDetailInfo = ref<ProductDetailResult>()
const getProductDetailInfo = async (productId: string) => {
  productDetailInfo.value = (await getProductDetailAPI(productId)).result
  setAnalogousData()
}
getProductDetailInfo(query.productId)

const carouselIndex = ref<number>(0)

const indicatorText = computed(() => {
  return `${carouselIndex.value + 1}/${
    (productDetailInfo.value?.mainVideos?.length ?? 0) +
    (productDetailInfo.value?.mainPictures?.length ?? 0)
  }`
})

const analogousRef = ref<XtxProductListInstanceType>()
const setAnalogousData = () => {
  const ref = analogousRef.value
  if (ref) {
    ref.beforeFetchData()
    ref.afterFetchData(productDetailInfo.value?.similarProducts)
  }
}
</script>

<style lang="scss">
page {
  .container {
    background-color: rgb(244, 244, 244);
    .scroll-view {
      .carousel {
        position: relative;
        .swiper {
          height: 750rpx;
          swiper-item image,
          swiper-item video {
            width: 750rpx;
            height: 750rpx;
          }
        }
        .indicator {
          position: absolute;
          right: 30rpx;
          bottom: 30rpx;
          background-color: rgba(40, 40, 40, 0.5);
          border-radius: 40rpx;
          padding: 6rpx 32rpx;
          display: flex;
          align-items: center;
          text {
            color: white;
            font-size: 24rpx;
          }
        }
      }

      .price-bar {
        width: 100%;
        background-color: #0eceab;
        display: flex;
        align-items: baseline;
        padding: 18rpx 0 18rpx 25rpx;
        text {
          color: white;
          flex-grow: 0;
        }
        .rmb-sign {
          font-size: 38rpx;
        }
        .price {
          font-size: 60rpx;
        }
      }

      .description-bar {
        background-color: white;
        padding-left: 20rpx;
        display: flex;
        flex-flow: column nowrap;
        .title {
          font-size: 32rpx;
          padding: 30rpx 0 20rpx 0;
        }
        .description {
          padding-bottom: 30rpx;
          font-size: 26rpx;
          color: rgb(238, 116, 116);
        }
      }

      .info-bar {
        padding: 0 32rpx;
        background-color: white;

        .specification-bar,
        .address-bar,
        .services-bar {
          display: flex;
          padding: 18rpx 0;
          align-items: center;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -40rpx;
            width: 120%;
            height: 1rpx;
            background-color: rgb(234, 234, 234);
          }
        }
        $font-size: 26rpx;
        .text-left {
          font-size: $font-size;
          color: rgb(118, 118, 118);
        }
        .text-right {
          margin-left: 30rpx;
          font-size: $font-size;
        }
        .arrow {
          color: rgb(223, 223, 223);
          font-size: $font-size + 15rpx;
          margin-left: auto;
          margin-bottom: 8rpx;
        }
      }

      .divider {
        width: 100%;
        height: 20rpx;
      }

      .detail {
        background-color: white;
        padding-bottom: 40rpx;
        .title {
          position: relative;
          padding: 25rpx 25rpx 28rpx 25rpx;
          .border-left {
            position: absolute;
            top: 30%;
            bottom: 30%;
            left: 20rpx;
            border-left: 7rpx #0eceab solid;
          }
          text {
            margin-left: 12rpx;
            font-size: 37rpx;
            font-weight: bolder;
          }
        }
        .spec-item-list {
          display: flex;
          flex-flow: column nowrap;
          .spec-item {
            padding: 20rpx 10rpx;
            margin: 0 15rpx;
            display: flex;
            border-bottom: 2rpx rgb(153, 153, 153) dashed;

            .name {
              flex-basis: 28%;
              flex-shrink: 0;
            }
            .name,
            .value {
              font-size: 28rpx;
              color: rgb(47, 47, 47);
            }
          }
        }
      }

      .analogous {
        .analogous-title-bar {
          background-color: white;
          height: 110rpx;
          display: flex;
          align-items: center;
          margin: 15rpx 0;
          .analogous-title {
            font-size: 34rpx;
            font-weight: bold;
            margin-left: 6rpx;
            padding-left: 20rpx;
            position: relative;
            &::before {
              position: absolute;
              content: '';
              width: 5rpx;
              background-color: #0eceab;
              left: 0;
              top: 15%;
              bottom: 10%;
            }
          }
        }
        .analogous-list {
          padding: 0 5rpx 25rpx;
        }
      }
    }

    .bottom-bar {
      height: 110rpx;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: content-box;
      padding: 10rpx 20rpx;
      background-color: white;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-top: #dadada solid 2rpx;
      .collect-button,
      .customer-service-button,
      .shopping-cart-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 20rpx;
        text[class|='icon'] {
          font-size: 30rpx;
          margin-bottom: 6rpx;
        }
        text:nth-child(2) {
          font-size: 22rpx;
        }
      }

      .add-to-cart-button,
      .buy-now-button {
        width: 205rpx;
        height: 60rpx;
        font-size: 26rpx;
        border-radius: 50rpx;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .add-to-cart-button {
        background-color: #ffa868;
      }
      .buy-now-button {
        background-color: #27ba9b;
      }
    }
  }
}
</style>

<template>
  <view class="container">
    <scroll-view
      class="scroll-view"
      :style="{ height: scrollViewHeight + 'px' }"
      scroll-y
      enable-back-to-top
    >
      <view class="carousel" v-if="booleanForTest">
        <swiper
          class="swiper"
          :autoplay="true"
          :interval="3000"
          circular
          :current="carouselIndex"
          @change="(e) => (carouselIndex = e.detail.current)"
        >
          <swiper-item v-for="video in productDetailInfo?.mainVideos" :key="video">
            <video :src="video" />
          </swiper-item>
          <swiper-item v-for="image in productDetailInfo?.mainPictures" :key="image">
            <image :src="image" mode="aspectFill" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text>{{ indicatorText }}</text>
        </view>
      </view>

      <view class="price-bar">
        <text class="rmb-sign">￥</text>
        <text class="price">{{ productDetailInfo?.price }}</text>
      </view>

      <view class="description-bar">
        <text class="title">{{ productDetailInfo?.name }}</text>
        <text class="description">{{ productDetailInfo?.desc }}</text>
      </view>

      <view class="info-bar" v-if="booleanForTest">
        <view class="specification-bar">
          <text class="text-left">选择</text>
          <text class="text-right">白色</text>
          <text class="arrow">></text>
        </view>
        <view class="address-bar"
          ><text class="text-left">送至</text>
          <text class="text-right">请选择收货地址</text>
          <text class="arrow">></text>
        </view>
        <view class="services-bar"
          ><text class="text-left">服务</text>
          <text class="text-right">无忧退 快速退款 免费包邮</text>
          <text class="arrow">></text>
        </view>
      </view>

      <view class="divider"></view>

      <view class="detail" v-if="booleanForTest">
        <view class="title">
          <view class="border-left"></view>
          <text>详情</text>
        </view>
        <view class="spec-item-list">
          <view
            class="spec-item"
            v-for="item in productDetailInfo?.details?.properties"
            :key="item.name"
          >
            <text class="name">{{ item.name }}</text>
            <text class="value">{{ item.value }}</text>
          </view>
        </view>
      </view>

      <view class="content-area" v-if="booleanForTest">
        <image
          :src="img"
          mode="widthFix"
          v-for="img in productDetailInfo?.details?.pictures.slice(0, 3)"
          :key="img"
        />
      </view>

      <view class="analogous">
        <view class="analogous-title-bar">
          <text class="analogous-title">同类推荐</text>
        </view>
        <view class="analogous-list">
          <XtxProductList ref="analogousRef" />
        </view>
      </view>
    </scroll-view>

    <view
      class="bottom-bar"
      :style="{
        paddingBottom: bottomBarPaddingBottom + 'px',
      }"
    >
      <view class="collect-button">
        <text class="icon-heart"></text>
        <text>收藏</text>
      </view>
      <view class="customer-service-button">
        <text class="icon-handset"></text>
        <text>客服</text>
      </view>
      <view class="shopping-cart-button">
        <text class="icon-cart"></text>
        <text>购物车</text>
      </view>
      <button class="add-to-cart-button" size="mini">加入购物车</button>
      <button class="buy-now-button" size="mini">立即购买</button>
    </view>
  </view>
</template>
