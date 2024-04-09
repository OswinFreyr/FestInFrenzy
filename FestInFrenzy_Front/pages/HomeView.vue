<script setup>
import FestivalsList from '../components/FestivalsListComponent.vue';
import Header from '../components/HeaderComponent.vue';
import Footer from '../components/FooterComponent.vue';



let festivalsList = ref([]);
// Récupération des données via l'API
onMounted(async () => {
  const festivalsApi = await fetch('/datasProvisoires/festivals.json');
  festivalsList.value = await festivalsApi.json();
  festivalsList.value = festivalsList.value.festivals
  // console.log("onMounted HomeView liste festivals: ")
  // console.log(festivalsList.value);
})

// watch(festivalsList, async( )=>{
//   // Remplacer le path par l'appel API
//   const festivalsApi = await fetch('@/datasProvisoires/festivals.json');
//   festivalsList.value = await festivalsApi.json();
// })

</script>

<template>
  <Header/>
  <FestivalsList :festivalsList="festivalsList" />
  <Footer/>
</template>
