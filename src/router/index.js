import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/login/Login.vue'
import studentInfo from '../components/studentInfo/stuInfo.vue'
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
    path: '/stuInfo',
    name: 'stu-info',
    component: studentInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
