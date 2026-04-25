<template>
  <div
    v-html="renderedMarkdown"
    :class="['markdown', `markdown--${size}`]"
  ></div>
  yaydhqldq
</template>

<script setup lang="ts">
import { ref, computed, withDefaults } from "vue";
import MarkdownIt from "markdown-it";
import type { MarkdownTextSize } from "../../../types/sizes.ts";

// Define the props type
type Props = {
  contentMd: string;
  size?: MarkdownTextSize;
};

// Use `defineProps` with `withDefaults`
const props = withDefaults(defineProps<Props>(), {
  size: "medium", // Default value for `size`
});
// Initialize Markdown-it directly in the component
const md = new MarkdownIt();

// Define your Markdown content
const markdownContent = ref(props.contentMd);

// Convert the Markdown content to HTML
const renderedMarkdown = computed(() => md.render(markdownContent.value));
</script>

<style lang="scss">
@use "../../../styles/app-kit/markdown-text" as *;

/* Application des styles aux différentes tailles */
.markdown {
  --text-medium: 0.95rem;
  --text-small: 0.83rem;

  &--xsmall {
    @include markdown-size(xsmall);
  }

  &--small {
    @include markdown-size(small);
  }

  &--medium {
    @include markdown-size(medium);
  }

  &--large {
    @include markdown-size(large);
  }

  * {
    color: rgb(var(--v-theme-on-background));
  }
}
</style>
