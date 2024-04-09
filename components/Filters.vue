<template>
    <div>
      <h2>Filtres</h2>
      <label>Discipline dominante:</label>
      <select v-model="selectedDiscipline">
        <option value="">Toutes</option>
        <option v-for="discipline in disciplines" :value="discipline">{{ discipline }}</option>
      </select>
      <br>
      <label>Envergure territoriale:</label>
      <select v-model="selectedEnvergure">
        <option value="">Toutes</option>
        <option v-for="envergure in envergures" :value="envergure">{{ envergure }}</option>
      </select>
      <br>
      <label>Région:</label>
      <select v-model="selectedRegion">
        <option value="">Toutes</option>
        <option v-for="region in regions" :value="region">{{ region }}</option>
      </select>
      <br>
      <label>Commune:</label>
      <input type="text" v-model="searchCommune" placeholder="Entrez le nom de la commune">
      <br>
      <label>Période:</label>
      <select v-model="selectedPeriod">
        <option value="">Toutes</option>
        <option v-for="period in periods" :value="period">{{ period }}</option>
      </select>
      <!-- Ajoutez d'autres filtres ici si nécessaire -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDiscipline: '',
        selectedEnvergure: '',
        selectedRegion: '',
        searchCommune: '',
        selectedPeriod: '',
        disciplines: ['Musique', 'Livre, littérature', 'Spectacle vivant', 'Pluridisciplinaire', 'Arts visuels, arts numériques', 'Cinéma, audiovisuel'],
        regions: ['Centre-val de loire', 'Hauts-de-france', "Provence-alpes-côte d'azur", 'Île-de-france', 'Bourgogne-franche-comté', 'Normandie', 'Nouvelle-aquitaine', 'Grand est', 'Auvergne-rhône-alpes', 'Occitanie', 'Bretagne', 'Pays de la loire', 'Corse', 'Mayotte', 'Saint-pierre-et-miquelon', 'Martinique', 'Guadeloupe', 'Polynésie française', 'Guyane', 'La réunion', 'Saint-barthélemy', 'Nouvelle-calédonie'],
        periods: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        envergures: ['Intercommunale', 'Départementale', '', 'Internationale', 'Régionale', 'Transfrontalière', 'Communale', 'Nationale', '28 % public origine ile de france', 'Interrégionale', 'Interco', 'Inrtercommunale', 'Communale/ internationale :  numérique depuis 2020', 'International', 'Interdépartementale', 'Plusieurs scènes dans une ville', 'Iintercommunale', 'Interrégionale dom guadeloupe guyane martinique réunion', 'Communal', 'Inernationale', 'Nationale voir internationale', 'Departementale', 'Interregionale', '/', 'Plusieurs sites dans la même ville', 'Régional', 'Régionale/transfrontalière', 'Guadeloupe ou martinique / france hexagonale', 'Régionale et transfrontalière', 'Interrégional', 'Plusieurs sites sur la commune de blois', 'Départemental', 'Plusieurs site dans la même commune', 'Intercommunal', 'Interrrégionale', 'Intercommunal / départemental / régional', 'Interdépartementale (45-41)', 'Autre : mondiale', 'Municipal', "À l'échelle du pays vallée du loir (57 communes / 3 comcom)", 'Autre : territoire de saint barthélémy', "Au sein d'une même commune", 'Local (laval) sur plusieurs sites de la ville et à rayonnement départementale', 'Interrégionale/transfrontalière', 'Le festival a un rayonnement international, notamment du fait des coproductions et des retombées presse', "À l'échelle de l'arc antillais et/ou de la guyane", 'Agglomération tarbes-lourdes-pyrénées', 'Regional', 'National', 'Intercommunal international', 'Départementale/régionale', "Deux sites au sein d'une même ville", 'Intercommunale/interrégionale/transfrontalière', 'Régionale et internationale', 'Tout se déroule dans le même village', 'Municipale mais sur plusieurs sites et à vocation de développement régional', 'Municipale', "Divers lieux de la ville d'arles", 'Transfrontaliere', 'Cu le havre metropole', 'Interdépartemental (76 + 27)', 'Principalement : ville de toulouse, métropole et région', 'Transfrontalier', 'Interrégionale et transfrontalière', 'Plusieurs lieux dans une même commune']
      };
    },
    watch: {
      selectedDiscipline() {
        this.filterFestivals();
      },
      selectedEnvergure() {
        this.filterFestivals();
      },
      selectedRegion() {
        this.filterFestivals();
      },
      searchCommune() {
        this.filterFestivals();
      },
      selectedPeriod() {
        this.filterFestivals();
      }
    },
    methods: {
      filterFestivals() {
        this.$emit('filter', {
          discipline: this.selectedDiscipline,
          envergure: this.selectedEnvergure,
          region: this.selectedRegion,
          commune: this.searchCommune,
          period: this.selectedPeriod
        });
      }
    }
  };
  </script>
  