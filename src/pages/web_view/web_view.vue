<script setup lang="ts">
const query = defineProps<{ src: string }>()
</script>

<template>
  <web-view :src="query.src" />
</template>

<style lang="scss"></style>
