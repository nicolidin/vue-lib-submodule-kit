<template>
  <div class="color-picker">
    <div class="color-picker__grid">
      <button
        v-for="color in colors"
        :key="color"
        type="button"
        :class="[
          'color-picker__item',
          { 'color-picker__item--selected': modelValue === color }
        ]"
        :style="{ backgroundColor: color }"
        @click="handleColorClick(color)"
        :aria-label="`Sélectionner la couleur ${color}`"
      >
        <v-icon
          v-if="modelValue === color"
          size="small"
          color="white"
          class="color-picker__item-icon"
        >
          mdi-check
        </v-icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    // Couleur actuellement sélectionnée
    modelValue?: string;
    // Liste des couleurs disponibles
    colors?: string[];
  }>(),
  {
    colors: () => [
      "#FF6B6B", // Rouge
      "#4ECDC4", // Turquoise
      "#45B7D1", // Bleu
      "#FFA07A", // Saumon
      "#98D8C8", // Vert menthe
      "#F7DC6F", // Jaune
      "#BB8FCE", // Violet
      "#85C1E2", // Bleu clair
      "#F8B739", // Orange
      "#52BE80", // Vert
      "#EC7063", // Rose
      "#5DADE2", // Bleu ciel
    ],
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function handleColorClick(color: string) {
  emit("update:modelValue", color);
}
</script>

<style scoped lang="scss">
.color-picker {
  &__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: $spacing-8;
  }

  &__item {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    padding: 0;
    background: none;

    &:hover {
      transform: scale(1.1);
      border-color: rgba(0, 0, 0, 0.3);
    }

    &--selected {
      border: 3px solid rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 1);
    }

    &-icon {
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
    }
  }
}
</style>

