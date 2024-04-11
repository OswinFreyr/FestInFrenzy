<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

let festival = ref({});

onMounted(async () => {
  const festivalId = route.params.id;
  
  let festivalAPI = await fetch(`http://10.3.211.68:2000/api/v1/festivals/${festivalId}`);
  // const festivals = (await festivalAPI.json()).festivals;
  // festival.value = festivals.find((el) => el.id === festivalId);
  festival.value = await festivalAPI.json();
});
</script>
<template>
  <div>
    <h1>{{ festival.nom }}</h1>
    <ul>
      <li>{{ festival.identifiant }}</li>
      <li>{{ festival.site_internet }}</li>
      <li>{{ festival.e_mail }}</li>
      <li>{{ festival.sous_categorie }}</li>
      <!-- <li>{{ festival.mois.nom }}</li> -->

    </ul>
  </div>
</template>
