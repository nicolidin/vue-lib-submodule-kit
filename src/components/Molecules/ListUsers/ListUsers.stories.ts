import ListUsers from "./ListUsers.vue";

export default {
  title: "Molecules/ListUsers",
  component: ListUsers,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant qui affiche une liste d'utilisateurs en utilisant ListLayout et UserCard. Reçoit un tableau d'utilisateurs en props.",
      },
    },
  },
  argTypes: {
    users: {
      control: { type: 'object' },
      description: 'Tableau d\'objets utilisateur avec name, email, role, isActive, etc.'
    }
  }
};

const Template = (args) => ({
  components: { ListUsers },
  setup() {
    return { args };
  },
  template: '<ListUsers v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  users: [
    {
      id: 1,
      name: "Alice Dupont",
      email: "alice@example.com",
      role: "Admin",
      isActive: true
    },
    {
      id: 2,
      name: "Bob Martin",
      email: "bob@example.com",
      role: "User",
      isActive: true
    },
    {
      id: 3,
      name: "Charlie Niel",
      email: "charlie@example.com",
      role: "Moderator",
      isActive: false
    }
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  users: []
};

export const WithManyUsers = Template.bind({});
WithManyUsers.args = {
  users: [
    {
      id: 1,
      name: "Alice Dupont",
      email: "alice@example.com",
      role: "Admin",
      isActive: true
    },
    {
      id: 2,
      name: "Bob Martin",
      email: "bob@example.com",
      role: "User",
      isActive: true
    },
    {
      id: 3,
      name: "Charlie Niel",
      email: "charlie@example.com",
      role: "Moderator",
      isActive: false
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david@example.com",
      isActive: true
    },
    {
      id: 5,
      name: "Eve Smith",
      email: "eve@example.com",
      role: "Editor",
      isActive: true
    },
    {
      id: 6,
      name: "Frank Johnson",
      email: "frank@example.com",
      role: "Viewer",
      isActive: false
    }
  ]
};




