<script lang="ts" setup>
import { getProductDetailAPI } from '@/services/product_detail'
import type { XtxProductListInstanceType } from '@/types/component'
import type { ProductDetailResult } from '@/types/product_detail'
import { computed, reactive, ref } from 'vue'
import Skeleton from './components/Skeleton.vue'

// 用于隐藏高度过长的元素 方便测试
const hideElementsForTest = ref<boolean>(false)

// 滚动容器的高度
const scrollViewHeight = ref<number>(0)
// 底栏的底部padding
const bottomBarPaddingBottom = ref<number>(0)

const { windowHeight, safeAreaInsets } = uni.getSystemInfoSync()

// 设置底栏的底部padding
bottomBarPaddingBottom.value = safeAreaInsets!.bottom ?? 4

// 计算滚动容器高度
uni
  .createSelectorQuery()
  .select('.bottom-bar')
  .boundingClientRect((data) => {
    scrollViewHeight.value = windowHeight - (data as UniApp.NodeInfo).height!
  })
  .exec()

// 接收页面传参
const query = defineProps<{
  productId: string
}>()

// 保存商品信息
const productDetailInfo = ref<ProductDetailResult>()
// 商品详情是否有视频介绍
const hasVideos = ref<boolean>(false)
// 设置轮播组件索引指示器位置的样式 以防有视频时与播放控件相互遮挡
const carouselIndicatorStyle = reactive<{ top?: string; bottom?: string }>({})

// 获取商品详情并设置相应值
const getProductDetailInfo = async (productId: string) => {
  try {
    const result = await getProductDetailAPI(productId)
    productDetailInfo.value = result.result
    hasVideos.value = productDetailInfo.value.mainVideos.length !== 0

    if (hasVideos.value) {
      carouselIndicatorStyle.top = '30rpx'
      carouselIndicatorStyle.bottom = 'initial'
    }

    setAnalogousData()
  } catch (error: any) {
    // 如果未查询到商品 则返回上一页并提示
    var message = error.data.msg
    console.log(`query for product detail failed: %s`, message)
    message = '商品不存在'

    uni.navigateBack({
      success() {
        uni.showToast({
          title: message,
          icon: 'none',
        })
      },
    })
  }
}

getProductDetailInfo(query.productId)

// 轮播组件当前索引
const carouselIndex = ref<number>(0)

// 轮播组件索引指示器计算属性
const indicatorText = computed(() => {
  return `${carouselIndex.value + 1}/${
    (productDetailInfo.value?.mainVideos?.length ?? 0) +
    (productDetailInfo.value?.mainPictures?.length ?? 0)
  }`
})

// 同类推荐组件引用
const analogousRef = ref<XtxProductListInstanceType>()
// 设置同类推荐组件数据
const setAnalogousData = () => {
  const ref = analogousRef.value
  if (ref) {
    ref.beforeFetchData()
    ref.afterFetchData(productDetailInfo.value?.similarProducts)
  }
}

// 用于保存视频元素Context
const videoContextsMap = new Map()

// 轮播组件切换页面事件
const onSwiperItemChange = (e: UniHelper.SwiperOnChangeEvent) => {
  carouselIndex.value = e.detail.current
  // 轮播组件切换页面到其他页面时暂停视频播放
  // todo: refine this, remove for loop, just change play status at old index and new index
  for (let i = 0; i < (productDetailInfo.value?.mainVideos?.length ?? 0); ++i) {
    const key = `v${i}`
    let videoContext
    if (videoContextsMap.has(key)) videoContext = videoContextsMap.get(key)
    else {
      videoContext = uni.createVideoContext(`v${i}`)
      videoContextsMap.set(key, videoContext)
    }

    if (carouselIndex.value === i) videoContext.play()
    else videoContext.pause()
  }
}

function previewCarouselImage(event: UniHelper.BaseEvent) {
  uni.previewImage({
    current: event?.target?.dataset?.sourceUrl,
    urls: productDetailInfo.value!.mainPictures,
  })
}

const paramsForServicePopup = reactive({
  showPopup: false,
  // popupHeight: 40,
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  // closeButtonSize: 30
})
</script>

<style lang="scss">
page {
  .container {
    background-color: rgb(244, 244, 244);

    .services {
      display: flex;
      flex-direction: column;
      align-items: center;

      .services-title {
        font-size: 35rpx;
        padding: 10rpx;
      }

      .services-divider {
        width: 100%;
        height: 1rpx;
        background-color: rgb(210 210 210 / 40%);
        margin: 15rpx;
      }

      .services-part-title {
        align-self: flex-start;
        font-weight: bold;
        font-size: 30rpx;
        position: relative;
        margin: 20rpx;

        &::before {
          content: '·';
          position: absolute;
          left: -20rpx;
          color: rgb(181, 181, 181);
        }
      }

      .services-part-content {
        font-size: 26rpx;
        color: gray;
        padding: 0 20rpx;
      }
    }

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
          padding: 10rpx 26rpx;
          display: flex;
          align-items: center;

          text {
            color: white;
            // font-size: 28rpx;
            font-family: 'fira-code';
          }
        }
      }

      .price-bar {
        width: 100%;
        height: 115rpx;
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
    <Skeleton v-show="!productDetailInfo" />
    <XtxPopupLayer
      @closePopup="paramsForServicePopup.showPopup = false"
      v-bind="paramsForServicePopup"
    >
      <template #content>
        <view class="services">
          <view class="services-title"> 服务说明 </view>
          <view class="services-divider"></view>
          <view class="services-part-title"> 无忧退货 </view>
          <view class="services-part-content">
            自收到商品之日起30天内，可在线申请无忧退货服务（食品等特殊商品外）</view
          >
          <view class="services-part-title"> 快速退款 </view>
          <view class="services-part-content">
            收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日
          </view>
          <view class="services-part-title"> 满88元免邮费 </view>
          <view class="services-part-content">
            单笔订单金额（不含运费）88元可免邮费，不满88元，单笔订单收取10元邮费
          </view>
        </view>
      </template>
    </XtxPopupLayer>
    <scroll-view
      v-show="productDetailInfo"
      class="scroll-view"
      :style="{ height: scrollViewHeight + 'px' }"
      scroll-y
      enable-back-to-top
    >
      <view class="carousel">
        <swiper
          class="swiper"
          :autoplay="!hasVideos"
          :interval="3000"
          circular
          :current="carouselIndex"
          @change="onSwiperItemChange"
        >
          <swiper-item v-for="(video, index) in productDetailInfo?.mainVideos" :key="video">
            <video
              :id="`v${index}`"
              :src="video"
              loop
              autoplay
              muted
              object-fit="contain"
              title="商品介绍"
              show-mute-btn
              play-btn-position="center"
              :enable-progress-gesture="false"
            />
          </swiper-item>
          <swiper-item v-for="image in productDetailInfo?.mainPictures" :key="image">
            <image
              @tap="previewCarouselImage"
              :data-source-url="image"
              :src="image"
              mode="aspectFill"
            />
          </swiper-item>
        </swiper>
        <view class="indicator" :style="carouselIndicatorStyle" v-if="productDetailInfo">
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

      <view class="info-bar">
        <view class="specification-bar">
          <text class="text-left">选择</text>
          <text class="text-right">白色</text>
          <text class="arrow">></text>
        </view>
        <view class="address-bar">
          <text class="text-left">送至</text>
          <text class="text-right">请选择收货地址</text>
          <text class="arrow">></text>
        </view>
        <view class="services-bar" @tap="paramsForServicePopup.showPopup = true">
          <text class="text-left">服务</text>
          <text class="text-right">无忧退 快速退款 免费包邮</text>
          <text class="arrow">></text>
        </view>
      </view>

      <view class="divider"></view>

      <view class="detail" v-if="!hideElementsForTest">
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

      <view class="content-area">
        <image
          :src="img"
          mode="widthFix"
          v-for="img in hideElementsForTest
            ? productDetailInfo?.details?.pictures.slice(0, 3)
            : productDetailInfo?.details?.pictures"
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
