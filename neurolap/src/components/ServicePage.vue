<template>
  <div class="services">
    <div class="service-image">
      <img src="@/assets/service-image.png" alt="Personas mayores haciendo actividades">
    </div>
    <div class="header">
      <h1>¿QUÉ SERVICIOS PRESTAMOS?</h1>
    </div>
    <div class="underline"></div>
    <div id="service-content1">
      <div class="service-card1">
        <img src="@/assets/info-icon.png" alt="Información sobre alteraciones de la memoria">
        <h2>INFORMACIÓN SOBRE ALTERACIONES DE LA MEMORIA</h2>
        <a href="#" class="learn-more">Saber más...</a>
      </div>
      <div class="service-card1">
        <img src="@/assets/info-icon.png" alt="Evaluación neuropsicológica de la memoria">
        <h2>EVALUACIÓN NEUROPSICOLÓGICA DE LA MEMORIA</h2>
        <a href="/evaluation" class="learn-more">Saber más...</a>
      </div>
      <div class="service-card1">
        <img src="@/assets/info-icon.png" alt="Reporte clínico de la evaluación">
        <h2>REPORTE CLÍNICO DE LA EVALUACIÓN</h2>
        <a href="#" class="learn-more">Saber más...</a>
      </div>
      <div class="service-card1">
        <img src="@/assets/info-icon.png" alt="Estimulación neurocognitiva">
        <h2>ESTIMULACIÓN NEUROCOGNITIVA</h2>
        <a href="#" class="learn-more">Saber más...</a>
      </div>
      <div class="service-card1">
        <img src="@/assets/info-icon.png" alt="Capacitación en cuidados">
        <h2>CAPACITACIÓN EN CUIDADOS</h2>
        <a href="#" class="learn-more">Saber más...</a>
      </div>
    </div>
    <div class="evaluation-section">
      <h2>EVALUACIÓN DIFERENCIAL DE LA MEMORIA </h2>
      <div class="button-container">
        <router-link to="/edm" class="button">Iniciar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicePage',
}
</script>

<style scoped>
.services {
  text-align: center;
  padding: 0;
  position: relative;
}

.service-image {
  position: relative;
}

.service-image img {
  width: 100%;
  height: auto;
  display: block;
}

.header {
  margin: 3vw 7vh 0 7vh;
}

.header h1 {
  font-family: 'Inter', sans-serif;
  font-size: 5vw;
  color: #98002E;
  margin: 0;
  margin-right: 10vh;
}

.underline {
  margin: 3vh 7vh 3vh 7vh;
  width: 41%;
  height: 1ex;
  background-color: #FDB714;
}

#service-content1 {
  display: flex;                  /* Usamos flexbox para disposición de los elementos */
  flex-direction: row;           /* Dirección de la fila */
  flex-wrap: wrap;               /* Permitir que los elementos se envuelvan a la siguiente fila */
  justify-content: center;       /* Centra los elementos en la fila */
  overflow-x: auto; 
  padding: 1%;
  height: auto; 
}


.service-card1 {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 18%;
  height: 18vw; 
  padding: 0.5%;
  margin: 0.5%;
  text-align: center;
  position: relative;
  flex-direction: column; /* Aseguramos que el contenido esté en columna */
  align-items: center;
  overflow: hidden; /* Oculta cualquier contenido que exceda la altura del card */
}

.service-card1 img {
  width: 40%;
  height: auto;
  margin: 0 auto; /* Centra la imagen horizontalmente */
  display: block; /* Asegúrate de que la imagen se comporte como un bloque */
}

.service-card1 h2 {
  margin-top: 1vw; /* Ajusta el margen superior según sea necesario */
  margin: 1.5vw auto 0 auto; /* Centra la imagen horizontalmente */
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 1.5vw;
  text-align: center;
  color: #1E1D4C;
}

.learn-more {
  margin: 0 auto 1.5vw auto; /* Centra la imagen horizontalmente */
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vw;
  color: #5E6282;
}

.evaluation-section {
  margin-top: 5%;
  margin-bottom: 5%;
}

.evaluation-section h2 {
  font-family: 'Inter';
  font-weight: bold;
  font-size: normal;
  line-height: 111%;
  text-align: center;
  margin-bottom: 2%;
  color: #000000;
  flex: none;
}

.button-container {
  text-align: center;
}

.button {
  text-decoration: none;
  background-color: #8D323E;
  padding: 1% 3%;
  border: none;
  border-radius: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 2vw;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #AB8A8E;
  color: #8D323E;
  font-weight: bold;
}

</style>
