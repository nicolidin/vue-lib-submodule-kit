import path from "path";
import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.ts"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    const libStyles = path.resolve(__dirname, "../src/styles");
    const prelude = path.join(libStyles, "sfc-scss-prelude.scss");
    config.css ??= {};
    config.css.preprocessorOptions ??= {};
    config.css.preprocessorOptions.scss = {
      ...config.css.preprocessorOptions.scss,
      loadPaths: [
        libStyles,
        ...(config.css.preprocessorOptions.scss?.loadPaths ?? []),
      ],
      additionalData: [
        `@use "${prelude.split(path.sep).join("/")}" as *;`,
        config.css.preprocessorOptions.scss?.additionalData,
      ]
        .filter(Boolean)
        .join("\n"),
    };

    config.optimizeDeps = {
      exclude: [],
      include: [],
    };

    return config;
  },
};

export default config;
