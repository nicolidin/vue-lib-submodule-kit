import { ref } from "vue";
import NoteCreation from "./NoteCreation.vue";

export default {
  title: "Molecules/NoteCreation",
  component: NoteCreation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant de création de note simple, émet un objet note lors de la création.",
      },
    },
  },
};

const Template = (args: any) => ({
  components: { NoteCreation },
  setup() {
    const lastNote = ref<any>(null);
    const onCreate = (note: { title: string; contentMd: string; tagIds: string[] }) => {
      lastNote.value = note;
      console.log("Note créée:", note);
    };
    return { args, lastNote, onCreate };
  },
  template: `
    <v-app>
      <v-main>
        <div style="max-width: 420px; margin: 2rem auto;">
          <NoteCreation v-bind="args" @create="onCreate" />
          <div v-if="lastNote" style="margin-top: 2rem; background: #f5f5f5; padding: 1rem; border-radius: 8px;">
            <strong>Note émise :</strong>
            <pre>{{ JSON.stringify(lastNote, null, 2) }}</pre>
          </div>
        </div>
      </v-main>
    </v-app>
  `,
});

export const Default: any = Template.bind({});
Default.args = {};

export const WithTags: any = Template.bind({});
WithTags.args = {
  tags: [
    { id: "1", title: "Important", color: "#FF6B6B" },
    { id: "2", title: "Work", color: "#4ECDC4" },
    { id: "3", title: "Personal", color: "#45B7D1" },
    { id: "4", title: "Shopping", color: "#FFA07A" },
    { id: "5", title: "Ideas", color: "#98D8C8" },
  ],
};

