<script setup>

const props = defineProps({
  festivalsList: Array
})
</script>

<template>
    <div>
    <h1>Liste festivals</h1>
    <ul>
      <!-- Liste de liens ayant pour nom le nom du festival -->
      <li v-for="festival in festivalsList" :key="festival.id">
        <NuxtLink :to="{ name: 'festival', params: { id: festival.id } }">{{
          festival.nom_du_festival
        }}</NuxtLink>
        <!-- {{ festival.nom_du_festival }} -->
      </li>
    </ul>
  </div>

</template>