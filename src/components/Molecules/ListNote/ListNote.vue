<template>
  <ListLayout>
    <NoteCard
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @note-click="emit('note-click', $event)"
    />
  </ListLayout>
</template>

<script setup lang="ts">
import ListLayout from '../ListLayout/ListLayout.vue'
import NoteCard from '../NoteCard/NoteCard.vue'
import type { NoteDisplay } from '../../../types/display'

const props = defineProps<{
  notes: NoteDisplay[]
}>()

const emit = defineEmits<{
  (e: 'note-click', note: NoteDisplay): void
}>()
</script>
