<template>
  <li class="todo-item">
    <span>{{ todo }}</span>
    <button @click="emit('delete', index)">🗑</button>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  todo: string;
  index: number;
}>();

const emit = defineEmits<{
  (e: "delete", index: number): void;
}>();
</script>

