<template>
  <view class="container" :style="{ marginTop: marginTop }">
    <view class="item-list">
      <navigator v-for="item in itemList" :key="item.id" class="item" hover-class="none">
        <image :src="item.picture" mode="aspectFill" />
        <text class="description">{{ stringBlank(item.name) ? '暂无' : item.name }}</text>
        <view class="price-group">
          <text class="sign">￥</text>
          <text class="price">{{ item.price }}</text>
        </view>
      </navigator>
    </view>
    <view class="loading" v-show="loading">正在加载...</view>
    <view class="end" v-show="noMoreItems"> 已经到底了 </view>
  </view>
</template>

<script setup lang="ts">
import type { PageParams, Product } from '@/types/global'
import { stringBlank } from '@/utils/string_utils'
import { ref } from 'vue'

const props = defineProps<{
  getProductsFunc: Function
  marginTop: string
}>()

const itemList = ref<Product[]>([])
const loading = ref<boolean>(false)
const noMoreItems = ref<boolean>(false)

const pageParams: Required<PageParams> = {
  page: 0,
  pageSize: 10,
}

const getProducts = async () => {
  if (noMoreItems.value) {
    return
  }

  ++pageParams.page

  loading.value = true
  const result = await props.getProductsFunc(pageParams)
  loading.value = false

  if (result.length === 0) {
    noMoreItems.value = true
  } else {
    itemList.value.push(...result)
  }
}

const resetData = () => {
  pageParams.page = 0
  itemList.value = []
  noMoreItems.value = false
  getProducts()
}

getProducts()

defineExpose({
  getProducts,
  resetData,
})
</script>

<style lang="scss">
.container {
  // margin: 28rpx 0;
  .item-list {
    display: flex;
    flex-flow: row wrap;
    // justify-content: space-evenly;

    .item {
      border-radius: 10rpx;
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
        margin-left: -8rpx;
        display: flex;
        align-items: baseline;
        .sign {
          font-size: 28rpx;
        }
        .price {
          margin-left: -3rpx;
        }
      }
    }

    $item-margin: 15rpx;
    .item:nth-child(odd) {
      margin-left: $item-margin;
      margin-right: $item-margin;
    }
    .item:nth-child(even) {
      margin-right: $item-margin;
    }
  }
  .loading {
    text-align: center;
    padding: 10rpx 0 25rpx 0;
    font-size: 32rpx;
  }
  .end {
    text-align: center;
    padding: 10rpx 0 25rpx 0;
    font-size: 28rpx;
    color: rgb(117, 117, 117);
  }
}
</style>
