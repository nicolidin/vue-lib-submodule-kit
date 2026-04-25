import { ref } from "vue";
import ColorPicker from "./ColorPicker.vue";

export default {
  title: "Molecules/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant de sélection de couleur avec une grille de couleurs prédéfinies. Émet la couleur sélectionnée via v-model.",
      },
    },
  },
};

const Template = (args: any) => ({
  components: { ColorPicker },
  setup() {
    const selectedColor = ref(args.modelValue || "");
    return { args, selectedColor };
  },
  template: `
    <v-app>
      <v-main>
        <div style="padding: 2rem;">
          <h3 style="margin-bottom: 1rem;">Couleur sélectionnée: {{ selectedColor || "Aucune" }}</h3>
          <ColorPicker 
            v-model="selectedColor"
            :colors="args.colors"
          />
        </div>
      </v-main>
    </v-app>
  `,
});

export const Default: any = Template.bind({});
Default.args = {
  modelValue: "",
  colors: [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E2",
    "#F8B739",
    "#52BE80",
    "#EC7063",
    "#5DADE2",
  ],
};

export const WithPreselectedColor: any = Template.bind({});
WithPreselectedColor.args = {
  modelValue: "#4ECDC4",
  colors: [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F7DC6F",
  ],
};

export const CustomColors: any = Template.bind({});
CustomColors.args = {
  modelValue: "",
  colors: [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ],
};

