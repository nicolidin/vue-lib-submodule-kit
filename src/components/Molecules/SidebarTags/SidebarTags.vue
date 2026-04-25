<template>
  <v-navigation-drawer
    :model-value="modelValue"
    :permanent="permanent"
    :temporary="temporary"
    class="sidebar-tags"
  >
    <template v-if="title">
      <div class="sidebar-tags__title">
        {{ title }}
      </div>
    </template>
    
    <v-list class="sidebar-tags__list">
      <v-list-item
        v-for="tag in allTagsWithDefault"
        :key="tag.libelleName"
        @click="handleTagClick(tag)"
        :class="[
          'sidebar-tags__item',
          { 'sidebar-tags__item--selected': tag.isSelected }
        ]"
      >
        <template v-slot:prepend>
          <v-icon
            v-if="tag.isSelected"
            size="small"
            color="primary"
            class="sidebar-tags__item-icon"
          >
            mdi-check-circle
          </v-icon>
          <v-icon
            v-else
            size="small"
            color="grey-lighten-1"
            class="sidebar-tags__item-icon"
          >
            mdi-label-outline
          </v-icon>
        </template>
        
        <v-list-item-title class="sidebar-tags__item-label">
          <Tag
            :name="tag.libelleName"
            :color="tag.color || '#9E9E9E'"
          />
        </v-list-item-title>
      </v-list-item>
      
      <v-list-item
        class="sidebar-tags__add-item"
        @click="isTagCreationModalOpen = true"
      >
        <template v-slot:prepend>
          <v-icon
            size="small"
            color="grey-lighten-1"
            class="sidebar-tags__item-icon"
          >
            mdi-plus
          </v-icon>
        </template>
        
        <v-list-item-title class="sidebar-tags__item-label">
          addTag
        </v-list-item-title>
      </v-list-item>
    </v-list>
    
    <TagCreationModal
      v-model="isTagCreationModalOpen"
      @create="handleTagCreate"
    />
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Tag from "../../Atoms/Tag/Tag.vue";
import TagCreationModal from "../TagCreationModal/TagCreationModal.vue";

const ALL_NOTES_TAG = "All Notes";

const props = defineProps<{
  // Liste des tags à afficher dans la sidebar
  tags: {
    libelleName: string;
    isSelected: boolean;
    color?: string;
  }[];
  // Titre optionnel affiché en haut de la sidebar
  title?: string;
  // État d'ouverture/fermeture de la sidebar (pour mode temporary)
  modelValue?: boolean;
  // Si true, la sidebar est toujours visible et ne peut pas être fermée
  permanent?: boolean;
  // Si true, la sidebar est temporaire et peut être ouverte/fermée
  temporary?: boolean;
}>();

const emit = defineEmits<{
  (e: "tag-click", tag: { libelleName: string; isSelected: boolean }): void;
  (e: "update:modelValue", value: boolean): void;
  (e: "tag-create", tag: { title: string; color: string }): void;
}>();

const isTagCreationModalOpen = ref(false);

// Filtrer "All Notes" de la liste des tags passés en props pour éviter les doublons
const filteredTags = computed(() => 
  props.tags.filter(tag => tag.libelleName !== ALL_NOTES_TAG)
);

// "All Notes" est sélectionné uniquement si aucun tag n'est sélectionné
const isAllNotesSelected = computed(() => {
  return !filteredTags.value.some(tag => tag.isSelected);
});

// Computed property qui ajoute "All Notes" au début de la liste
const allTagsWithDefault = computed(() => {
  const allNotesTag = {
    libelleName: ALL_NOTES_TAG,
    isSelected: isAllNotesSelected.value,
    color: '#9E9E9E',
  };
  
  return [allNotesTag, ...filteredTags.value];
});

function handleTagClick(tag: { libelleName: string; isSelected: boolean }) {
  // Si "All Notes" est cliqué, on désélectionne tous les autres tags
  if (tag.libelleName === ALL_NOTES_TAG) {
    // Émettre un événement pour chaque tag sélectionné avec l'état final souhaité (false)
    filteredTags.value
      .filter(t => t.isSelected)
      .forEach(t => emit("tag-click", { ...t, isSelected: false }));
  } else {
    // Pour un tag normal, calculer le nouvel état (toggle) et émettre l'état final souhaité
    const newSelectedState = !tag.isSelected;
    emit("tag-click", { ...tag, isSelected: newSelectedState });
  }
}

function handleTagCreate(tag: { title: string; color: string }) {
  emit("tag-create", tag);
}
</script>

<style scoped lang="scss">
// Largeur par défaut de la sidebar (256px)
::v-deep(.sidebar-tags) {
  width: 256px !important;
}

.sidebar-tags {
  &__title {
    padding: $spacing-16 $spacing-16 $spacing-8 $spacing-16;
    font-size: 0.875rem;
    font-weight: 500;
    color: #5f6368;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    @include typo-heading-06();
  }

  &__list {
    padding: 0;
  }

  &__item {
    &--selected {
      background-color: rgba(25, 103, 210, 0.08) !important;
      
      .sidebar-tags__item-label {
        color: rgb(var(--v-theme-primary));
        font-weight: 500;
      }
    }

    &-icon {
      margin-right: $spacing-8;
    }

    &-label {
      @include typo-body;
    }
  }

  &__add-item {
    cursor: pointer;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}
</style>

