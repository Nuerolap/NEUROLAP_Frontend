import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AboutPage from '../components/AboutPage.vue';
import ServicePage from '../components/ServicePage.vue';
import InvestigationPage from '../components/InvestigationPage.vue';
import HelpPage from '../components/HelpPage.vue';
import ContactPage from '../components/ContactPage.vue';
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';
import EvaluationPage from '../components/EvaluationPage.vue';
import EDMPage from '../components/EDMPage.vue';

const routes = [
  { path: '/', component: HomePage /*meta: { requiresAuth: true }*/ },  // Página protegida
  { path: '/about', component: AboutPage },
  { path: '/service', component: ServicePage },
  { path: '/investigation', component: InvestigationPage },
  { path: '/help', component: HelpPage },
  { path: '/contact', component: ContactPage },
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignupForm },
  { path: '/evaluation', component: EvaluationPage },
  { path: '/edm', component: EDMPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Agregar un guard para verificar si el usuario está logueado
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('username');

  // Si la ruta requiere autenticación y el usuario no está logueado, redirigir a /login
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login');
  } else {
    next();  // Continuar con la navegación si todo está bien
  }
});

export default router;
