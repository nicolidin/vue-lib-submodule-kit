<template>
  <v-form @submit.prevent="handleSubmit">
    <v-text-field
      :model-value="nom"
      @update:model-value="$emit('update:nom', $event)"
      label="Nom"
      required
      :disabled="isLoading"
      autocomplete="name"
    />

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
      :minlength="6"
      :disabled="isLoading"
      autocomplete="new-password"
      :hint="password.length > 0 && password.length < 6 ? 'Minimum 6 caractères' : ''"
      persistent-hint
    />

    <v-text-field
      :model-value="confirmPassword"
      @update:model-value="$emit('update:confirmPassword', $event)"
      label="Confirmer le mot de passe"
      type="password"
      required
      :disabled="isLoading"
      autocomplete="new-password"
      :error="passwordMismatch"
      :error-messages="passwordMismatch ? 'Les mots de passe ne correspondent pas' : ''"
    />

    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      class="register-form__error"
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
      Créer un compte
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  nom: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading?: boolean;
  error?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  error: null,
});

const emit = defineEmits<{
  'update:nom': [value: string];
  'update:email': [value: string];
  'update:password': [value: string];
  'update:confirmPassword': [value: string];
  'submit': [];
}>();

const passwordMismatch = computed(() => {
  return props.password !== '' &&
         props.confirmPassword !== '' &&
         props.password !== props.confirmPassword;
});

const isFormValid = computed(() => {
  return props.nom.trim() !== '' &&
         props.email.trim() !== '' &&
         props.password.trim() !== '' &&
         props.password.length >= 6 &&
         !passwordMismatch.value;
});

function handleSubmit() {
  if (isFormValid.value) {
    emit('submit');
  }
}
</script>

<style scoped lang="scss">
.register-form {
  &__error {
    margin-bottom: $spacing-16;
  }
}
</style>


