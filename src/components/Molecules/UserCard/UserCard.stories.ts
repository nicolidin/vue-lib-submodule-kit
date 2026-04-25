import UserCard from "./UserCard.vue";

export default {
  title: "Molecules/UserCard",
  component: UserCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant de carte pour afficher un utilisateur avec nom, email, rôle et statut.",
      },
    },
  },
  argTypes: {
    user: {
      control: { type: 'object' },
      description: 'Objet utilisateur avec name, email, role, isActive, etc.'
    }
  }
};

const Template = (args) => ({
  components: { UserCard },
  setup() {
    return { args };
  },
  template: '<UserCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  user: {
    id: 1,
    name: "Alice Dupont",
    email: "alice@example.com",
    role: "Admin",
    isActive: true
  }
};

export const WithRole = Template.bind({});
WithRole.args = {
  user: {
    id: 2,
    name: "Bob Martin",
    email: "bob@example.com",
    role: "User",
    isActive: true
  }
};

export const Inactive = Template.bind({});
Inactive.args = {
  user: {
    id: 3,
    name: "Charlie Niel",
    email: "charlie@example.com",
    role: "Moderator",
    isActive: false
  }
};

export const WithoutRole = Template.bind({});
WithoutRole.args = {
  user: {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    isActive: true
  }
};

export const LongName = Template.bind({});
LongName.args = {
  user: {
    id: 5,
    name: "Jean-Baptiste Emmanuel Zorg",
    email: "jean-baptiste.emmanuel.zorg@verylongdomainname.com",
    role: "Super Admin",
    isActive: true
  }
};



