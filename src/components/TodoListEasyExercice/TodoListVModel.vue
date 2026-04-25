<template>
  <div>
    <h2>Todo List (v-model)</h2>

    <AddItem @add="handleAdd" />

    <ul>
      <TodoItem
        v-for="(todo, index) in modelValue"
        :key="index"
        :todo="todo"
        :index="index"
        @delete="handleDelete"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import AddItem from "./AddItem.vue";
import TodoItem from "./TodoItem.vue";

const props = defineProps<{
  modelValue: string[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
}>();

function handleAdd(text: string) {
  if (!text.trim()) return;
  emit("update:modelValue", [...props.modelValue, text]);
}

function handleDelete(index: number) {
  const newTodos = props.modelValue.filter((_, i) => i !== index);
  emit("update:modelValue", newTodos);
}
</script>



