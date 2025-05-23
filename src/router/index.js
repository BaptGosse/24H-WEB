import { createRouter, createWebHistory } from 'vue-router'
import LampadairesAffichage from '../components/lampadaires-components/LampadairesAffichage.vue'
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
      path: '/lampadaire',
      name: 'lampadaire',
      component: LampadairesAffichage,
    },    
  ],
})

export default router
