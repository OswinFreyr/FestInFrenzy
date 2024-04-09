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
  <app class="app">
    <section class="carroussel">
      <FestivalsList :festivalsList="festivalsList" />
    </section>
    <section class="carroussel">
      <FestivalsList :festivalsList="festivalsList" />
    </section>
    <section class="carroussel">
      <FestivalsList :festivalsList="festivalsList" />
    </section>
    <section class="carroussel">
      <FestivalsList :festivalsList="festivalsList" />
    </section>
    <section class="carroussel">
      <FestivalsList :festivalsList="festivalsList" />
    </section>
    <section class="carroussel">
      <FestivalsList :festivalsList="festivalsList" />
    </section>
  </app>
  <Footer/>
</template>

<style>
  .app {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  /* .carroussel {
    display: flex;
    flex-direction: row;
  } */
</style>