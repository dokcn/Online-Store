<template>
  <view class="hot">
    <view class="item" v-for="item in recommendationData" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" class="cards">
        <image v-for="pic in item.pictures" :key="pic" :src="pic" mode="aspectFill" class="image" />
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { RecommendationItem } from '@/types/home'

defineProps<{
  recommendationData: Array<RecommendationItem>
}>()
</script>

<style lang="scss">
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 16rpx;
  min-height: 450rpx;
  .item {
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 7rpx;
    padding: 20rpx 20rpx;
    .title {
      display: flex;
      align-items: center;
      .title-text {
        font-size: 33rpx;
      }
      .title-desc {
        font-size: 26rpx;
        color: #9a9a9a;
        margin-left: 13rpx;
      }
    }
    .cards {
      margin-top: 14rpx;
      display: flex;
      .image {
        width: 150rpx;
        height: 150rpx;
      }
      .image:first-of-type {
        margin-right: 15rpx;
      }
    }

    $radius: 20rpx;

    &:nth-child(1) {
      border-radius: $radius 0 0 0;
    }
    &:nth-child(2) {
      border-radius: 0 $radius 0 0;
    }
    &:nth-child(3) {
      border-radius: 0 0 0 $radius;
    }
    &:nth-child(4) {
      border-radius: 0 0 $radius 0;
    }
  }
}
</style>
