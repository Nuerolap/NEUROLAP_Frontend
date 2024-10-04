import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import LoginForm from '../components/LoginForm.vue';
import SignupForm from '../components/SignupForm.vue';

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },  // Página protegida
  { path: '/login', component: LoginForm },
  { path: '/signup', component: SignupForm }
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
