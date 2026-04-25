import { ref, computed, ComputedRef } from "vue";

/**
 * Gère les états de validation du formulaire et la visibilité des erreurs.
 * Les erreurs sont affichées uniquement après une tentative de validation.
 */
export default function useFormValidation<
  T extends Record<string, ComputedRef<boolean>>,
>(hasErrorByElements: T) {
  const showErrorByElements = ref({} as Record<keyof T, ComputedRef<boolean>>);
  const isFormTouched = ref(false);

  Object.entries(hasErrorByElements).forEach(([id, hasError]) => {
    showErrorByElements.value[id as keyof T] = computed(
      () => isFormTouched.value && hasError.value,
    );
  });

  const isAllValidated = computed(() =>
    Object.values(hasErrorByElements).every((el) => !el.value),
  );

  function validateForm() {
    isFormTouched.value = true;
    return isAllValidated.value;
  }

  return {
    showErrorByElements,
    validateForm,
    isAllValidated,
  };
}
