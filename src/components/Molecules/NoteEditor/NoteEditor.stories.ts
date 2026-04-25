import { ref } from "vue";
import NoteEditor from "./NoteEditor.vue";

export default {
  title: "Molecules/NoteEditor",
  component: NoteEditor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant pur d'édition de note. Pré-remplit titre/contenu/tags depuis la prop `note`, émet `update` ou `cancel`.",
      },
    },
  },
};

const defaultNote = {
  id: "1",
  contentMd: "# Ma note\n\nContenu en **markdown**.",
  tagIds: ["1", "2"],
};

const defaultTags = [
  { id: "1", title: "Important", color: "#FF6B6B" },
  { id: "2", title: "Work", color: "#4ECDC4" },
  { id: "3", title: "Personal", color: "#45B7D1" },
];

const Template = (args: any) => ({
  components: { NoteEditor },
  setup() {
    const lastUpdate = ref<any>(null);
    const onUpdate = (payload: any) => {
      lastUpdate.value = payload;
      console.log("Note mise à jour:", payload);
    };
    const onCancel = () => {
      lastUpdate.value = { cancelled: true };
      console.log("Annulé");
    };
    return { args, lastUpdate, onUpdate, onCancel };
  },
  template: `
    <v-app>
      <v-main>
        <div style="max-width: 520px; margin: 2rem auto;">
          <NoteEditor v-bind="args" @update="onUpdate" @cancel="onCancel" />
          <div v-if="lastUpdate" style="margin-top: 2rem; background: #f5f5f5; padding: 1rem; border-radius: 8px;">
            <strong>Dernière action :</strong>
            <pre>{{ JSON.stringify(lastUpdate, null, 2) }}</pre>
          </div>
        </div>
      </v-main>
    </v-app>
  `,
});

export const Default = Template.bind({});
Default.args = {
  note: defaultNote,
  tags: defaultTags,
};

export const SansTags = Template.bind({});
SansTags.args = {
  note: { id: "2", contentMd: "# Titre seul\n\n", tagIds: [] },
  tags: [],
};

export const NoteVide = Template.bind({});
NoteVide.args = {
  note: { id: "3", contentMd: "", tagIds: [] },
  tags: defaultTags,
};
