/**
 * Types internes de la lib (non exportés).
 * Partagés entre composants pour les props uniquement.
 * Le projet hôte garde ses propres types domaine (NoteType, TagType, etc.).
 */

/** Tag tel qu’affiché dans un dropdown / liste de sélection (id, title, color). */
export type TagOption = {
  id: string;
  title: string;
  color: string;
};

/** Représentation d’un tag pour l’affichage (carte/liste) : string ou objet title+color. */
export type NoteDisplayTag = string | { title: string; color: string };

/** Note telle qu’affichée dans ListNote / NoteCard (données pour le rendu, tags déjà résolus ou bruts). */
export type NoteDisplay = {
  id: string | number;
  contentMd: string;
  createdAt: string;
  tags?: NoteDisplayTag[];
};
