import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/login/Login.vue'
import studentInfo from '../components/studentInfo/stuInfo.vue'
import TeachInfo from '../components/teacherinfo/TeachInfo.vue'
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
  {
    path: '/TeachInfo',
    name: 'Teach-Info',
    component: TeachInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
