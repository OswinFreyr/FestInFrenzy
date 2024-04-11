<template>
    <Header />
    <main class="main">
      <!-- Réutilisation de la structure et du style de la page d'accueil -->
      <!-- Remplacez les données dans les carrousels pour afficher les événements -->
      <section>
        <div class="enTete">
          <h2 class="categoryTitle">Tous les événements</h2>
          <button class="voirPlus">Voir plus</button>
        </div>
        <!-- Utilisez les données des événements ici -->
        <CarouselComponent :festivalsList="allEventsList" />
      </section>
    </main>
    <Footer />
  </template>
  
  <script setup>
  import Header from "../components/HeaderComponent.vue";
  import Footer from "../components/FooterComponent.vue";
  import CarouselComponent from "../components/CarouselComponent.vue";
  import { ref, onMounted } from "vue";
  
  // const config = useRuntimeConfig();
  
  let allEventsList = ref([]);
  
  onMounted(async () => {
    // Récupérer tous les événements depuis l'API
    const eventsApi = await fetch("URL_de_votre_API_pour_les_événements");
    allEventsList.value = await eventsApi.json();
  });
  </script>
  
  <style>
  /* Styles de la page d'accueil */
  /* Copiez les styles de la page d'accueil ici */
  </style>
  