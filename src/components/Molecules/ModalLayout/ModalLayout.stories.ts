import { ref } from "vue";
import ModalLayout from "./ModalLayout.vue";

export default {
  title: "Molecules/ModalLayout",
  component: ModalLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant modal basé sur v-dialog de Vuetify. Fournit une structure standardisée pour les modals avec titre, contenu et actions.",
      },
    },
  },
};

const Template = (args: any) => ({
  components: { ModalLayout },
  setup() {
    const isOpen = ref(args.modelValue || false);
    return { args, isOpen };
  },
  template: `
    <v-app>
      <v-main>
        <div style="padding: 2rem;">
          <v-btn @click="isOpen = true">Ouvrir la modal</v-btn>
          <ModalLayout 
            v-model="isOpen"
            :title="args.title"
            :max-width="args.maxWidth"
            :persistent="args.persistent"
          >
            <p>Contenu de la modal. Vous pouvez insérer n'importe quel contenu ici.</p>
            <template #actions>
              <v-btn variant="text" @click="isOpen = false">Fermer</v-btn>
              <v-btn variant="flat" color="primary" @click="isOpen = false">Valider</v-btn>
            </template>
          </ModalLayout>
        </div>
      </v-main>
    </v-app>
  `,
});

export const Default: any = Template.bind({});
Default.args = {
  modelValue: false,
  title: "Titre de la modal",
  maxWidth: 500,
  persistent: false,
};

export const WithoutTitle: any = Template.bind({});
WithoutTitle.args = {
  modelValue: false,
  maxWidth: 500,
  persistent: false,
};

export const Persistent: any = Template.bind({});
Persistent.args = {
  modelValue: false,
  title: "Modal persistante",
  maxWidth: 500,
  persistent: true,
};

export const Large: any = Template.bind({});
Large.args = {
  modelValue: false,
  title: "Modal large",
  maxWidth: 800,
  persistent: false,
};

