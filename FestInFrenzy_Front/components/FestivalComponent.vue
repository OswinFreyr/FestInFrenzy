<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const runtimeConfig = useRuntimeConfig()

const route = useRoute();

let festival = ref({});
let region = ref({});
let commune = ref({});

let festivalsUrl = ""
let regionsUrl = ""
let communesUrl = ""

onMounted(async () => {
  festivalsUrl = runtimeConfig.public.apiUrl + "festivals"
  regionsUrl = runtimeConfig.public.apiUrl + "regions"
  communesUrl = runtimeConfig.public.apiUrl + "communes"

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
  // verif mail
  festival.value.e_mail = festival.value.e_mail
    ? `<a href="mailto:${festival.value.e_mail}" target="_blank">Contact</a>`
    : "Adresse email non renseignée.";

});
</script>
<template>
  <div>
    <div>
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
    </div>
    <div>
      <MapboxMap
        map-id="<MAP_ID>"
        style="position: absolute; top: 0; bottom: 0; left: 250px; width: 500px;"
        :options="{
          style: 'mapbox://styles/mapbox/light-v11', // style URL
          center: [-68.137343, 45.137451], // starting position
          zoom: 5 // starting zoom
        }"
      >
          <MapboxGeolocateControl 
          position="right"
          />
      </MapboxMap>
    </div>
  </div>
</template>

