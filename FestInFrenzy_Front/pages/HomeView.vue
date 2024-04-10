<script setup>
import FestivalsList from "../components/FestivalsListComponent.vue";
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";

let festivalsList = ref([]);
onMounted(async () => {
  const festivalsApi = await fetch("/datasProvisoires/festivals.json");
  festivalsList.value = await festivalsApi.json();
  festivalsList.value = festivalsList.value.festivals;
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
