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
          <li><router-link to="/login" class="button">Iniciar</router-link></li>
          <li><router-link to="/signup" class="button">Registrate</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <div class="footer-content">
        <p>© 2024 NEUROLAP. Todos los derechos reservados.</p>
        <div class="social-icons">
          <a href="https://www.instagram.com" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.dribbble.com" target="_blank">
            <i class="fab fa-dribbble"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  min-height: 100vh; /* Altura mínima de 100% de la pantalla */
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
  font-size: 1.6vw; /* Tamaño de fuente ajustado */
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
  margin-top: 8vh; /* Asegúrate de que el contenido no se superponga al header */
  flex: 1; 
}

.footer {
  background-color: #000000;
  color: #FFFFFF;
  padding: 2vh 0;
  font-family: 'Inter', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 0 2vw;
}

.footer p {
  margin: 0;
  font-size: 2vw;
}

.social-icons {
  display: flex;
  gap: 3vw;
}

.social-icons a {
  color: #FFFFFF;
  font-size: 2vw;
}

.social-icons a:hover {
  color: #AB8A8E;
}

</style>
