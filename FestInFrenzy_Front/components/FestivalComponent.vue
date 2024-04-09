<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// Récupérer l'id de l'article à afficher dans la route
const festivalId = ref(route.params.id)

let festival = ref({})
onMounted(async () => {
  // Récupération de l'article ciblé
  let festivalAPI = await fetch(`adresseAPI${festivalId.value}`)
  festival.value = await festivalAPI.json()
})
</script>
<template>
  <div>
    <h1>{{ festival.nom_du_festival }}</h1>
    <p>informations sur le festival</p>
  </div>
  
</template>
