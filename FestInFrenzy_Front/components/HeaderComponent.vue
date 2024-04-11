<template>
    <header class="header">
      <div class="logo">
        <!-- <img src="/assets/logo.png" alt="FestInFrenzy Logo"> -->
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <NuxtLink to="/">Accueil</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/">Événements</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="favoris">Favoris</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .header {
    background-color: #1a202c;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    width: 150px;
  }
  
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-item {
    margin-right: 1.5rem;
  }
  
  .nav-item:last-child {
    margin-right: 0;
  }
  
  .nav-item a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }
  
  .nav-item a:hover {
    color: #fbbf24;
  }
  </style>
  