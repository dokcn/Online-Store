<template>
  <view class="category">
    <navigator hover-class="none" v-for="item in categoryData" :key="item.id" class="category-item">
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import type { CategoryItem } from '@/types/home'

const props = defineProps<{
  categoryData: CategoryItem[]
}>()
</script>

<style lang="scss">
.category {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 200rpx;
  margin: 10rpx 0;
  .category-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15rpx 24rpx;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 28rpx;
      color: rgb(90, 90, 90);
    }
  }
}
</style>
