import MarkdownText from "./MarkdownText.vue";

export default {
  title: "Molecules/MarkdownText",
  component: MarkdownText,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xsmall", "small", "medium", "large"],
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Markdown readonly text component",
      },
    },
  },
};

const Template = (args) => ({
  components: { MarkdownText },
  setup() {
    return { args };
  },
  template: '<MarkdownText v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  contentMd:
    "# Hello World\nThis is a **Markdown** text. This is a sample article preview content. It supports **Markdown**\n # Title \n ## subtitle \n ### subsubtitle",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
};
