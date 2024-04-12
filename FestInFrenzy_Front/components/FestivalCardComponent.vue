<template>
  <UPricingCard
    :title="festival.nom"
    :description="discipline.nom"
    icon="i-heroicons-cube"
    :to="{ name: 'festival', params: { id: festivalId } }"
    target="_blank"
    highlight
    :button="{ label: '', icon: 'i-heroicons-arrow-right-20-solid', onClick: redirectToFestival }"
    :features="[region.nom]"
    orientation="horizontal"
    align="bottom"
    style="padding: 30px"
  >
  <template v-slot:footer>
      <button
        @click="toggleFavorite(festivalId)"
        class="favorite-button"
      >
      <i :class="iconFav"></i>
      </button>
    </template>
  </UPricingCard>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { toggleFavoriteFestival, isFavorite } from '~/utils/favorites.js';

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

function toggleFavorite(festivalId) {
  toggleFavoriteFestival(festivalId);
  setBadgeProperties();
};

const setBadgeProperties = () => {
  if (isFavorite(props.festivalId)) {
    iconFav.value = "i-heroicons-star-solid text-yellow-500"
  } else {
    iconFav.value = "i-heroicons-star text-yellow-500"
  }
};

let iconFav = ref("");

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

    setBadgeProperties();
});

watchEffect(() => {
  setBadgeProperties();
});
</script>

<style scoped>
.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 4px;
  padding: 8px;
  font-size: 2rem;
  color: inherit;
  cursor: pointer;
}
</style>
