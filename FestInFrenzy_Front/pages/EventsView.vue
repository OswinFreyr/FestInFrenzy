<template>
  <div v-if="isLoading">
    Chargement en cours...
  </div>
  <div v-else>
    <UPricingCard
      v-if="festival && discipline && region"
      :title="festival.nom"
      :description="discipline.nom"
      icon="i-simple-icons-tailwindcss"
      :to="{ name: 'festival', params: { id: festivalId } }"
      target="_blank"
      highlight
      :badge="{ label: 'Date' }"
      :button="{ label: '', icon: 'i-heroicons-arrow-right-20-solid', onClick: redirectToFestival }"
      :features="[region.nom]"
      orientation="horizontal"
      align="bottom"
      style="padding: 30px"
    />
    
    <div v-else>
      Données du festival non disponibles.
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, defineProps } from 'vue';

const router = useRouter();

const props = defineProps({
  festival: Object,
  festivalId: Number,
});

let isLoading = ref(true);
let discipline = ref({});
let region = ref({});

const redirectToFestival = () => {
  router.push({ name: 'festival', params: { id: props.festivalId } });
};

onMounted(async () => {
  try {
    const disciplinesUrl = 'http://localhost:2000/api/v1/disciplines'; // Remplacer l'URL par votre propre URL
    const regionsUrl = 'http://localhost:2000/api/v1/regions'; // Remplacer l'URL par votre propre URL

    if (!props.festival || !props.festival.disciplineId || !props.festival.regionId) {
      throw new Error('Données du festival incomplètes.');
    }

    // récupération discipline
    const disciplineApi = await fetch(`${disciplinesUrl}/${props.festival.disciplineId}`);
    discipline.value = await disciplineApi.json();

    // récupération région
    const regionApi = await fetch(`${regionsUrl}/${props.festival.regionId}`);
    region.value = await regionApi.json();
    region.value.nom = region.value.nom ? region.value.nom : 'Région non renseignée.';

    isLoading.value = false;
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
});
</script>

<style scoped>
/* Vos styles CSS ici */
</style>
