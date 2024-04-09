<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// Récupérer l'id de l'article à afficher dans la route

let nomFestival = ref("")
let festival = ref({})
onMounted(async () => {
  const festivalId = ref(route.params.id)
  console.log(festivalId)
  // Récupération de l'article ciblé
  // let festivalAPI = await fetch(`adresseAPI/${festivalId.value}`)
  let festivalAPI = await fetch ('/datasProvisoires/festivals.json');
  // C'est un objet (ou un tableau), pas besoin d'utiliser .value
  festival = await festivalAPI.json();
  // C'est un type primitif (booléen, string ou number), il faut utiliser .value
  nomFestival.value = festival.festivals.find(item => item.id === festivalId.value).nom;
})
</script>
<template>
  <div>
    <h1>{{nomFestival}}</h1>
    <p>{{ festivalID }}</p>
    <p>informations sur le festival </p>
  </div>
  
</template>
