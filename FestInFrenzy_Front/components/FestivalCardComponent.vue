<script setup>
const props = defineProps({
  festival: Object,
});
</script>


<template >
  <div
    class="card card-side bg-base-100 shadow-xl"
    style="display: flex; flex-direction: row"
  >
    <figure>
      <img
        src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
        alt="Movie"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{  props.festival.nom }}</h2>
      <p>{{  props.festival.discipline_dominante }}</p>
      <div class="card-actions justify-end">
        <!-- <button class="btn btn-primary">Watch</button> -->
      </div>
    </div>
  </div>
</template>
