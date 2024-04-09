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
    <!-- <ul>
      <li>{{ festival.identifiant }}</li>
      <li>{{ festival.site_internet }}</li>
      <li>{{ festival.e_mail }}</li>
      <li>{{ festival.sous_categorie }}</li>
      <li>{{ festival.periode }}</li>
      <li>{{ festival.regions.nom }}</li>
      <li>{{ festival.communes.nom }}</li>
      <li>{{ festival.communes.postal_code }}</li>
      <li>{{ festival.disciplines.nom }}</li>
      <li>{{ festival.positions.latitude }}</li>
      <li>{{ festival.positions.longitude }}</li>
      <li>{{ festival.envergures.zone }}</li>
    </ul> -->
  </div>
</template>
