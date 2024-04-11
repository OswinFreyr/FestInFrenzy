<script setup>
// import { favoriteFestivals } from '~/utils/favorites.js';
</script>

<template>
    <div>
      <HeaderComponent/>
      <h1>Favoris :)</h1>
      <div v-if="favoriteFestivals().length === 0">
        <p>Aucun festival favori pour le moment.</p>
      </div>
      <div v-else>
        <FestivalCardComponent v-for="festival in favoriteFestivals()" :key="festival.id" :festival="getFestivalById(festival)"/>
      </div>
      <FooterComponent/>
    </div>
  </template>
