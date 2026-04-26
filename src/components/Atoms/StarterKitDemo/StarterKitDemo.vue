<template>
  <v-card class="starter-kit-demo pa-4" max-width="420" variant="outlined">
    <v-card-title class="text-h6">Starter kit (lib)</v-card-title>
    <v-card-text>
      Composant de démonstration minimal pour une bibliothèque de composants Vue.
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineOptions({ name: "StarterKitDemo" });
</script>

<style scoped lang="scss">
.starter-kit-demo {
  border-radius: 12px;
}
</style>
