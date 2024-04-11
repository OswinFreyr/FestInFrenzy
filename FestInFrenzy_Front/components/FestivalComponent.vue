<template>
  <div v-if="!isLoading">
    <ul style="display: flex; flex-direction: column; align-items: center">
      <li>
        <h1>{{ festival.nom }}</h1>
      </li>
      <li><em>Identifiant :</em> {{ festival.identifiant }}</li>
    </ul>
    <ul>
      <li>
        <a :href="festival.site_internet" target="_blank"> Site Web</a>
      </li>
      <li v-html="festival.e_mail"></li>
      <li>{{ festival.sous_categorie }}</li>
      <li>{{ region.nom }}, {{ commune.nom }}</li>
      <ul style="display: flex; flex-direction: row">
        Période  :&nbsp;
        <li v-for="(mois, index) in festival.mois" :key="index">
          {{ index !== 0 ? ", " : "" }}{{ mois.nom }}
        </li>
      </ul>
    </ul>
  </div>
  <div v-else>
    <p>Chargement en cours...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

let festival = ref({});
let region = ref({});
let commune = ref({});
let isLoading = ref(true);
let festivalsUrl = "";
let regionsUrl = "";
let communesUrl = "";

onMounted(async () => {
  festivalsUrl = runtimeConfig.public.apiUrl + "festivals";
  regionsUrl = runtimeConfig.public.apiUrl + "regions";
  communesUrl = runtimeConfig.public.apiUrl + "communes";
  const festivalId = route.params.id;
  // Récupération du festival
  let festivalAPI = await fetch(`${festivalsUrl}/${festivalId}`);
  festival.value = await festivalAPI.json();
  // Récupération de la région
  const regionApi = await fetch(`${regionsUrl}/${festival.value.regionId}`);
  region.value = await regionApi.json();
  region.value.nom = region.value.nom
    ? region.value.nom
    : "Région non renseignée.";
  // Récupération de la commune
  const communeApi = await fetch(`${communesUrl}/${festival.value.communeId}`);
  commune.value = await communeApi.json();
  commune.value.nom = commune.value.nom
    ? commune.value.nom
    : "Commune non renseignée.";
  // Vérification de l'e-mail
  festival.value.e_mail = festival.value.e_mail
    ? `<a href="mailto:${festival.value.e_mail}" target="_blank">Contact</a>`
    : "Adresse email non renseignée.";
  isLoading.value = false;
});
</script>
