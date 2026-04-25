<template>
  <div>
    <h2>Todo List</h2>

    <AddItem @add="(text) => emit('add', text)" />

    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        @delete="(index) => emit('delete', index)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import AddItem from "./AddItem.vue";
import TodoItem from "./TodoItem.vue";

const props = defineProps<{
  todos: string[];
}>();

const emit = defineEmits<{
  (e: "add", text: string): void;
  (e: "delete", index: number): void;
}>();
</script>

