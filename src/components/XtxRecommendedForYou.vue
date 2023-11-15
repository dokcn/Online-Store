<template>
  <view class="container">
    <view class="title-container">
      <image src="@/static/images/bubble.png" mode="aspectFill" />
      <text class="title">猜你喜欢</text>
      <image src="@/static/images/bubble.png" mode="aspectFill" />
    </view>
    <view class="item-list">
      <navigator v-for="item in itemList.items" :key="item.id" class="item" hover-class="none">
        <image :src="item.picture" mode="aspectFill" />
        <text class="description">{{ stringBlank(item.desc) ? '暂无' : item.desc }}</text>
        <text class="price-group">
          <text class="sign">￥</text>
          <text class="price">{{ item.price }}</text>
        </text>
      </navigator>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { PageData } from '@/types/global'
import type { RecommendedForYouItem } from '@/types/home'
import { stringBlank } from '@/utils/string_utils'

const props = defineProps<{
  itemList: PageData<RecommendedForYouItem>
}>()
</script>

<style lang="scss">
.container {
  margin: 28rpx 0;
  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25rpx;
    image {
      width: 20rpx;
      height: 20rpx;
      padding-top: 5rpx;
    }
    .title {
      font-size: 36rpx;
      margin: 0 10rpx;
    }
  }
  .item-list {
    justify-content: space-evenly;
    display: flex;
    flex-flow: row wrap;
    .item {
      background-color: white;
      padding: 20rpx;
      margin: 10rpx 0;
      image {
        width: 322rpx;
        height: 322rpx;
      }
      width: 47%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .description {
        height: 70rpx;
        align-self: flex-start;
        font-size: 24rpx;
        margin: 15rpx 0 8rpx -3rpx;
        line-height: 1.4;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price-group {
        font-size: 30rpx;
        color: #e04747;
        align-self: flex-start;
        margin-left: -7rpx;
        .sign {
          font-size: 28rpx;
        }
        .price {
          margin-left: -3rpx;
        }
      }
    }
  }
}
</style>
