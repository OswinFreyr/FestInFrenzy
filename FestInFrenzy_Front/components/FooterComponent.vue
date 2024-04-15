<template>
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4 footer">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-4">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="./" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="../public/logo.png" class="h-8" alt="Logo" />
                <span class="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">FestInFrenzy</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Accueil</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Evénements</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Favoris</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 FestInFrenzy. Tout droits réservés.</span>
    </div>
</footer>
</template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer {
    background-color: #181e27;
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

