<template>
  <div>
    <filters @filter="applyFilters"></filters>
    <festivals :festivals="festivals" :filters="filters"></festivals>
  </div>
</template>

<script>
import Filters from '~/components/Filters.vue';
import Festivals from '~/components/Festivals.vue';

export default {
  components: {
    Filters,
    Festivals
  },
  data() {
    return {
      festivals: [
        // Votre liste de festivals ici
      ],
      filters: {}
    };
  },
  methods: {
    applyFilters(filters) {
      this.filters = filters;
    }
  }
};
</script>
