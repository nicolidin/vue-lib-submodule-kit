<template>
  <div class="add-container">
    <input
      v-model="text"
      type="text"
      placeholder="Nouvelle tâche"
      @keyup.enter="emitAdd"
    />
    <button @click="emitAdd">➕</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "add", text: string): void;
}>();

const text = ref("");

function emitAdd() {
  emit("add", text.value);
  text.value = "";
}
</script>

