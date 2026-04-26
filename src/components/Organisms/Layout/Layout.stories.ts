import Layout from "./Layout.vue";

export default {
  title: "Organisms/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Layout : barre d’application (Header), slot optionnel #sidebar, slot par défaut pour le contenu principal.",
      },
    },
  },
};

export const Default = () => ({
  components: { Layout },
  template: `
    <Layout>
      <div style="padding: 2rem;">
        <h2>Contenu dans le slot du layout</h2>
        <p>Exemple sans slot <code>#sidebar</code>.</p>
      </div>
    </Layout>
  `,
});
