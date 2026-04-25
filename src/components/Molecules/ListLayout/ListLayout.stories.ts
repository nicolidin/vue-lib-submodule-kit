import ListLayout from "./ListLayout.vue";

export default {
  title: "Molecules/ListLayout",
  component: ListLayout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant de layout pour afficher des listes d'éléments avec un titre et un contenu flexible.",
      },
    },
  },
};

const Template = (args) => ({
  components: { ListLayout },
  setup() {
    return { args };
  },
  template: `
    <ListLayout v-bind="args">
      <div style="padding: 1rem; border: 1px solid #ddd; background: #f5f5f5;">
        Élément 1
      </div>
      <div style="padding: 1rem; border: 1px solid #ddd; background: #f5f5f5;">
        Élément 2
      </div>
      <div style="padding: 1rem; border: 1px solid #ddd; background: #f5f5f5;">
        Élément 3
      </div>
    </ListLayout>
  `,
});

export const Default = Template.bind({});
Default.args = {};




