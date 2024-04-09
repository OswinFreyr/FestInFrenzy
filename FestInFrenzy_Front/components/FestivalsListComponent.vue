<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  festivalsList: Array
})
// console.log("props component liste festivals")
// console.log(props.festivalsList)
</script>

<template>
    <div>
    <h1>Liste festivals</h1>
    <ul>
      <!-- Liste de liens ayant pour nom le nom du festival -->
      <li v-for="festival in festivalsList" :key="festival.id">
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }">{{
          festival.nom
        }}</NuxtLink>
      </li>
    </ul>
  </div>

</template>