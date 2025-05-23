import { createRouter, createWebHistory } from 'vue-router'
import LampadairesAffichage from '../components/lampadaires-components/LampadairesAffichage.vue'
import HomeView from '@/views/HomeView.vue'
import FlashBang from '@/components/iut-components/FlashBang.vue'

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
    {
      path: '/flashbang',
      name: 'flashbang',
      component: FlashBang
    }
  ],
})

export default router
