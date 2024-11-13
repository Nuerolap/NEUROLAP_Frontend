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
import ReportPage from '../components/ReportPage.vue';
import EDMPage from '../components/EDMPage.vue';
import RegistrationPage from '../components/RegistrationPage.vue';
import TermsPage from '../components/TermsPage.vue';
import PersonRegistrationPage from '../components/PersonRegistrationPage.vue';
import PatientRegistrationPage from '../components/PatientRegistrationPage.vue';
import AudioRecorder from '../components/AudioRecorder.vue';

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
  { path: '/report', component: ReportPage },
  { path: '/edm', component: EDMPage },
  { path: '/registration', component: RegistrationPage },
  { path: '/terms', component: TermsPage },
  { path: '/person-registration', component: PersonRegistrationPage },
  { path: '/patient-registration', component: PatientRegistrationPage },
  { path: '/audio', component: AudioRecorder }
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
