<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, defineProps } from 'vue';

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
  <div v-if="isLoading">
    Chargement en cours...
  </div>
  <div v-else >
    <FestivalsListComponent :festivalsList="festivalsList" :key="fetchKey" />
  </div>
  <ul>
    <li v-if="festivalObject.previousUrl">
      <button @click="previousPage">
        Page précédente
      </button>
    </li>
    <li v-if="festivalObject.nextUrl">
      <button @click="nextPage">
        Page suivante
      </button>
    </li>
  </ul>
</template>
