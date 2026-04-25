import { ref, computed, type Ref } from 'vue';
import { z, type ZodSchema } from 'zod';

/**
 * Composable de validation avec Zod (mode "computed lazy").
 * Les erreurs et isValid sont dérivés réactivement des données après le premier submit.
 *
 * @param schema - Schéma Zod pour valider les données
 * @param dataRef - Ref (ou ComputedRef) des données à valider
 * @returns Objet avec errors, hasValidatedOnce, validate, isValid
 *
 * @example
 * ```typescript
 * const formData = ref({ title: '', contentMd: '', tagIds: [] });
 * const { errors, validate, isValid } = useValidation(NoteCreateSchema, formData);
 * ```
 */
export function useValidation<T extends ZodSchema>(schema: T, dataRef: Ref<unknown>) {
  // "Lazy" : on n'affiche les erreurs qu'après une première tentative de submit.
  const hasValidatedOnce = ref(false);

  // Erreurs par champ. Vides tant qu'on n'a pas validé ; ensuite dérivées réactivement du parse Zod.
  // Dès que l'utilisateur corrige le formulaire, les erreurs se mettent à jour (et le bouton se réactive).
  const errors = computed<Record<string, string[]>>(() => {
    if (!hasValidatedOnce.value) return {};
    const result = schema.safeParse(dataRef.value);
    if (result.success) return {};
    // flatten() met l'erreur Zod en forme { champ: ['msg1', 'msg2'] } ; ?? {} si vide
    return (result.error.flatten().fieldErrors ?? {}) as Record<string, string[]>;
  });

  // Valide pour activer le bouton. Avant premier submit = true ; après, = résultat du parse sur les données actuelles.
  const isValid = computed(() => {
    if (!hasValidatedOnce.value) return true;
    return schema.safeParse(dataRef.value).success;
  });

  // À appeler au submit. Marque qu'on a validé au moins une fois et retourne true si les données passent le schéma.
  // En cas de succès, on repasse hasValidatedOnce à false pour que le formulaire reset n'affiche plus d'erreurs.
  function validate(): boolean {
    hasValidatedOnce.value = true;
    const ok = schema.safeParse(dataRef.value).success;
    if (ok) hasValidatedOnce.value = false;
    return ok;
  }

  return {
    errors,
    hasValidatedOnce,
    validate,
    isValid,
  };
}
