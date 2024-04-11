<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

let festival = ref({});
let region = ref({});
let commune = ref({});
onMounted(async () => {
  const festivalId = route.params.id;
  // récupération festival
  let festivalAPI = await fetch(
    `http://10.3.211.68:2000/api/v1/festivals/${festivalId}`
  );
  festival.value = await festivalAPI.json();
  // recupération région
  const regionApi = await fetch(
    `http://10.3.211.68:2000/api/v1/regions/${festival.value.regionId}`
  );
  region.value = await regionApi.json();
  region.value.nom = region.value.nom
    ? region.value.nom
    : "Région non renseignée.";
  // recupération commune
  const communeApi = await fetch(
    `http://10.3.211.68:2000/api/v1/communes/${festival.value.communeId}`
  );
  commune.value = await communeApi.json();
  commune.value.nom = commune.value.nom
    ? commune.value.nom
    : "Commune non renseignée.";
  // verif mail
  festival.value.e_mail = festival.value.e_mail
    ? festival.value.e_mail
    : "Adresse email non renseignée.";
});
</script>
<template>
  <div class="container">
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
      <li>
        <a href="mailto:{{ festival.e_mail }}" target="_blank">Contact</a>
      </li>
      <li>{{ festival.sous_categorie }}</li>
      <li>{{ region.nom }}, {{ commune.nom }}</li>
    </ul>
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

h1 {
  font-family: "Victor Mono", monospace;
  text-transform: uppercase;
  font-size: 28px;
  margin-bottom: 10px;
}

em {
  font-style: italic;
}

a {
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
