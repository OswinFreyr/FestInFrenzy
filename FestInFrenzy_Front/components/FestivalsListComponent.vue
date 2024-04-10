<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  festivalsList: Array,
  filters: Object 
});

// ! Exemple de props pour les filtres : !
//  filters: {
//     discipline: 'Musique', // exemple de filtre par discipline dominante
//     region: 'Île-de-France', // exemple de filtre par région
//     commune: 'Paris', // exemple de filtre par commune
//     envergure: 'Intercommunal', // exemple de filtre par envergure
//     period: 'Juillet' // exemple de filtre par période
//  }

const filterFestivals = () => {
  const { festivalsList, filters } = props;
  // vérifier si des filtres sont définis
  if (filters) {
    // on va filtrer la liste des festivals en fonction des filtres
    return festivalsList.filter(festival => {
      let match = true;
          if (this.filters.discipline && this.filters.discipline !== '') {
            match = festival.discipline_dominante === this.filters.discipline;
          }
          if (this.filters.region && this.filters.region !== '') {
            match = match && festival.region_principale_de_deroulement === this.filters.region;
          }
          if (this.filters.commune && this.filters.commune !== '') {
            match = match && festival.commune_principale_de_deroulement.toLowerCase().includes(this.filters.commune.toLowerCase());
          }
          if (this.filters.envergure && this.filters.envergure !== '') {
            match = match && festival.envergure_territoriale.toLowerCase().includes(this.filters.envergure.toLowerCase());
          }
          if (this.filters.period && this.filters.period !== '') {
            match = match && festival.periode_mois && festival.periode_mois.includes(this.filters.period);
          }
          return match;
  });
} else { 
  return festivalsList;
}};

watchEffect(() => {
  filterFestivals();
});
</script>

<template>
  <div>
    <h1>Liste festivals</h1>
    <ul class="festivalsList">
      <!-- Utilisez la liste filtrée des festivals pour afficher les éléments -->
      <li v-for="festival in filterFestivals()" :key="festival.id">
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }">
          <festivalCardComponent :festival="festival" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
  .festivalsList {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
  }
</style>
