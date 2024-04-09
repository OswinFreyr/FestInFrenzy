<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

let festival = ref({});

onMounted(async () => {
  const festivalId = route.params.id;

  let festivalAPI = await fetch("/datasProvisoires/festivals.json");
  const festivals = (await festivalAPI.json()).festivals;

  festival.value = festivals.find((el) => el.id === festivalId);
});
</script>
<template>
  <div>
    <h1>{{ festival.nom }}</h1>
    <ul>
      <li>{{ festival.id }}</li>
      <li>{{ festival.siteInternet }}</li>
      <li>{{ festival.email }}</li>
      <li>{{ festival.sousCategorie }}</li>
      <li>{{ festival.periode }}</li>
      <li>{{ festival.nomRegion }}</li>
      <li>{{ festival.nomCommune }}</li>
      <li>{{ festival.postalCodeCommune }}</li>
      <li>{{ festival.nomDiscipline }}</li>
      <li>{{ festival.latitude }}</li>
      <li>{{ festival.longitude }}</li>
      <li>{{ festival.zone }}</li>
    </ul>
  </div>
</template>
