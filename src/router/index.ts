import { createRouter, createWebHistory } from 'vue-router'

import DesignLabView from '@/views/DesignLabView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/design-lab',
      name: 'design-lab',
      component: DesignLabView,
    },
  ],
})

export default router
