# Politique `package.json` (cette lib)

- **Aucun** champ `dependencies` ni `peerDependencies` : le runtime (Vue, Vuetify, Pinia, Zod, etc.) est **fourni par l’application hôte** (`VueFormationExpertWithStrapi`).
- **Uniquement `devDependencies`** : Storybook, ESLint, outils, et mêmes libs qu’en prod pour exécuter Storybook en local.
- **Pas de fichier barrel** (`src/index.ts` supprimé) : l’hôte importe des **fichiers explicites** (`@vueLibExo/components/...`, `@vueLibExo/lidinAppKitConfig/...`, etc.).
- **Installer les deps** : depuis la **racine du monorepo hôte** (`yarn install`), pas un `yarn` isolé dans ce dossier (évite un `node_modules` dédié inutile ; le hoisting Yarn place les paquets à la racine du workspace).
- **Pas de playground** : prévisualisation via **`yarn storybook`** (workspace) uniquement.
