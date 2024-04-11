<script setup>
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";
const config = useRuntimeConfig();

let festivalsList = ref([]);
let disciplineSpectacleDeRueFestivalsList = ref([]);
let disciplineCinemaFestivalsList = ref([]);
const festivalsUrl = config.ApiUrl + "festivals";
// console.log("festivalUrl")
// console.log(festivalsUrl)

onMounted(async () => {
  // tous les festivals
  const festivalsApi = await fetch("http://10.3.211.68:2000/api/v1/festivals");
  festivalsList.value = await festivalsApi.json();
  // festivalsList.value = festivalsList.value.festivals;
  // console.log(festivalsList.value)

  // festivals spectacles de rue
  const disciplineSpectacleDeRueFestivalsListApi = await fetch(
    "http://10.3.211.68:2000/api/v1/disciplines/3"
  );
  disciplineSpectacleDeRueFestivalsList.value =
    await disciplineSpectacleDeRueFestivalsListApi.json();
  disciplineSpectacleDeRueFestivalsList.value =
    disciplineSpectacleDeRueFestivalsList.value.festivals;
  // console.log(disciplineSpectacleDeRueFestivalsList.value)

  // festivals cinéma
  const disciplineCinemaFestivalsListApi = await fetch(
    "http://10.3.211.68:2000/api/v1/disciplines/9"
  );
  disciplineCinemaFestivalsList.value =
    await disciplineCinemaFestivalsListApi.json();
  disciplineCinemaFestivalsList.value =
    disciplineCinemaFestivalsList.value.festivals;
  // console.log(disciplineCinemaFestivalsList.value)
});
</script>

<template>
  <Header />
  <main class="main">
    <section>
      <div class="enTete">
        <h2>Festivals du moment</h2>
        <button class="voirPlus">Voir plus</button>
      </div>
      <CarouselComponent :festivalsList="festivalsList" />
    </section>
    <section>
      <div class="enTete">
        <h2>Vos coups de coeur</h2>
        <button class="voirPlus">Voir plus</button>
      </div>
      <CarouselComponent :festivalsList="festivalsList" />
    </section>
    <section>
      <div class="enTete">
        <h2>Spectacles vivants</h2>
        <button class="voirPlus">Voir plus</button>
      </div>
      <CarouselComponent
        :festivalsList="disciplineSpectacleDeRueFestivalsList"
      />
    </section>
    <section>
      <div class="enTete">
        <h2>Cinéma</h2>
        <button class="voirPlus">Voir plus</button>
      </div>
      <CarouselComponent :festivalsList="disciplineCinemaFestivalsList" />
    </section>
  </main>
  <Footer />
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
}
section {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}

section h2 {
  margin-bottom: 20px;
}
.enTete {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.voirPlus {
  margin-right: 50px;
}
</style>
