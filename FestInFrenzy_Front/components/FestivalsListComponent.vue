<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  festivalsList: Array
})
</script>

<template>
    <div >
    <h1>Liste festivals</h1>
    <ul class="festivalsList" >

      <li class="carousel" v-for="festival in festivalsList" :key="festival.id">
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }">
          <festivalCardComponent :festival="festival"/>
      </NuxtLink>
      </li>
    </ul>
    <button @click="previousFestival"><</button>
    <button @click="nextFestival">></button>
  </div>

</template>

<style>
.festivalsList{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
}
</style>