<template>
    <div>
      <Header />
      <h1>Favoris :)</h1>
      <div v-if="favoriteFestivals().length === 0">
        <p>Aucun festival favori pour le moment.</p>
      </div>
      <div v-else>
        <template v-if="showListComponent">
            <FestivalsListComponent :festivalsList="favoriteFestivalsDetails" />
        </template>
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "../components/HeaderComponent.vue";
  import Footer from "../components/FooterComponent.vue";
  import FestivalsListComponent from "../components/FestivalsListComponent.vue";
  
  import { favoriteFestivals } from '~/utils/favorites.js';
  
  const favoriteIds = favoriteFestivals();
  const showListComponent = ref(false);
  let favoriteFestivalsDetails = ref([]);

  onMounted(async () => {
    await fetchFavoriteFestivalsDetails();
      showListComponent.value = true;
  });
  
  const fetchFavoriteFestivalsDetails = async () => {
    const fetchedFestivals = [];
    for (const festivalId of favoriteIds) {
      const festivalApi = await fetch(`http://10.3.211.68:2000/api/v1/festivals/${festivalId}`);
      const festivalData = await festivalApi.json();
      fetchedFestivals.push(festivalData);
    }
    favoriteFestivalsDetails.value = fetchedFestivals;
  };
  
  </script>
  