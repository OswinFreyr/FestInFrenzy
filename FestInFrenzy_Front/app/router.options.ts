import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/HomeView.vue').then(r => r.default || r)
    },
    {
      name: 'festival',
      path: '/festival/:id',
      component: () => import('../pages/FestivalView.vue').then(r => r.default || r)
    },
    {
      name: 'favoris',
      path: '/favoris',
      component: () => import('../pages/FavorisView.vue').then(r => r.default || r)
    }
  ],
}

