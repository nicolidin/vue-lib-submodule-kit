<template>
  <Dropdown
    v-if="tags && tags.length > 0"
    :model-value="normalizedModelValue"
    :items="tags"
    item-title="title"
    item-value="id"
    :label="label"
    multiple
    chips
    :closable-chips="false"
    density="compact"
    :disabled="disabled"
    @update:model-value="handleUpdate"
  >
    <template v-slot:item="{ props: itemProps, item }">
      <v-list-item v-bind="itemProps">
        <template v-slot:title>
          <Tag
            :name="item.raw.title"
            :color="item.raw.color"
          />
        </template>
      </v-list-item>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Dropdown from "../../Atoms/Dropdown/Dropdown.vue";
import Tag from "../../Atoms/Tag/Tag.vue";
import type { TagOption } from "../../../types/display";

const props = withDefaults(
  defineProps<{
    tags?: TagOption[];
    // Valeur sélectionnée (array d'IDs)
    modelValue?: string[];
    // Label du dropdown
    label?: string;
    // Si true, le dropdown est désactivé
    disabled?: boolean;
  }>(),
  {
    modelValue: () => [],
    label: "Tags",
    disabled: false,
  }
);

const emit = defineEmits<{
  (_e: "update:modelValue", _value: string[]): void;
}>()

const normalizedModelValue = computed(() => {
  return props.modelValue || [];
});

function handleUpdate(value: any) {
  // Vuetify peut retourner des objets complets au lieu des valeurs seulement
  // On doit extraire les id
  let newIds: string[] = [];
  
  if (Array.isArray(value)) {
    newIds = value.map(v => {
      // Si c'est déjà une string (id), on la garde
      if (typeof v === 'string') {
        return v;
      }
      // Si c'est un objet, on extrait l'id
      if (typeof v === 'object' && v !== null && 'id' in v) {
        return String(v.id);
      }
      // Sinon, on convertit en string
      return String(v);
    });
  } else if (value !== null && value !== undefined) {
    // Si c'est une seule valeur
    if (typeof value === 'string') {
      newIds = [value];
    } else if (typeof value === 'object' && 'id' in value) {
      newIds = [String(value.id)];
    } else {
      newIds = [String(value)];
    }
  }
  
  emit("update:modelValue", newIds);
}
</script>

<style scoped lang="scss">
.tag-dropdown {
  &__selected-tag {
    flex-shrink: 0;
    margin-right: 4px;
  }
}

// Masquer le v-chip par défaut pour afficher uniquement notre Tag personnalisé
:deep(.v-select__selection .v-chip) {
  padding: 0;
  background: transparent;
  border: none;
  min-width: auto;
  height: auto;

  .v-chip__content {
    padding: 0;
  }
}
</style>

