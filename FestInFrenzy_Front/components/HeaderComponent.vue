<template>
  <header class="header">
    <div class="logo">
      <img src="/public/logo.png" alt="FestInFrenzy Logo" style="width: 33%;">
    </div>
    <form onsubmit="event.preventDefault();" role="search" class="search-form">
      <label for="search" class="sr-only">Search for stuff</label>
      <input id="search" type="search" placeholder="Search..." autofocus required />
      <button type="submit">Go</button>    
    </form>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li class="nav-item">
  <NuxtLink to="/events">Événements</NuxtLink>
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
  const submitForm = () => {
    // Code pour soumettre le formulaire
  };
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

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  padding: 0.5rem;
  border-radius: 20px;
  border: none;
  margin-right: 1rem;
}

.search-button {
  background-color: #658ce5; /* Nouvelle couleur de fond */
  border: none;
  border-radius: 20px; /* Make the button square */
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 3rem; /* Adjust width to match the search bar */
  height: 3rem; /* Match height to make it square */
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-button i {
  color: #fff;
}

.search-button:hover {
  background-color: #476baf; /* Couleur de survol */
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
  color: #0e0024;
}
</style>

<style scoped>
/* Variables */
:root {
  --rad: .7rem;
  --dur: .3s;
  --color-dark: #2f2f2f;
  --color-light: #fff;
  --color-brand: #57bd84;
  --font-fam: 'Lato', sans-serif;
  --height: 5rem;
  --btn-width: 6rem;
  --bez: cubic-bezier(0, 0, 0.43, 1.49);
}

/* Main styles */
form {
  position: relative;
  width: 30rem;
  background: var(--color-brand);
  border-radius: var(--rad);
}
input, button {
  height: var(--height);
  font-family: var(--font-fam);
  border: 0;
  color: var(--color-dark);
  font-size: 1.8rem;
}
input[type="search"] {
  outline: 0;
  width: 100%;
  background: var(--color-light);
  padding: 0 1.6rem;
  border-radius: var(--rad);
  appearance: none;
  transition: all var(--dur) var(--bez);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
}
button {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: var(--btn-width);
  font-weight: bold;
  background: var(--color-brand);
  border-radius: 0 var(--rad) var(--rad) 0;
}
input:not(:placeholder-shown) {
  border-radius: var(--rad) 0 0 var(--rad);
  width: calc(100% - var(--btn-width));
  + button {
    display: block;
  }
}
label {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
</style>