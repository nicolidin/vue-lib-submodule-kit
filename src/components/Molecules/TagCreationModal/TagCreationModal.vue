<template>
  <ModalLayout
    :model-value="modelValue"
    title="Créer un tag"
    :max-width="400"
    @update:model-value="handleUpdate"
  >
    <div class="tag-creation-modal">
      <v-text-field
        v-model="tagName"
        label="Nom du tag"
        placeholder="Entrez le nom du tag"
        class="tag-creation-modal__input"
        @keyup.enter="handleCreate"
      />
      
      <div class="tag-creation-modal__color-section">
        <label class="tag-creation-modal__color-label">Couleur</label>
        <ColorPicker v-model="selectedColor" />
      </div>
    </div>

    <template #actions>
      <v-btn variant="text" @click="handleCancel">Annuler</v-btn>
      <v-btn
        variant="flat"
        color="primary"
        @click="handleCreate"
        :disabled="!isValid"
      >
        Créer
      </v-btn>
    </template>
  </ModalLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import ModalLayout from "../ModalLayout/ModalLayout.vue";
import ColorPicker from "../ColorPicker/ColorPicker.vue";

const props = defineProps<{
  // État d'ouverture/fermeture de la modal
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "create", tag: { title: string; color: string }): void;
}>();

const tagName = ref("");
const selectedColor = ref("");

// Le formulaire est valide si le nom n'est pas vide
const isValid = computed(() => {
  return tagName.value.trim().length > 0;
});

// Réinitialiser le formulaire quand la modal s'ouvre
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    tagName.value = "";
    selectedColor.value = "";
  }
});

function handleUpdate(value: boolean) {
  emit("update:modelValue", value);
  if (!value) {
    // Réinitialiser quand on ferme
    tagName.value = "";
    selectedColor.value = "";
  }
}

function handleCreate() {
  if (isValid.value) {
    emit("create", {
      title: tagName.value.trim(),
      color: selectedColor.value || "#FF6B6B", // Couleur par défaut si aucune sélectionnée
    });
    handleCancel();
  }
}

function handleCancel() {
  emit("update:modelValue", false);
}
</script>

<style scoped lang="scss">
.tag-creation-modal {
  &__input {
    margin-bottom: $spacing-24;
  }

  &__color-section {
    margin-top: $spacing-16;
  }

  &__color-label {
    display: block;
    margin-bottom: $spacing-12;
    @include typo-body();
    font-weight: 500;
    color: rgba(var(--v-theme-on-surface), 0.87);
  }
}
</style>

