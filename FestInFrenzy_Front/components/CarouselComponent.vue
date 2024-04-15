<script setup>
import { defineProps, watchEffect } from "vue";
const props = defineProps({
  festivalsList: Array,
  filters: Object,
});


const filterFestivals = () => {
  const { festivalsList, filters } = props;
  if (filters) {
    return festivalsList.filter((festival) => {
      let match = true;
      if (filters.discipline && filters.discipline !== "") {
        match = festival.discipline_dominante === filters.discipline;
      }
      if (filters.region && filters.region !== "") {
        match =
          match && festival.region_principale_de_deroulement === filters.region;
      }
      if (filters.commune && filters.commune !== "") {
        match =
          match &&
          festival.commune_principale_de_deroulement
            .toLowerCase()
            .includes(filters.commune.toLowerCase());
      }
      if (filters.envergure && filters.envergure !== "") {
        match =
          match &&
          festival.envergure_territoriale
            .toLowerCase()
            .includes(filters.envergure.toLowerCase());
      }
      if (filters.period && filters.period !== "") {
        match =
          match &&
          festival.periode_mois &&
          festival.periode_mois.includes(filters.period);
      }
      return match;
    });
  } else {
    return festivalsList;
  }
};

watchEffect(() => {
  filterFestivals();
});
</script>

<template>
  <div>
    <UCarousel
      v-slot="{ item }"
      :items="festivalsList"
      :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3',    
      indicators: {
        wrapper: 'relative bottom-0 mt-2'
      }
      }"
      indicators
      class="rounded-lg overflow-hidden"
    >
    <div style="padding: 30px;">
        <FestivalCardComponent :festival="item" :festivalId="item.id" />
      </div>
    </UCarousel>
  </div>
</template>

<style>
.festivalsList {
  display: flex;
  flex-direction: row;
  list-style: none;
}
</style>
