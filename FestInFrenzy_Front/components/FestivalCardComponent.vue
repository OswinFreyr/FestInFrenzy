<script setup>
const props = defineProps({
  festival: Object,
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
      <h2 class="card-title">{{ props.festival.nom }}</h2>
      <p>{{ props.festival.discipline_dominante }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">En savoir plus</button>
      </div>
    </div>
  </div>
</template>

