<template>
  <div class="note-card" role="button" tabindex="0" @click="emit('note-click', note)" @keydown.enter="emit('note-click', note)">
    <h3>{{ title }}</h3>
    yowwww
    <p>{{ contentWithoutTitle }}</p>
    <div class="note-meta" v-if="normalizedTags.length > 0">
      <Tag
          v-for="tag in normalizedTags"
          :key="tag.name"
          :name="tag.name"
          :color="tag.color"
          :chip-style="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { extractTitleFromMarkdown } from '../../../services/utils/markdownUtils'
import Tag from '../../Atoms/Tag/Tag.vue'
import type { NoteDisplay } from '../../../types/display'

const props = defineProps<{
  note: NoteDisplay
}>()

const emit = defineEmits<{
  (e: 'note-click', note: NoteDisplay): void
}>()

const title = computed(() => {
  if (!props.note.contentMd) return 'Sans titre'
  return extractTitleFromMarkdown(props.note.contentMd) || 'Sans titre'
})

const contentWithoutTitle = computed(() => {
  // ✅ Sécurité : vérifier que contentMd existe avant d'appeler split
  if (!props.note.contentMd) return ''

  const lines = props.note.contentMd.split('\n')
  return lines[0]?.trim().startsWith('#')
      ? lines.slice(1).join('\n').trim()
      : props.note.contentMd
})

const normalizedTags = computed(() => {
  if (!props.note.tags?.length) return []

  return props.note.tags.map(tag =>
      typeof tag === 'string'
          ? { name: tag, color: '#9E9E9E' }
          : { name: tag.title, color: tag.color }
  )
})
</script>

<style scoped>
.note-card {
  border: 1px solid #aaa;
  padding: 0.5rem;
  width: 200px;
  min-height: 120px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
}
.note-card:hover {
  background-color: #f0f0f0;
}

.note-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
</style>
