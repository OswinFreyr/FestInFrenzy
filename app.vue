<template>
  <div>
    <filters @filter="applyFilters"></filters>
    <festivals :festivals="festivals" :filters="filters"></festivals>
  </div>
</template>

<script>
import Filters from '~/components/Filters.vue';
import Festivals from '~/components/Festivals.vue';
import festivalsData from '~/static/CleanedFestivalV7.json';

export default {
  components: {
    Filters,
    Festivals
  },
  data() {
    return {
      festivals: [],
      filters: {}
    };
  },
  mounted() {
    // Charger les données du fichier JSON une fois que le composant est monté
    this.festivals = festivalsData;

  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    }
  }
};
</script>
