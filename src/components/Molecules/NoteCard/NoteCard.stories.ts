import NoteCard from "./NoteCard.vue";

export default {
  title: "Molecules/NoteCard",
  component: NoteCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant de carte pour afficher une note avec extraction automatique du titre depuis le markdown.",
      },
    },
  },
  argTypes: {
    note: {
      control: { type: 'object' },
      description: 'Objet note avec contentMd, tags, status, etc.'
    }
  }
};

const Template = (args) => ({
  components: { NoteCard },
  setup() {
    return { args };
  },
  template: '<NoteCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  note: {
    id: 1,
    contentMd: "# Ma Note\n\nCeci est le contenu de ma note avec un titre extrait automatiquement.",
    createdAt: "2024-01-01",
    status: "active",
    tags: ["test", "exemple"]
  }
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  note: {
    id: 2,
    contentMd: "# Note importante\n\nCette note est très importante pour le projet.",
    createdAt: "2024-01-02",
    status: "completed",
    tags: ["important", "projet"],
    priority: "high"
  }
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  note: {
    id: 3,
    contentMd: "Cette note n'a pas de titre dans le markdown.",
    createdAt: "2024-01-03",
    status: "active",
    tags: ["sans-titre"]
  }
};

export const WithLongContent = Template.bind({});
WithLongContent.args = {
  note: {
    id: 4,
    contentMd: "# Note avec contenu long\n\nCeci est une note avec un contenu beaucoup plus long qui va probablement déborder de la carte et nécessiter un scroll ou une gestion de l'overflow. Le titre sera extrait automatiquement de la première ligne qui commence par #.",
    createdAt: "2024-01-04",
    status: "active",
    tags: ["long", "contenu"]
  }
};


