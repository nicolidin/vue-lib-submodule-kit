import { z } from 'zod';

/**
 * Schéma standalone pour la création d'un tag (formulaire tag).
 */
export const TagCreateSchema = z.object({
  title: z.string().min(1, 'Titre requis'),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Couleur doit être au format hex (#RRGGBB)'),
});

/**
 * Schéma standalone pour la mise à jour d'un tag.
 * id requis ; title et color optionnels (partial update).
 */
export const TagUpdateSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Titre requis').optional(),
  color: z.string().regex(/^#[0-9A-Fa-f]{6}$/, 'Couleur doit être au format hex (#RRGGBB)').optional(),
});

export type TagCreate = z.infer<typeof TagCreateSchema>;
export type TagUpdate = z.infer<typeof TagUpdateSchema>;
