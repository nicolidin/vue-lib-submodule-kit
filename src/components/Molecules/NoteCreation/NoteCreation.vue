<template>
  <div class="note-creation">
    <input
      v-model="formData.title"
      type="text"
      placeholder="Titre"
      class="note-creation__title"
      :class="{ 'note-creation__title--error': errors.title }"
    />
    <div v-if="errors.title" class="note-creation__error">
      {{ errors.title[0] }}
    </div>

    <textarea
      v-model="formData.contentMd"
      placeholder="Content (Markdown)..."
      class="note-creation__content"
      :class="{ 'note-creation__content--error': errors.contentMd }"
    />
    <div v-if="errors.contentMd" class="note-creation__error">
      {{ errors.contentMd[0] }}
    </div>

    <TagDropdown
      v-model="formData.tagIds"
      :tags="tags"
      class="note-creation__tags"
    />

    <div class="note-creation__actions">
      <button
        @click="emitNote"
        :disabled="!isValid"
        class="note-creation__actions-btn note-creation__actions-btn--primary"
      >
        Créer
      </button>
      <button
        @click="resetForm"
        type="button"
        class="note-creation__actions-btn note-creation__actions-btn--secondary"
      >
        Fermer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TagDropdown from "../TagDropdown/TagDropdown.vue";
import { useValidation } from "../../../composables/useValidation/useValidation";
import { NoteCreateSchema } from "../../../schemas/note.schema";
import type { TagOption } from "../../../types/display";

const props = defineProps<{
  tags?: TagOption[];
}>();

const emit = defineEmits<{
  (e: "create", val: { title: string; contentMd: string; tagIds: string[] }): void;
}>();

const formData = ref({
  title: "",
  contentMd: "",
  tagIds: [] as string[],
});

const { errors, validate, isValid } = useValidation(NoteCreateSchema, formData);

function emitNote() {
  if (validate()) {
    const payload = {
      title: formData.value.title || "",
      contentMd: formData.value.contentMd || "",
      tagIds: formData.value.tagIds || [],
    };
    emit("create", payload);
    resetForm();
  }
}

function resetForm() {
  formData.value = {
    title: "",
    contentMd: "",
    tagIds: [],
  };
}
</script>

<style scoped lang="scss">
.note-creation {
  border-radius: $spacing-8;
  box-shadow: 0 1px 4px rgba(60, 64, 67, 0.15);
  padding: $spacing-16;
  max-width: 400px;
  margin: 0 auto;

  &__title {
    width: 100%;
    margin-bottom: $spacing-8;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding: $spacing-4 0;
    @include typo-heading-06();

    &--error {
      border-bottom-color: #d32f2f;
    }
  }

  &__content {
    width: 100%;
    min-height: 60px;
    border: none;
    border-bottom: 1px solid #eee;
    margin-bottom: $spacing-12;
    resize: vertical;
    outline: none;
    padding: $spacing-4 0;
    @include typo-body;

    &--error {
      border-bottom-color: #d32f2f;
    }
  }

  &__error {
    color: #d32f2f;
    font-size: 0.875rem;
    margin-top: -$spacing-8;
    margin-bottom: $spacing-8;
    @include typo-body-small;
  }

  &__tags {
    margin-bottom: $spacing-12;
  }

  &__actions {
    display: flex;
    gap: $spacing-8;
    justify-content: flex-end;

    &-btn {
      background: #f1f3f4;
      border: none;
      border-radius: $spacing-4;
      padding: $spacing-4 $spacing-16;
      cursor: pointer;
      font-size: 1em;
      transition: background 0.2s;
      @include typo-body-small;

      &--primary {
        background: #e3f2fd;
        color: #1976d2;
      }

      &--secondary {
        background: #f1f3f4;
        color: #333;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
