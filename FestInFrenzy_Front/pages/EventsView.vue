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
let discipline = ref({});
let region = ref({});
let festivalObject = ref([])
let festivalsList = ref([])
let previousRoute = ref("")
let nextRoute = ref("")

let disciplinesUrl = ""
let regionsUrl = ""
let limitedFestivalsUrl = ""

const redirectToFestival = () => {
  router.push({ name: 'festival', params: { id: props.festivalId } });
};

onMounted(async () => {
  try {
    disciplinesUrl = runtimeConfig.public.apiUrl + 'disciplines'; 
    regionsUrl = runtimeConfig.public.apiUrl + 'regions'; 
    limitedFestivalsUrl = runtimeConfig.public.apiUrl + "festivals/limit"
    
    const festivalApi = await fetch(limitedFestivalsUrl);
    festivalObject.value = await festivalApi.json()
    festivalsList.value = festivalObject.value.data
    console.log(festivalsList.value);

    isLoading.value = false;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
});

async function previousPage() {
  limitedFestivalsUrl = festivalObject.value.previousUrl
  console.log(limitedFestivalsUrl);
  const festivalApi = await fetch(limitedFestivalsUrl);
  festivalObject.value = await festivalApi.json()
  festivalsList.value = festivalObject.value.data
}
async function nextPage() {
  limitedFestivalsUrl = festivalObject.value.nextUrl
  console.log(limitedFestivalsUrl);
  const festivalApi = await fetch(limitedFestivalsUrl);
  festivalObject.value = await festivalApi.json()
  festivalsList.value = festivalObject.value.data
}



</script>

<template>
  <div v-if="isLoading">
    Chargement en cours...
  </div>
  <div v-else >
    <FestivalsListComponent :festivalsList="festivalsList"  />
  </div>
  <ul>
    <li v-if="festivalObject.previousUrl">
      <button @click="previousPage">
        Page précedente
      </button>
    </li>
    <li v-if="festivalObject.nextUrl">
      <button @click="nextPage">
        Page suivante
      </button>
    </li>
  </ul>

</template>