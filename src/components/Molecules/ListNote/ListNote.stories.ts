import ListNote from "./ListNote.vue";

export default {
  title: "Molecules/ListNote",
  component: ListNote,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant qui affiche une liste de notes en utilisant ListLayout et NoteCard. Reçoit un tableau de notes en props.",
      },
    },
  },
  argTypes: {
    notes: {
      control: { type: 'object' },
      description: 'Tableau d\'objets note avec contentMd, tags, status, etc.'
    }
  }
};

const Template = (args) => ({
  components: { ListNote },
  setup() {
    return { args };
  },
  template: '<ListNote v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  notes: [
    {
      id: 1,
      contentMd: "# Ma première note\n\nCeci est le contenu de ma première note avec un titre.",
      createdAt: "2024-01-01",
      status: "active",
      tags: ["test", "première"]
    },
    {
      id: 2,
      contentMd: "# Note importante\n\nCette note est très importante pour le projet.",
      createdAt: "2024-01-02",
      status: "completed",
      tags: ["important", "projet"],
      priority: "high"
    },
    {
      id: 3,
      contentMd: "Cette note n'a pas de titre dans le markdown.",
      createdAt: "2024-01-03",
      status: "active",
      tags: ["sans-titre"]
    }
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  notes: []
};

export const WithManyNotes = Template.bind({});
WithManyNotes.args = {
  notes: [
    {
      id: 1,
      contentMd: "# Note 1\n\nContenu de la note 1",
      createdAt: "2024-01-01",
      status: "active",
      tags: ["tag1"]
    },
    {
      id: 2,
      contentMd: "# Note 2\n\nContenu de la note 2",
      createdAt: "2024-01-02",
      status: "completed",
      tags: ["tag2", "important"]
    },
    {
      id: 3,
      contentMd: "# Note 3\n\nContenu de la note 3",
      createdAt: "2024-01-03",
      status: "active",
      tags: ["tag3"]
    },
    {
      id: 4,
      contentMd: "# Note 4\n\nContenu de la note 4",
      createdAt: "2024-01-04",
      status: "completed",
      tags: ["tag4", "urgent"]
    },
    {
      id: 5,
      contentMd: "Note sans titre",
      createdAt: "2024-01-05",
      status: "active",
      tags: ["sans-titre"]
    }
  ]
};


