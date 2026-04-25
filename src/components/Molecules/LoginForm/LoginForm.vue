<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field
      :model-value="email"
      @update:model-value="$emit('update:email', $event)"
      label="Email"
      type="email"
      required
      :disabled="isLoading"
      autocomplete="email"
    />

    <v-text-field
      :model-value="password"
      @update:model-value="$emit('update:password', $event)"
      label="Mot de passe"
      type="password"
      required
      :disabled="isLoading"
      autocomplete="current-password"
    />

    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      class="login-form__error"
    >
      {{ error }}
    </v-alert>

    <v-btn
      type="submit"
      variant="flat"
      color="primary"
      block
      :disabled="isLoading || !isFormValid"
      :loading="isLoading"
    >
      Se connecter
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  email: string;
  password: string;
  isLoading?: boolean;
  error?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  error: null,
});

const emit = defineEmits<{
  'update:email': [value: string];
  'update:password': [value: string];
  'submit': [];
}>();

const isFormValid = computed(() => {
  return props.email.trim() !== '' && props.password.trim() !== '';
});

function handleSubmit() {
  if (isFormValid.value) {
    emit('submit');
  }
}
</script>

<style scoped lang="scss">
.login-form {
  &__error {
    margin-bottom: $spacing-16;
  }
}
</style>



