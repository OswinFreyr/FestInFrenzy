<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, defineProps } from 'vue';
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";

const router = useRouter();
const runtimeConfig = useRuntimeConfig();

const props = defineProps({
  // festival: Object,
  // festivalId: Number,
});

let isLoading = ref(true);
let festivalObject = ref([])
let festivalsList = ref([])

let limitedFestivalsUrl = ref("")
let fetchKey = 0

const redirectToFestival = () => {
  router.push({ name: 'festival', params: { id: props.festivalId } });
};

onMounted(async () => {
  limitedFestivalsUrl.value = runtimeConfig.public.apiUrl + "festivals/limit"
  await fetchData();
});

async function fetchData() {
  try {
    
    const festivalApi = await fetch(limitedFestivalsUrl.value);
    festivalObject.value = await festivalApi.json()
    festivalsList.value = festivalObject.value.data
    console.log(festivalsList.value);
    fetchKey++;
    isLoading.value = false;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
}

async function previousPage() {
  limitedFestivalsUrl.value = festivalObject.value.previousUrl
  console.log(limitedFestivalsUrl.value);
  await fetchData();
}

async function nextPage() {
  limitedFestivalsUrl.value = festivalObject.value.nextUrl
  console.log(limitedFestivalsUrl.value);
  await fetchData();
}

</script>

<template>
      <Header />
  <div v-if="isLoading">
    Chargement en cours...
  </div>
  <div v-else >
    <div class="button-container">
    <ul class="button-list" style="margin-top: 30px;">
      <li v-if="festivalObject.previousUrl">
        <UButton
          icon="i-heroicons-arrow-left"
          size="sm"
          color="purple"
          variant="solid"
          label="Page précédente"
          :trailing="false"
          @click="previousPage"
        />
      </li>
      <li v-if="festivalObject.nextUrl">
        <UButton
          icon="i-heroicons-arrow-right"
          size="sm"
          color="purple"
          variant="solid"
          label="Page suivante"
          :trailing="false"
          @click="nextPage"
        />
      </li>
    </ul>
  </div>
    <FestivalsListComponent :festivalsList="festivalsList" :key="fetchKey" />
  </div>
  <div class="button-container">
    <ul class="button-list">
      <li v-if="festivalObject.previousUrl">
        <UButton
          icon="i-heroicons-arrow-left"
          size="sm"
          color="purple"
          variant="solid"
          label="Page précédente"
          :trailing="false"
          @click="previousPage"
        />
      </li>
      <li v-if="festivalObject.nextUrl">
        <UButton
          icon="i-heroicons-arrow-right"
          size="sm"
          color="purple"
          variant="solid"
          label="Page suivante"
          :trailing="false"
          @click="nextPage"
        />
      </li>
    </ul>
  </div>
  <Footer />

</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.button-list {
  display: flex;
  gap: 20px; 
}
</style>