import StarterKitDemo from "./StarterKitDemo.vue";

export default {
  title: "Atoms/StarterKitDemo",
  component: StarterKitDemo,
  tags: ["autodocs"],
};

export const Default = () => ({
  components: { StarterKitDemo },
  template: `
    <v-app>
      <v-main>
        <div class="pa-6">
          <StarterKitDemo />
        </div>
      </v-main>
    </v-app>
  `,
});
