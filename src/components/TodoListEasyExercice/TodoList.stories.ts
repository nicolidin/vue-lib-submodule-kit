import { ref } from "vue";
import TodoList from "./TodoList.vue";

export default {
  title: "Exercices/TodoListEasyExercice/TodoList",
  component: TodoList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composant TodoList simple pour apprendre les props et events. Composé de 3 composants découplés : AddItem, TodoItem et TodoList.",
      },
    },
  },
  argTypes: {
    todos: {
      control: { type: "object" },
      description: "Liste des todos à afficher (Array de string)",
    },
  },
};

const Template = (args: any) => ({
  components: { TodoList },
  setup() {
    const todos = ref<string[]>([
      "Apprendre Vue 3",
      "Comprendre les props",
      "Maîtriser les events",
    ]);

    function handleAdd(text: string) {
      todos.value.push(text);
    }

    function handleDelete(index: number) {
      todos.value.splice(index, 1);
    }

    return {
      todos,
      handleAdd,
      handleDelete,
    };
  },
  template: `
    <div style="padding: 2rem; max-width: 600px;">
      <TodoList
        :todos="todos"
        @add="handleAdd"
        @delete="handleDelete"
      />
    </div>
  `,
});

export const Default: any = Template.bind({});

export const Empty: any = () => ({
  components: { TodoList },
  setup() {
    const todos = ref<string[]>([]);

    function handleAdd(text: string) {
      todos.value.push(text);
    }

    function handleDelete(index: number) {
      todos.value.splice(index, 1);
    }

    return {
      todos,
      handleAdd,
      handleDelete,
    };
  },
  template: `
    <div style="padding: 2rem; max-width: 600px;">
      <TodoList
        :todos="todos"
        @add="handleAdd"
        @delete="handleDelete"
      />
    </div>
  `,
});

export const WithManyTodos: any = () => ({
  components: { TodoList },
  setup() {
    const todos = ref<string[]>([
      "Apprendre Vue 3",
      "Comprendre les props",
      "Maîtriser les events",
      "Créer des composants réutilisables",
      "Utiliser TypeScript avec Vue",
      "Apprendre la composition API",
      "Comprendre v-model",
    ]);

    function handleAdd(text: string) {
      todos.value.push(text);
    }

    function handleDelete(index: number) {
      todos.value.splice(index, 1);
    }

    return {
      todos,
      handleAdd,
      handleDelete,
    };
  },
  template: `
    <div style="padding: 2rem; max-width: 600px;">
      <TodoList
        :todos="todos"
        @add="handleAdd"
        @delete="handleDelete"
      />
    </div>
  `,
});

