<template>
  <v-dialog
    :model-value="modelValue"
    :max-width="maxWidth"
    :persistent="persistent"
    @update:model-value="handleUpdate"
  >
    <v-card class="modal-layout">
      <v-card-title v-if="title" class="modal-layout__title">
        {{ title }}
      </v-card-title>
      
      <v-card-text class="modal-layout__content">
        <slot></slot>
      </v-card-text>
      
      <v-card-actions v-if="$slots.actions" class="modal-layout__actions">
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // État d'ouverture/fermeture de la modal
    modelValue: boolean;
    // Titre de la modal
    title?: string;
    // Largeur maximale de la modal
    maxWidth?: string | number;
    // Si true, la modal ne peut pas être fermée en cliquant en dehors
    persistent?: boolean;
  }>(),
  {
    maxWidth: 500,
    persistent: false,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function handleUpdate(value: boolean) {
  emit("update:modelValue", value);
}
</script>

<style scoped lang="scss">
.modal-layout {
  &__title {
    @include typo-heading-05();
    padding: $spacing-16 $spacing-24;
  }

  &__content {
    padding: $spacing-24;
  }

  &__actions {
    padding: $spacing-16 $spacing-24;
    justify-content: flex-end;
    gap: $spacing-8;
  }
}
</style>

