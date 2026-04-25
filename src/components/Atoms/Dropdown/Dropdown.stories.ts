import { ref } from "vue";
import Dropdown from "./Dropdown.vue";

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant dropdown pur basé sur v-select de Vuetify. Wrapper réutilisable pour créer des sélecteurs.",
      },
    },
  },
};

const Template = (args: any) => ({
  components: { Dropdown },
  setup() {
    const selectedValue = ref(args.modelValue || (args.multiple ? [] : null));
    return { args, selectedValue };
  },
  template: `
    <v-app>
      <v-main>
        <div style="max-width: 400px; margin: 2rem auto; padding: 2rem;">
          <Dropdown 
            v-model="selectedValue"
            v-bind="args"
          />
          <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 8px;">
            <strong>Valeur sélectionnée :</strong>
            <pre>{{ JSON.stringify(selectedValue, null, 2) }}</pre>
          </div>
        </div>
      </v-main>
    </v-app>
  `,
});

export const Default: any = Template.bind({});
Default.args = {
  modelValue: null,
  items: [
    { title: "Option 1", value: "1" },
    { title: "Option 2", value: "2" },
    { title: "Option 3", value: "3" },
  ],
  label: "Sélectionner une option",
};

export const Multiple: any = Template.bind({});
Multiple.args = {
  modelValue: [],
  items: [
    { title: "Option 1", value: "1" },
    { title: "Option 2", value: "2" },
    { title: "Option 3", value: "3" },
    { title: "Option 4", value: "4" },
  ],
  label: "Sélectionner plusieurs options",
  multiple: true,
  chips: true,
  closableChips: true,
};

export const Compact: any = Template.bind({});
Compact.args = {
  modelValue: null,
  items: [
    { title: "Option 1", value: "1" },
    { title: "Option 2", value: "2" },
    { title: "Option 3", value: "3" },
  ],
  label: "Dropdown compact",
  density: "compact",
};

