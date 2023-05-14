import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/AboutView.vue'
import all from '../views/All.vue'
import all2 from '../views/All2.vue'
import all3 from '../views/All3.vue'
import all4 from '../views/All4.vue'
import New from '../views/New.vue'
import Taghir from '../views/Taghir.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:about
    },
    {
      path: '/all',
      name: 'all',
      component:all
    },
    {
      path: '/all2',
      name: 'all2',
      component:all2
    },
    {
      path: '/all3',
      name: 'all3',
      component:all3
    },
    {
      path: '/all4',
      name: 'all4',
      component:all4
    },
    {
      path: '/new',
      name: 'new',
      component:New
    },
    {
      path: '/taghir',
      name: 'taghir',
      component:Taghir
    },
   
  ]
})

export default router
