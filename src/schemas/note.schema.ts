import { z } from 'zod';

/**
 * Schéma standalone pour la création d'une note (formulaire NoteCreation).
 * Champs réellement utilisés par le formulaire de création.
 */
export const NoteCreateSchema = z
  .object({
    title: z.string().optional(),
    contentMd: z.string().optional(),
    tagIds: z.array(z.string()).optional(),
  })
  .refine((data) => data.title || data.contentMd, {
    message: 'Au moins un titre ou un contenu est requis',
    path: ['contentMd'],
  });

/**
 * Schéma standalone pour la mise à jour d'une note (formulaire NoteEditor).
 * id requis ; contentMd et tagIds optionnels (partial update).
 */
export const NoteUpdateSchema = z.object({
  id: z.string(),
  contentMd: z.string().optional(),
  tagIds: z.array(z.string()).optional(),
});

export type NoteCreate = z.infer<typeof NoteCreateSchema>;
export type NoteUpdate = z.infer<typeof NoteUpdateSchema>;
