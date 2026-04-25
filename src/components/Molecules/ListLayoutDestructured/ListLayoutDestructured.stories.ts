import ListLayoutDestructured from "./ListLayoutDestructured.vue";

export default {
  title: "Molecules/ListLayoutDestructured",
  component: ListLayoutDestructured,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant de layout pour listes avec slot déstructuré : expose item et index au parent pour chaque élément.",
      },
    },
  },
};

const items = [
  { id: "1", label: "Élément 1" },
  { id: "2", label: "Élément 2" },
  { id: "3", label: "Élément 3" },
];

const Template = (args) => ({
  components: { ListLayoutDestructured },
  setup() {
    return { args, items };
  },
  template: `
    <ListLayoutDestructured :items="items" v-bind="args">
      <template #default="{ item }">
        <div style="padding: 1rem; border: 1px solid #ddd; background: #f5f5f5;">
          {{ item.label }}
        </div>
      </template>
    </ListLayoutDestructured>
  `,
});

export const Default = Template.bind({});
Default.args = {};
