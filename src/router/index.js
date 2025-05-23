import { createRouter, createWebHistory } from 'vue-router'
import LampadairesAffichage from '../components/lampadaires-components/LampadairesAffichage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LampadairesAffichage,
    },
  ],
})

export default router
