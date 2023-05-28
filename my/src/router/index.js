import { createRouter, createWebHistory } from 'vue-router'
import all from '../views/All.vue'
import all2 from '../views/All2.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    
   
  ]
})

export default router
