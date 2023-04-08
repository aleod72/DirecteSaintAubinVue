import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    name: 'WelcomePage',
    component: () => import('@/pages/WelcomePage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/pages/LoginPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
