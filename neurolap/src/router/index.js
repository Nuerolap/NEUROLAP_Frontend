import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignupForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
