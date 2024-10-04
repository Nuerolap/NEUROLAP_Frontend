<template>
  <div>
    <!-- Encabezado con el saludo y el botón de logout -->
    <header class="header">
      <div class="welcome-message">
        <span v-if="loggedInUser">Bienvenido, {{ loggedInUser }}</span>
      </div>
      <button @click="handleLogout" class="logout-btn">Logout</button>
    </header>

    <!-- Contenido principal -->
    <main class="main-content">
      <div class="welcome-section">
        <h1>Página de inicio</h1>
        <p>Bienvenido a Neurolap, tu sistema de gestión de condiciones médicas y test psicológicos.</p>
      </div>
    </main>

    <!-- Pie de página -->
    <footer class="footer">
      <p>&copy; 2024 Neurolap. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      loggedInUser: ''  // Aquí guardaremos el nombre del usuario logueado
    };
  },
  mounted() {
    // Cargar el nombre del usuario desde el almacenamiento local
    const user = localStorage.getItem('username');
    if (user) {
      this.loggedInUser = user;
    }
  },
  methods: {
    handleLogout() {
      // Limpiar el localStorage
      localStorage.removeItem('username');
      
      // Redirigir a la página de login
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Estructura de la página */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #42b983;
  color: white;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
  padding: 20px;
  background-color: #f4f4f9;
}

.welcome-section {
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
}

p {
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
}

/* Estilo del botón de Logout */
.logout-btn {
  background-color: #e74c3c;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.logout-btn:hover {
  background-color: #c0392b;
}

/* Estilo del mensaje de bienvenida */
.welcome-message {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
