<template>
  <UPricingCard
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
</template>


<script setup>
import { useRouter } from 'vue-router';

const runtimeConfig = useRuntimeConfig()

const router = useRouter();

const props = defineProps({
  festival: Object,
  festivalId: Number,
});

let discipline = ref({});
let region = ref({});

let disciplinesUrl = "";
let regionsUrl = "";

const redirectToFestival = () => {
  router.push({ name: "festival", params: { id: props.festivalId } });
};

onMounted(async () => {
  disciplinesUrl = runtimeConfig.public.apiUrl + "disciplines";
  regionsUrl = runtimeConfig.public.apiUrl + "regions";

  // récupération discipline
  const disciplineApi = await fetch(
    `${disciplinesUrl}/${props.festival.disciplineId}`
  );
  discipline.value = await disciplineApi.json();

  // récupération région
  const regionApi = await fetch(`${regionsUrl}/${props.festival.regionId}`);

  region.value = await regionApi.json();
  region.value.nom = region.value.nom
    ? region.value.nom
    : "Région non renseignée.";
});
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.5rem;
  color: #000;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-body {
  padding: 1rem;
}

.card-actions {
  margin-top: 1rem;
}

.btn-primary {
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
