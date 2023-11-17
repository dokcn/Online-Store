<script setup lang="ts">
//
</script>

<template>
  <view class="price-group">
    <text class="sign">￥</text>
    <text class="price">59.6</text>
  </view>
</template>

<style lang="scss">
.price-group {
  font-size: 45rpx;
  color: #e04747;
  display: flex;
  justify-content: center;
  align-items: center;
  .sign {
    font-size: 30rpx;
    display: inline-block;
  }
  .price {
    margin-left: -3rpx;
    display: inline-block;
  }
}
</style>
