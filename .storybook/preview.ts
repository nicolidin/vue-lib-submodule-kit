import "./storybook.scss";
import "../src/style.css";

import { createLidinAppKit } from "../src/lidinAppKitConfig/createLidinAppKit";
import { DEFAULT_VUETIFY_CONFIG } from "../src/lidinAppKitConfig/vuetifyConfig/defaultVuetifyConfig";
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";
import type { Preview } from "@storybook/vue3";

setup((app) => {
  const pinia = createPinia();
  app.use(pinia);
  app.use(createLidinAppKit(DEFAULT_VUETIFY_CONFIG));
});

/** Starter kit : pas de shell Layout ; les stories enveloppent elles-mêmes si besoin (ex. v-app). */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
};

export default preview;
