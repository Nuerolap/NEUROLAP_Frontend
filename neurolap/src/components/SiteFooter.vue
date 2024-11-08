<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Navegación</h3>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/about">¿Quiénes somos?</router-link></li>
          <li><router-link to="/service">Servicios</router-link></li>
          <li><router-link to="/investigation">Investigación</router-link></li>
          <li><router-link to="/help">¿Necesitas ayuda?</router-link></li>
          <li><router-link to="/contact">Contáctanos</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Servicios</h3>
        <ul>
          <li><router-link to="/service#alteraciones">Alteraciones de la memoria</router-link></li>
          <li><router-link to="/service#evaluacion">Evaluación neuropsicológica</router-link></li>
          <li><router-link to="/service#reporte">Reporte clínico</router-link></li>
          <li><router-link to="/service#estimulación">Estimulación neurocognitiva</router-link></li>
          <li><router-link to="/service#capacitación">Capacitación en cuidados</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Investigación</h3>
        <ul>
          <li><router-link to="/investigation#memoria">La memoria</router-link></li>
          <li><router-link to="/investigation#deterioro">El deterioro cognitivo</router-link></li>
          <li><router-link to="/investigation#reserva">Reserva cognitiva</router-link></li>
          <li><router-link to="/investigation#calidad">Calidad de vida</router-link></li>
          <li><router-link to="/investigation#envejecimiento">Envejecimiento</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contactanos</h3>
        <p>Email: neurolap.bo@gmail.com</p>
        <p>Teléfono: +591 76325490</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/incc.bolivia/profilecard" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/InstitutoDeNeurocienciasComportamentales?mibextid=LQQJ4d" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 NEUROLAP. Todos los derechos reservados.</p>
      <div class="terms">
        <a href="/terms" class="learn-more">Términos y Política de Privacidad</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
};
</script>

<style scoped>
.footer {
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2vw;
}

.footer-section {
  margin: 0 2vw;
}

.footer-section h3 {
  margin-bottom: 1vh;
  font-size: 1.5vw;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 1vh;
}

.footer-section ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1.2vw;
}

.footer-section ul li a:hover {
  color: #AB8A8E;
}

.footer-section p {
  text-decoration: none;
  color: #FFFFFF;
  font-size: 1.2vw;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 4vh 2vw;
  background: #98002E;

}

.social-icons {
  display: flex;
  gap: 2vw;
}

.social-icons a {
  color: #FFFFFF;
  font-size: 2vw;
}

.social-icons a:hover {
  color: #AB8A8E;
}

.footer-bottom p {
  margin: 0;
  font-size: small;
}


.terms a {
  color: #FFFFFF;
  font-size: small;
}

.terms a:hover {
  color: #AB8A8E;
}
</style>
