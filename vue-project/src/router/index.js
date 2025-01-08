import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import PortofolioView from '@/views/PortofolioView.vue';
import DetailNewsView from '@/views/DetailNewsView.vue';

const routes = [
  { path: '/', component: HomeView, name:"Home" },
  { path: '/about', component: AboutView, name:"About" },
  { path: '/experience', component: ExperienceView, name:"Experience" },
  { path: '/portofolio', component: PortofolioView, name:"Portofolio" },
  { path: '/news/:id', component: DetailNewsView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router