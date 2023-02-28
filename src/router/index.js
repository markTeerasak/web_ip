import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/login/Login.vue'
import Info from '../components/Info/Info.vue'
import Table from '../components/table/table.vue'
import Grade from '../components/grade/Grade.vue'
import Classmate from '../components/Classmate/Classmate.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login-page',
    component: Login
  },
  {
    path: '/Info',
    name: 'inFo',
    component: Info
  },
  {
    path: '/Table',
    name: 'taBle',
    component: Table
  },
  {
    path: '/Grade',
    name: 'grAde',
    component: Grade
  },
  {
    path: '/Classmate',
    name: 'classMate',
    component: Classmate
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
