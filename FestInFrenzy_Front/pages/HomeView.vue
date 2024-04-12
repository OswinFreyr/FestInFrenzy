<script setup>
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";
import { getRandomFestivals } from "../utils/randomFestivals";

const runtimeConfig = useRuntimeConfig();
let festivalsList = ref([]);
let disciplineSpectacleDeRueFestivalsList = ref([]);
let disciplineCinemaFestivalsList = ref([]);
let isLoading = ref(true);
let randomFestivalsRecommandations = ref([]);
let randomFestivalsCinema = ref([]);
let festivalsUrl = "";
let disciplineUrl = "";

onMounted(async () => {
  festivalsUrl = runtimeConfig.public.apiUrl + "festivals";
  disciplineUrl = runtimeConfig.public.apiUrl + "disciplines";

  // tous les festivals
  const festivalsApi = await fetch(festivalsUrl);
  festivalsList.value = await festivalsApi.json();

  // Festivals spectacles de rue
  const disciplineSpectacleDeRueFestivalsListApi = await fetch(
    disciplineUrl + "/3"
  );
  disciplineSpectacleDeRueFestivalsList.value =
    await disciplineSpectacleDeRueFestivalsListApi.json();
  disciplineSpectacleDeRueFestivalsList.value =
    disciplineSpectacleDeRueFestivalsList.value.festivals;

  // Festivals cinéma
  const disciplineCinemaFestivalsListApi = await fetch(disciplineUrl + "/9");
  disciplineCinemaFestivalsList.value =
    await disciplineCinemaFestivalsListApi.json();
  disciplineCinemaFestivalsList.value =
    disciplineCinemaFestivalsList.value.festivals;

  // randoms festivals pour "Nos recommandations"
  let randomIndexesRecommandations = getRandomFestivals(festivalsList.value);
  randomFestivalsRecommandations.value = randomIndexesRecommandations.map(
    (index) => festivalsList.value[index]
  );

  // randoms festivals cinéma
  let randomIndexesCinema = getRandomFestivals(
    disciplineCinemaFestivalsList.value
  );
  randomFestivalsCinema.value = randomIndexesCinema.map(
    (index) => disciplineCinemaFestivalsList.value[index]
  );

  isLoading.value = false;
});
</script>


<template>
  <div>
    <Header />
    <main class="main">
      <ULandingSection>
        <div class="relative">
          <img
            src="https://cdn.discordapp.com/attachments/1227220701426090045/1227917582045151293/concert-8282026_1280.jpg?ex=662a265d&is=6617b15d&hm=33f8d58ed3c16a341cbc123f6c2518df543a59109586918f2836573f9258de7f&"
            class="w-full rounded-md shadow-x3 ring-1 ring-gray-300 dark:ring-gray-700"
            style="max-width: initial; margin: 0;"
          />
          <div class="overlay"></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-center p-6"
          >
            <i class="text-6xl mb-4 text-white i-heroicons-sparkles"></i>
            <h1
              class="ext-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
              FestInFrenzy
            </h1>
            <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Il n'a jamais été aussi simple de chercher des festivals ! 🪩
            </p>
          </div>
        </div>
      </ULandingSection>
      <FestivalsSection v-if="!isLoading">
        <section>
          <div class="enTete">
            <div class="relative pl-8 text-primary font-bold titreSection">
              Nos recommandations
            </div>
            <NuxtLink :to="{ name: 'annuaire' }" class="voirPlus">
              <UButton label="Voir plus" color="gray">
                <template #trailing>
                  <UIcon
                    name="i-heroicons-arrow-right-20-solid"
                    class="w-5 h-5"
                  />
                </template>
              </UButton>
            </NuxtLink>
          </div>
          <CarouselComponent :festivalsList="randomFestivalsRecommandations" />
        </section>
        <section>
          <div class="enTete">
            <div class="relative pl-8 text-primary font-bold titreSection">
              Vos coups de coeur
            </div>
            <NuxtLink :to="{ name: 'favoris' }" class="voirPlus">
              <UButton label="Voir plus" color="gray">
                <template #trailing>
                  <UIcon
                    name="i-heroicons-arrow-right-20-solid"
                    class="w-5 h-5"
                  />
                </template>
              </UButton>
            </NuxtLink>
          </div>
          <CarouselComponent :festivalsList="festivalsList" />
        </section>
        <div class="background-photo"></div>

        <section style="margin-top: 40px">
          <div class="enTete">
            <div class="relative pl-8 text-primary font-bold titreSection">
              Spectacles vivants
            </div>
            <NuxtLink :to="{ name: 'annuaire' }" class="voirPlus">
              <UButton label="Voir plus" color="gray">
                <template #trailing>
                  <UIcon
                    name="i-heroicons-arrow-right-20-solid"
                    class="w-5 h-5"
                  />
                </template>
              </UButton>
            </NuxtLink>
          </div>
          <CarouselComponent
            :festivalsList="disciplineSpectacleDeRueFestivalsList"
          />
        </section>
        <section>
          <div class="enTete">
            <div class="relative pl-8 text-primary font-bold titreSection">
              Cinéma
            </div>
            <NuxtLink :to="{ name: 'annuaire' }" class="voirPlus">
              <UButton label="Voir plus" color="gray">
                <template #trailing>
                  <UIcon
                    name="i-heroicons-arrow-right-20-solid"
                    class="w-5 h-5"
                  />
                </template>
              </UButton>
            </NuxtLink>
          </div>
          <CarouselComponent :festivalsList="randomFestivalsCinema" />
        </section>
      </FestivalsSection>
      <div v-else>
        <p style="text-align: center">Chargement en cours...</p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
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

.titreSection {
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color : #b737d1
}

.background-photo {
  background-image: url("../public/festival.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
  background-attachment: fixed;
}
.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
}
Header { 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
}
</style>
