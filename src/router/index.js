import { createRouter, createWebHistory } from 'vue-router';


import HomeView from '../views/HomeView.vue';

import ContactUs from '../views/ContactUs.vue';
import resume from '../views/resume.vue';

import BlogView from '../views/BlogView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  
  {
    path: '/blog', 
    name: 'blog',
    component: BlogView
  },

  {
    path: '/resume',
    name: 'resume',
    component: resume
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
