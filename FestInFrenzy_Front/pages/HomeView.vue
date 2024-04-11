<script setup>
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";

let festivalsList = ref([]);
let disciplineSpectacleDeRueFestivalsList = ref([]);
let disciplineCinemaFestivalsList = ref([]);
onMounted(async () => {
  // tous les festivals
  const festivalsApi = await fetch("http://10.3.211.68:2000/api/v1/festivals");
  festivalsList.value = await festivalsApi.json();
  // festivalsList.value = festivalsList.value.festivals;  

  // festivals spectacles de rue
  const disciplineSpectacleDeRueFestivalsListApi = await fetch('http://10.3.211.68:2000/api/v1/disciplines/3');
  disciplineSpectacleDeRueFestivalsList.value = await disciplineSpectacleDeRueFestivalsListApi.json();
  disciplineSpectacleDeRueFestivalsList.value = disciplineSpectacleDeRueFestivalsList.value.festivals;

  // festivals cinéma
  const disciplineCinemaFestivalsListApi = await fetch('http://10.3.211.68:2000/api/v1/disciplines/9');
  disciplineCinemaFestivalsList.value = await disciplineCinemaFestivalsListApi.json();
  disciplineCinemaFestivalsList.value = disciplineCinemaFestivalsList.value.festivals;
});
</script>

<template>
  <Header />
  <main class="main">
    <ULandingSection>
    <div class="relative">
      <img
        src="https://cdn.discordapp.com/attachments/1227220701426090045/1227917582045151293/concert-8282026_1280.jpg?ex=662a265d&is=6617b15d&hm=33f8d58ed3c16a341cbc123f6c2518df543a59109586918f2836573f9258de7f&"
        class="w-2/3 rounded-md shadow-x3 ring-1 ring-gray-300 dark:ring-gray-700"
      />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <!-- Icon -->
        <i class="text-6xl mb-4 text-white i-heroicons-sparkles"></i>
        <!-- Title -->
        <h1 class="ext-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">FestInFrenzy</h1>
        <!-- Description -->
        <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">Il n'a jamais été aussi simple de chercher des festivals ! 🪩</p>
      </div>
    </div>
  </ULandingSection>
    <section>
      <div class="enTete">
        <div class="relative pl-8 text-primary font-bold">Festivals du moment</div>
        <UButton label="Voir plus" color="gray" class="voirPlus">
          <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>          </div>
      <CarouselComponent :festivalsList="festivalsList" />
    </section>
    <section>
      <div class="enTete">
        <div class="relative pl-8 text-primary font-bold">Vos coups de coeur</div>
        <UButton label="Voir plus" color="gray" class="voirPlus">
          <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>          </div>
      <CarouselComponent :festivalsList="festivalsList" />
    </section>
    <section>
      <div class="enTete">
        <div class="relative pl-8 text-primary font-bold">Spectacles vivants</div>
        <UButton label="Voir plus" color="gray" class="voirPlus">
          <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>          </div>
      <CarouselComponent :festivalsList="disciplineSpectacleDeRueFestivalsList" />
    </section>
    <section>
      <div class="enTete">
        <div class="relative pl-8 text-primary font-bold">Cinéma</div>
        <UButton label="Voir plus" color="gray" class="voirPlus">
          <template #trailing>
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>      
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
