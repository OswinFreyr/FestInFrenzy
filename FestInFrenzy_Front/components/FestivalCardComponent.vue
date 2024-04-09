<script setup>

const props = defineProps({
  festival: Object

})

</script>

<template>
<div class="card">
    <h1>{{ props.festival.nom }}</h1>
    <p> {{ props.festival.discipline_dominante }}</p>
</div>
</template>

<style>
    .card {
        width: 200px; 
    height: 200px; 
    background-color: #ffffff;
    box-shadow: 0px 10px 15px -5px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    }

</style>