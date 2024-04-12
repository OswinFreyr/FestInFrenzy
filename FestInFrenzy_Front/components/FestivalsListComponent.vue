<script setup>
import { defineProps } from "vue";

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
        match = match && festival.region_principale_de_deroulement === filters.region;
      }
      if (filters.commune && filters.commune !== "") {
        match = match && festival.commune_principale_de_deroulement.toLowerCase().includes(filters.commune.toLowerCase());
      }
      if (filters.envergure && filters.envergure !== "") {
        match = match && festival.envergure_territoriale.toLowerCase().includes(filters.envergure.toLowerCase());
      }
      if (filters.period && filters.period !== "") {
        match = match && festival.periode_mois && festival.periode_mois.includes(filters.period);
      }
      return match;
    });
  } else {
    console.log(props.festivalsList, "+ liste");
    return props.festivalsList;
  }
};

console.log("festivalsList avant appel filtre")
const filteredFestivals = filterFestivals();
console.log("filteredFestivals")
console.log(filteredFestivals);
</script>

<template>
  <div class="festivals-container">
    <ul class="festivalsList basis-full md:basis-1/2 lg:basis-1/3" >
      <li v-for="festival in filteredFestivals" :key="festival.id" class="festival-item" style="padding: 30px;">
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }" style="padding: 30px;">
          <FestivalCardComponent :festival="festival"/>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.festivals-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.festival-item {
  width: calc(50% - 60px); /* 50% of container width minus padding */
  padding: 30px;
  box-sizing: border-box; /* Ensure padding is included in width calculation */
}
</style>
