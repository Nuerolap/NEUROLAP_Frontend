<template>
  <div id="app">
    <header class="header">
      <img src="@/assets/neurolap_logo.png" alt="Logo" class="logo">
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/about">¿Quiénes somos?</router-link></li>
          <li><router-link to="/service">Servicios</router-link></li>
          <li><router-link to="/investigation">Investigación</router-link></li>
          <li><router-link to="/help">¿Necesitas ayuda?</router-link></li>
          <li><router-link to="/contact">Contáctanos</router-link></li>
          <li>
            <!-- Botón dinámico según el estado de autenticación -->
            <a v-if="isLoggedIn" @click.prevent="handleLogout" class="button">Cerrar Sesión</a>
            <router-link v-else to="/login" class="button">Iniciar Sesión</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
    <SiteFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SiteFooter from './components/SiteFooter.vue';
import pb, { logout } from './services/pocketbase';

export default {
  name: 'App',
  components: {
    SiteFooter
  },
  setup() {
    // Estado reactivo para el estado de autenticación
    const isLoggedIn = ref(pb.authStore.isValid);

    // Sincronizar el estado cuando PocketBase cambia
    const syncAuthState = () => {
      isLoggedIn.value = pb.authStore.isValid;
    };

    // Configurar sincronización al montar el componente
    onMounted(() => {
      // Establecer estado inicial
      syncAuthState();

      // Escuchar cambios en authStore
      pb.authStore.onChange(syncAuthState);
    });

    // Función para manejar el cierre de sesión
    const handleLogout = async () => {
      try {
        await logout();
        syncAuthState(); // Actualizar el estado tras cerrar sesión
        alert('Sesión cerrada correctamente.');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
      }
    };

    return {
      isLoggedIn,
      handleLogout
    };
  }
};
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: inherit;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 6vw; /* Ajusta la altura de la barra de navegación */
  padding: 0;
  margin: 0;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1000;
}

.logo {
  height: auto;
  max-height: 6vw;
}

nav {
  flex-grow: 1;
  background: #98002E;
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  height: 100%;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around; 
  width: 100%;
}

nav ul li {
  margin: 0 auto;
}

nav a {
  text-decoration: none;
  color: #FFFFFF;
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 1.6vw; 
  line-height: 6vw;
}

nav a:hover {
  color: #AB8A8E;
}

nav a.button {
  background-color: white;
  color: #98002E;
  border-radius: 15px;
  padding: 0.5em 1em;
  font-weight: bold;
  font-size: 1.5vw;
}

nav a.button:hover {
  background-color: #AB8A8E;
  color: white;
}

.router-view {
  margin-top: 8vh; 
  flex: 1; 
}
</style>