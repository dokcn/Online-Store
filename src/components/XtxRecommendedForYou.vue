<template>
  <view class="container">
    <view class="title-container">
      <image src="@/static/images/bubble.png" mode="aspectFill" />
      <text class="title">猜你喜欢</text>
      <image src="@/static/images/bubble.png" mode="aspectFill" />
    </view>
    <view class="item-list">
      <navigator v-for="item in itemList" :key="item.id" class="item" hover-class="none">
        <image :src="item.picture" mode="aspectFill" />
        <text class="description">{{ stringBlank(item.name) ? '暂无' : item.desc }}</text>
        <view class="price-group">
          <text class="sign">￥</text>
          <text class="price">{{ item.price }}</text>
        </view>
      </navigator>
    </view>
    <view class="loading" v-show="loading">正在加载...</view>
  </view>
</template>

<script lang="ts" setup>
import { getRecommendedForYouAPI } from '@/services/home'
import type { PageData } from '@/types/global'
import type { RecommendedForYouItem } from '@/types/home'
import { stringBlank } from '@/utils/string_utils'
import { ref, watch } from 'vue'

const props = defineProps<{
  isLoading: boolean
}>()

const emits = defineEmits(['finishLoad'])

const loading = ref<boolean>(false)

const pageInfo = ref<PageData<RecommendedForYouItem>>()
const itemList = ref<RecommendedForYouItem[]>([])
const getRecommendedForYouData = async (page?: number) => {
  const data = await getRecommendedForYouAPI(page)
  pageInfo.value = data.result
  itemList.value.push(...data.result.items)
}

getRecommendedForYouData()

watch(
  () => props.isLoading,
  async (newState) => {
    if (newState) {
      loading.value = true
      await getRecommendedForYouData((pageInfo.value?.page ?? 0) + 1)
      emits('finishLoad')
      loading.value = false
    }
  },
)
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
  }
  .loading {
    text-align: center;
    padding: 10rpx 0 25rpx 0;
    font-size: 32rpx;
  }
}
</style>
