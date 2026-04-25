<template>
  <div class="list-layout-destructured">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="list-layout-destructured__item"
    >
      <slot :item="item" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: unknown[]
}>()
</script>

<style scoped>
.list-layout-destructured {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.list-layout-destructured__item {
  flex: 0 0 auto;
}
</style>
