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
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }">{{
          festival.nom
        }}</NuxtLink>
      </li>
    </ul>
  </div>

</template>

<style>
.festivalsList{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  overflow-x: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
}
.festivalsList > * {
  display: inline-block;
  width: 80%; 
  scroll-snap-align: center;
}
</style>