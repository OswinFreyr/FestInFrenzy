<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

let nomFestival, identifiantFestival, siteInternetFestival, emailFestival, sousCategorie, periode = ref("")
let nomRegion, nomCommune, postalCodeCommune, nomDiscipline, latitude, longitude, zone = ref("");
let festival = ref({})
onMounted(async () => {
  // Récupérer l'id de l'article à afficher dans la route
  const festivalId = ref(route.params.id)
  console.log(festivalId)
  // Récupération de l'article ciblé
  // let festivalAPI = await fetch(`adresseAPI/${festivalId.value}`)
  let festivalAPI = await fetch ('/datasProvisoires/festivals.json');
  // C'est un objet (ou un tableau), pas besoin d'utiliser .value
  festival = await festivalAPI.json();
  // C'est un type primitif (booléen, string ou number), il faut utiliser .value
  // Récupération informations festival
  nomFestival.value = festival.festivals.find(item => item.id === festivalId.value).nom;
  identifiantFestival.value = festival.festivals.find(item => item.id === festivalId.value).identifiant;
  siteInternetFestival.value = festival.festivals.find(item => item.id === festivalId.value).site_internet;
  emailFestival.value = festival.festivals.find(item => item.id === festivalId.value).e_mail;
  sousCategorie.value = festival.festivals.find(item => item.id === festivalId.value).sous_categorie;
  periode.value = festival.festivals.find(item => item.id === festivalId.value).periode;
  nomRegion.value = festival.festivals.find(item => item.id === festivalId.value).regions.nom;
  nomCommune.value = festival.festivals.find(item => item.id === festivalId.value).communes.nom;
  postalCodeCommune.value = festival.festivals.find(item => item.id === festivalId.value).communes.postal_code;
  nomDiscipline.value = festival.festivals.find(item => item.id === festivalId.value).disciplines.nom;
  latitude.value = festival.festivals.find(item => item.id === festivalId.value).localisations.latitude;
  longitude.value = festival.festivals.find(item => item.id === festivalId.value).localisations.longitude;
  zone.value = festival.festivals.find(item => item.id === festivalId.value).envergures.zone;
})
</script>
<template>
  <div>
    <h1>{{nomFestival}}</h1>
    <ul>
      <li>{{ identifiantFestival }}</li>
      <li>{{ siteInternetFestival }}</li>
      <li>{{ emailFestival }}</li>
      <li>{{ sousCategorie }}</li>
      <li>{{ periode }}</li>
      <li>{{ nomRegion }}</li>
      <li>{{ nomCommune }}</li>
      <li>{{ postalCodeCommune }}</li>
      <li>{{nomDiscipline}}</li>
      <li>{{ latitude }}</li>
      <li>{{ longitude }}</li>
      <li>{{ zone }}</li>
    </ul>
  </div>
  
</template>
