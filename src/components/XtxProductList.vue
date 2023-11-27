<template>
  <view class="container" :style="{ marginTop: marginTop }">
    <view class="item-list">
      <navigator v-for="item in productList" :key="item.id" class="item" hover-class="none">
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
import { onBeforeMount, ref } from 'vue'

const props = defineProps<{
  marginTop: string
}>()

const productList = ref<Product[]>([])
const loading = ref<boolean>(false)
const noMoreItems = ref<boolean>(false)

const pageParams: Required<PageParams> = {
  page: import.meta.env.DEV ? 32 : 0,
  pageSize: 10,
}

const beforeFetchData = () => {
  if (noMoreItems.value) return null

  loading.value = true
  ++pageParams.page

  return pageParams
}

const afterFetchData = (result: any[]) => {
  loading.value = false

  if (result.length === 0) {
    noMoreItems.value = true
  } else {
    productList.value.push(...result)
  }
}

const resetData = () => {
  pageParams.page = 0
  productList.value = []
  noMoreItems.value = false
}

defineExpose({
  beforeFetchData,
  afterFetchData,
  resetData,
})

const emits = defineEmits(['componentLoaded'])

onBeforeMount(() => {
  emits('componentLoaded')
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
