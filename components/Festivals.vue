<template>
    <div>
      <h1>Festivals</h1>
      <div v-for="festival in filteredFestivals" :key="festival.identifiant">
        <h2>{{ festival.nom_du_festival }}</h2>
        <p>Discipline dominante: {{ festival.discipline_dominante }}</p>
        <p v-if="festival.periode_mois">Période: {{ festival.periode_mois.join(', ') }}</p>
        <p v-else>Période: Non spécifiée</p>
        <p v-if="festival.envergure_territoriale">Envergure terittoriale: {{ festival.envergure_territoriale }}</p>
        <p v-else>Envergure terittoriale: Non spécifiée</p> 
    </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['festivals', 'filters'],
    computed: {
      filteredFestivals() {
        return this.festivals.filter(festival => {
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
          // Ajoutez d'autres critères de filtrage ici si nécessaire
          return match;
        });
      }
    }
  };
  </script>
  