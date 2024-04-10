<script setup>
const props = defineProps({
  festival: Object,
});

let disciplineId = ref("")
let discipline = ref({});
onMounted(async () => {
  disciplineId.value = props.festival.disciplineId 
  const disciplineApi = await fetch (`http://10.3.211.68:2000/api/v1/disciplines/1`)
  discipline.value = await disciplineApi.json();

});
</script>

<template>
  <div
    class="card card-side bg-base-100 shadow-xl w-[500px]"
    style="display: flex; flex-direction: row; "
  >
    <figure>
      <img
        src="https://picsum.photos/200/300"
        alt="Photo aléatoire"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ festival.nom }}</h2>
      <p>{{ discipline.nom }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">En savoir plus</button>
      </div>
    </div>
  </div>
</template>

