<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
       <img src="/public/logo.png" alt="FestInFrenzy Logo">
      </div>
      <div class="footer-links">
        <ul class="footer-list">
          <li class="footer-item">
            <NuxtLink to="/">Accueil</NuxtLink>
          </li>
          <li class="footer-item">
            <NuxtLink to="/">Événements</NuxtLink>
          </li>
          <li class="footer-item">
            <NuxtLink to="favoris">Favoris</NuxtLink>
          </li>
          <li class="footer-item">
            <NuxtLink to="contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-social">
      <a href="#" class="social-icon">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="social-icon">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
    <div class="footer-copy">
      <p>&copy; 2024 FestInFrenzy. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #1a202c;
  color: #fff;
  padding: 2rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo img {
  width: 150px;
}

.footer-links {
  margin-top: 1rem;
}

.footer-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.footer-item {
  margin-right: 1.5rem;
}

.footer-item:last-child {
  margin-right: 0;
}

.footer-item a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
}

.footer-social {
  margin-top: 1rem;
}

.social-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #fbbf24;
}

.footer-copy {
  text-align: center;
  margin-top: 1.5rem;
}
</style>


