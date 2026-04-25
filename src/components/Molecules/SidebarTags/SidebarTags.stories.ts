import { ref } from "vue";
import Layout from "../../Organisms/Layout/Layout.vue";
import SidebarTags from "./SidebarTags.vue";

export default {
  title: "Molecules/SidebarTags",
  component: SidebarTags,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "SidebarTags dans Layout : la page injecte SidebarTags via le slot #sidebar du Layout (même structure que Nuxt /notes).",
      },
    },
  },
};

const Template = (args: any) => ({
  components: { Layout, SidebarTags },
  setup() {
    const tags = ref([...(args.tags || [])]);
    const onTagClick = (clickedTag: { libelleName: string; isSelected: boolean }) => {
      const t = tags.value.find((x) => x.libelleName === clickedTag.libelleName);
      if (t) t.isSelected = clickedTag.isSelected;
    };
    const onTagCreate = (newTag: { title: string; color: string }) => {
      tags.value.push({ libelleName: newTag.title, isSelected: false, color: newTag.color });
    };
    return { args, tags, onTagClick, onTagCreate };
  },
  template: `
    <Layout>
      <template #sidebar>
        <SidebarTags
          :model-value="true"
          :tags="tags"
          :title="args.title"
          :permanent="args.permanent !== false"
          @tag-click="onTagClick"
          @tag-create="onTagCreate"
        />
      </template>
      <div style="padding: 2rem;">
        <h3>Main Content Area</h3>
        <p>Selected tags:</p>
        <ul>
          <li v-for="tag in tags.filter(t => t.isSelected)" :key="tag.libelleName">{{ tag.libelleName }}</li>
        </ul>
      </div>
    </Layout>
  `,
});

export const Default: any = Template.bind({});
Default.args = {
  title: "Labels",
  permanent: true,
  tags: [
    { libelleName: "Important", isSelected: false, color: "#FF6B6B" },
    { libelleName: "Work", isSelected: false, color: "#4ECDC4" },
    { libelleName: "Personal", isSelected: false, color: "#45B7D1" },
    { libelleName: "Shopping", isSelected: false, color: "#FFA07A" },
    { libelleName: "Ideas", isSelected: false, color: "#98D8C8" },
    { libelleName: "Recipes", isSelected: false, color: "#F7DC6F" },
  ],
};

export const Empty: any = Template.bind({});
Empty.args = {
  title: "Labels",
  permanent: true,
  tags: [],
};

export const ManyTags: any = Template.bind({});
ManyTags.args = {
  title: "My Labels",
  permanent: true,
  tags: [
    { libelleName: "Important", isSelected: false, color: "#FF6B6B" },
    { libelleName: "Work", isSelected: false, color: "#4ECDC4" },
    { libelleName: "Personal", isSelected: false, color: "#45B7D1" },
    { libelleName: "Shopping", isSelected: false, color: "#FFA07A" },
    { libelleName: "Ideas", isSelected: false, color: "#98D8C8" },
    { libelleName: "Recipes", isSelected: false, color: "#F7DC6F" },
    { libelleName: "Travel", isSelected: false, color: "#BB8FCE" },
    { libelleName: "Health", isSelected: false, color: "#85C1E2" },
    { libelleName: "Finance", isSelected: false, color: "#F1948A" },
    { libelleName: "Projects", isSelected: false, color: "#82E0AA" },
  ],
};
