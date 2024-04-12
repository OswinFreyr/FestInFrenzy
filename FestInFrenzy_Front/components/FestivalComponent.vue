<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
let festival = ref({});
let region = ref({});
let commune = ref({});

let localisation = ref({});
let isLoading = ref(true);

let festivalsUrl = "";
let regionsUrl = "";
let communesUrl = "";
let localisationsUrl = "";

const formatMois = (mois) => {
  return mois.map((m) => m.nom).join(", ");
};

onMounted(async () => {
  festivalsUrl = runtimeConfig.public.apiUrl + "festivals";
  regionsUrl = runtimeConfig.public.apiUrl + "regions";
  communesUrl = runtimeConfig.public.apiUrl + "communes";
  localisationsUrl = runtimeConfig.public.apiUrl + "localisations";

  const festivalId = route.params.id;
  // récupération festival
  let festivalAPI = await fetch(festivalsUrl + `/${festivalId}`);
  festival.value = await festivalAPI.json();
  // recupération région
  const regionApi = await fetch(regionsUrl + `/${festival.value.regionId}`);

  region.value = await regionApi.json();
  region.value.nom = region.value.nom
    ? region.value.nom
    : "Région non renseignée.";

  // recupération commune
  const communeApi = await fetch(communesUrl + `/${festival.value.communeId}`);
  commune.value = await communeApi.json();
  commune.value.nom = commune.value.nom
    ? commune.value.nom
    : "Commune non renseignée.";

  // recupération localisation
  const localisationApi = await fetch(
    localisationsUrl + `/${festival.value.localisationId}`
  );
  localisation.value = await localisationApi.json();
  localisation.value.longitude = localisation.value.longitude
    ? localisation.value.longitude
    : -0.57918;
  localisation.value.latitude = localisation.value.latitude
    ? localisation.value.latitude
    : 44.837789;

  localisation.value.longitude = parseFloat(localisation.value.longitude);
  localisation.value.latitude = parseFloat(localisation.value.latitude);

  // verif mail
  festival.value.e_mail = festival.value.e_mail
    ? `${festival.value.e_mail}`
    : "Adresse email non renseignée.";


  isLoading.value = false;
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <ULandingSection
      v-if="!isLoading"
      :title="festival.nom"
      description="Informations sur le festival :"
      :features="[
        {
          name: 'Identifiant',
          description: festival.identifiant,
          icon: 'i-heroicons-identification',
        },
        {
          name: 'Site Web',
          description: festival.site_internet,
          icon: 'i-heroicons-globe-alt',
        },
        {
          name: 'Email',
          description: festival.e_mail,
          icon: 'i-heroicons-envelope',
        },
        {
          name: 'Sous-catégorie',
          description: festival.sous_categorie,
          icon: 'i-heroicons-tag',
        },
        {
          name: 'Localisation',
          description: `${region.nom}, ${commune.nom}`,
          icon: 'i-heroicons-map-pin',
        },
        {
          name: 'Période',
          description: formatMois(festival.mois),
          icon: 'i-heroicons-map-pin',
        },
      ]"
      align="left"
    >
      <!-- <img
      src="https://picsum.photos/360/640"
      class="w-2/3 ml-auto rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    /> -->
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: right;
          margin-top: -90px;
        "
      >
        <MapboxMap
          map-id="<MAP_ID>"
          style="
            position: relative;
            width: 300px;
            height: 300px;
            justify-content: right;
          "
          :options="{
            style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
            center: [localisation.latitude, localisation.longitude], // starting position
            zoom: 10, // starting zoom
          }"
        >
          <MapboxDefaultMarker
            marker-id="<MARKER_ID>"
            :options="{ compact: false }"
            :lnglat="[localisation.latitude, localisation.longitude]"
          >
          </MapboxDefaultMarker>
          <MapboxGeolocateControl position="left" />
        </MapboxMap>
      </div>
    </ULandingSection>
  </div>
</template>
