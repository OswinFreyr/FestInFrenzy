<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  festivalsList: Array,
  filter: String
})
</script>

<template>
    <div >
    <ul class="festivalsList" >
      <li v-for="festival in festivalsList" :key="festival.id">
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }">
          <festivalCardComponent :festival="festival"/>
      </NuxtLink>
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
}
</style>