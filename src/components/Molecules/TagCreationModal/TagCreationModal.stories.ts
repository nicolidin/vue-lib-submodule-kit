import { ref } from "vue";
import TagCreationModal from "./TagCreationModal.vue";

export default {
  title: "Molecules/TagCreationModal",
  component: TagCreationModal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Modal de création de tag avec champ de nom et sélecteur de couleur. Émet un événement 'create' avec le tag créé {title, color}.",
      },
    },
  },
};

const Template = (args: any) => ({
  components: { TagCreationModal },
  setup() {
    const isOpen = ref(args.modelValue || false);
    const createdTags = ref<Array<{ title: string; color: string }>>([]);
    
    const onCreate = (tag: { title: string; color: string }) => {
      createdTags.value.push(tag);
      console.log("Tag créé:", tag);
    };

    return { args, isOpen, createdTags, onCreate };
  },
  template: `
    <v-app>
      <v-main>
        <div style="padding: 2rem;">
          <v-btn @click="isOpen = true">Créer un tag</v-btn>
          
          <TagCreationModal 
            v-model="isOpen"
            @create="onCreate"
          />
          
          <div v-if="createdTags.length > 0" style="margin-top: 2rem;">
            <h3>Tags créés:</h3>
            <div 
              v-for="(tag, index) in createdTags" 
              :key="index"
              style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;"
            >
              <div 
                :style="{ 
                  width: '20px', 
                  height: '20px', 
                  borderRadius: '50%', 
                  backgroundColor: tag.color 
                }"
              ></div>
              <span>{{ tag.title }}</span>
            </div>
          </div>
        </div>
      </v-main>
    </v-app>
  `,
});

export const Default: any = Template.bind({});
Default.args = {
  modelValue: false,
};

