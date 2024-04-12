<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
let festival = ref({});
let region = ref({});
let commune = ref({});

let localisation = ref({});
let isLoading = ref(true)

let festivalsUrl = ""
let regionsUrl = ""
let communesUrl = ""
let localisationsUrl = ""

onMounted(async () => {
  festivalsUrl = runtimeConfig.public.apiUrl + "festivals"
  regionsUrl = runtimeConfig.public.apiUrl + "regions"
  communesUrl = runtimeConfig.public.apiUrl + "communes"
  localisationsUrl = runtimeConfig.public.apiUrl + "localisations"

  const festivalId = route.params.id;
  // récupération festival
  let festivalAPI = await fetch(
    festivalsUrl + `/${festivalId}`
  );
  festival.value = await festivalAPI.json();
  // recupération région
  const regionApi = await fetch(
    regionsUrl + `/${festival.value.regionId}`
  );

  region.value = await regionApi.json();
  region.value.nom = region.value.nom
    ? region.value.nom
    : "Région non renseignée.";

  // recupération commune
  const communeApi = await fetch(
    communesUrl + `/${festival.value.communeId}`
  );
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
    ? `<a href="mailto:${festival.value.e_mail}" target="_blank">Contact</a>`
    : "Adresse email non renseignée.";
  
  isLoading.value = false;
});

</script>

<template>
  <div v-if="!isLoading" >
      <ul style="display: flex; flex-direction: column; align-items: center">
        <li>
          <h1>{{ festival.nom }}</h1>
        </li>
        <li><em>Identifiant :</em> {{ festival.identifiant }}</li>
      </ul>
      <ul>
        <li>
          <a href="{{ festival.site_internet }}" target="_blank"> Site Web</a>
        </li>
        <li v-html="festival.e_mail"></li>
        <li>{{ festival.sous_categorie }}</li>
        <li>{{ region.nom }}, {{ commune.nom }}</li>
      </ul>
      <div style="display: flex; flex-direction: row; justify-content: right; margin-top: -90px;">
        <MapboxMap
          map-id="<MAP_ID>"
          style="position: relative; width: 300px; height: 300px; justify-content: right; "
          :options="{
            style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
            center: [localisation.latitude, localisation.longitude], // starting position
            zoom: 10, // starting zoom
            boxzoom: true
          }"
        >
          <MapboxDefaultMarker 
            marker-id="<MARKER_ID>"
            :options="{compact: false}"
            :lnglat="[localisation.latitude, localisation.longitude]"
          >
          </MapboxDefaultMarker>
          <MapboxGeolocateControl />
          <MapboxFullscreenControl />
          <MapboxNavigationControl />
        </MapboxMap>
      </div>
  </div>
</template>
