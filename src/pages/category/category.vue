<script setup lang="ts">
import { getCategoryDataAPI } from '@/services/category'
import { getBannerDataAPI } from '@/services/home'
import type { CategoryResult } from '@/types/category'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const data = ref<CategoryResult>([])
const getCategoryData = async () => {
  data.value = (await getCategoryDataAPI()).result
}
getCategoryData()

const carouselData = ref<BannerItem[]>([])
const getCarouselData = async () => {
  carouselData.value = (await getBannerDataAPI(2)).result
}
getCarouselData()

const currentIndex = ref<number>(0)
</script>

<template>
  <view class="container">
    <view class="search-bar">
      <text class="search-placeholder icon-search"> 女装</text>
    </view>
    <view class="two-column">
      <view class="level-one-category">
        <scroll-view class="level-one-category-scroll-view" scroll-y>
          <text
            class="category-title"
            v-for="(levelOne, index) in data"
            :key="levelOne.id"
            :class="{ active: currentIndex === index }"
            @tap="currentIndex = index"
          >
            {{ levelOne.name }}
          </text>
        </scroll-view>
      </view>
      <scroll-view
        class="main"
        v-for="(levelOne, index) in data"
        v-show="currentIndex === index"
        :key="levelOne.id"
        scroll-y
        enable-back-to-top
      >
        <view class="carousel-container">
          <XtxCarousel class="carousel" :bannerData="carouselData" />
        </view>
        <view class="level-two-category" v-for="levelTwo in levelOne.children" :key="levelTwo.id">
          <view class="sub-category-title">
            <text class="title-left">{{ levelTwo.name }}</text>
            <text class="to-all">全部></text>
          </view>
          <view class="product-list">
            <navigator class="product" v-for="product of levelTwo.goods" :key="product.id">
              <image class="product-image" :src="product.picture" mode="aspectFill" />
              <text class="product-title">{{ product.name }}</text>
              <view class="price-group">
                <text class="rmb-sign">￥</text>
                <text class="price">{{ product.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  .container {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    .search-bar {
      height: 80rpx;
      flex-shrink: 0;
      border-radius: 40rpx;
      background-color: rgb(245, 245, 245);
      margin: 0 18rpx 10rpx 18rpx;
      display: flex;
      align-items: center;
      .search-placeholder {
        margin-left: 25rpx;
        font-size: 29rpx;
        color: gray;
      }
    }
    .two-column {
      flex: 1;
      min-height: 400rpx;
      display: flex;
      .level-one-category {
        width: 185rpx;
        .level-one-category-scroll-view {
          background-color: rgb(245, 245, 245);
          .category-title {
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 60%;
            height: 95rpx;
            font-size: 26rpx;
            color: rgb(83, 83, 83);
            position: relative;
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              background-color: rgb(216, 216, 216);
              width: 110rpx;
              height: 1rpx;
            }
            &:last-child::after {
              display: none;
            }
            // &:first-child {
            //   margin-top: 10rpx;
            // }
            &:last-child {
              padding-bottom: 10rpx;
            }
          }
          /*.category-title:nth-child(n + 2) {
            border-top: 1px solid rgb(216, 216, 216);
          }*/
          .active {
            position: relative;
            background-color: white;
            &::before {
              content: '';
              height: 100%;
              width: 8rpx;
              position: absolute;
              left: 0;
              background-color: #00c09d;
            }
          }
        }
      }
      .main {
        .carousel-container {
          margin: 0 30rpx;
          .carousel {
            height: 190rpx;
          }
        }
        .level-two-category {
          margin: 0 30rpx;
          padding: 20rpx 0;
          .sub-category-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20rpx;
            .title-left {
              font-size: 29rpx;
            }
            .to-all {
              font-size: 24rpx;
              color: rgb(152, 152, 152);
            }
          }
          .product-list {
            display: flex;
            flex-wrap: wrap;
            .product {
              display: flex;
              flex-direction: column;
              $product-width: 150rpx;
              width: $product-width;
              margin-right: 20rpx;
              .product-image {
                width: $product-width;
                height: $product-width;
              }
              .product-title {
                margin-top: 10rpx;
                font-size: 20rpx;
                height: 55rpx;
                line-height: 1.4;

                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .price-group {
                margin: 4rpx 0 20rpx -4rpx;
                display: flex;
                align-items: baseline;
                $price-color: rgb(193, 77, 77);
                .rmb-sign {
                  color: $price-color;
                  font-size: 17rpx;
                }
                .price {
                  color: $price-color;
                  font-size: 23rpx;
                  margin-left: -2rpx;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
