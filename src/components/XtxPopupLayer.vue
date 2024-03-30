<template>
  <view class="container" @tap="$emit('closePopup')" :class="{ 'show-mask': showPopup }">
    <view class="content-area" @tap.stop="" :class="{ 'show-content': showPopup }">
      <uni-icons
        @tap="$emit('closePopup')"
        class="close-button"
        type="closeempty"
        :size="closeButtonSize"
      />
      <view class="content">
        <slot name="content"></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  showPopup: {
    type: Boolean,
    required: true,
  },
  backgroundColor: {
    type: String,
    default: 'white',
  },
  // percentage
  popupHeight: {
    type: Number,
    default: 55,
  },
  closeButtonSize: {
    type: Number,
    default: 20,
  },
})

const popupHeightComputed = computed(() => props.popupHeight + '%')
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  visibility: hidden;
  transition: all 1s;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;

  .content-area {
    transform: translateY(100%);
    transform-origin: top;
    transition: all 1s;
    flex-basis: v-bind(popupHeightComputed);
    background-color: v-bind(backgroundColor);
    overflow: scroll;

    .close-button {
      position: sticky;
      top: 15rpx;
      right: 15rpx;
      float: right;
      // padding: 0 8rpx 0 8rpx;
      border-radius: 20rpx;
      display: flex;

      &:active {
        background-color: #9f9f9f7a;
        // border: 5rpx solid #9f9f9f7a;
      }
    }

    .content {
      padding: 15rpx 50rpx 50rpx 50rpx;
    }
  }

  .show-content {
    transform: translateY(0);
  }
}

.show-mask {
  visibility: visible;
  background-color: rgba(84, 84, 84, 0.5);
}
</style>
