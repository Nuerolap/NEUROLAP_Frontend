<template>
  <div class="services">
    <div class="rectangle1"></div> 
    <div class="service-image">
      <img src="@/assets/service-image.png" alt="Personas mayores haciendo actividades">
      <h1>¿QUÉ SERVICIOS PRESTAMOS?</h1>
    </div>
    <div class="rectangle2"></div> 
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

.rectangle1 {
  background-color: #974844;
  opacity: 0.8;
  border-radius: 15px 0 0 0; /* Bordes redondeados */
  width: 50%;
  height: 6vh; /* Altura del rectángulo */
  margin: 0 0 0 auto; 
  margin-bottom: 0; /* Ajusta el margen inferior para que se superponga ligeramente */
}

.service-image {
  position: relative;
}

.service-image img {
  width: 100%;
  height: auto;
  display: block;
}

.service-image h1 {
position: absolute;
width: 60%;
height: auto;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 1%;
background: #FFFFFF;
opacity: 0.8;

width: 60%;
height: auto;
font-family: 'Maiandra GD';
font-style: normal;
font-weight: bold;
font-size: 4vw;
text-align: center;
text-transform: capitalize;
}

.rectangle2 {
  background-color: #EED3BE;
  opacity: 0.8;
  border-radius: 0 0 15px 0; /* Bordes redondeados */
  width: 50%;
  height: 6vh; /* Altura del rectángulo */
  margin: auto 0 0 0; 
  margin-bottom: 0; /* Ajusta el margen inferior para que se superponga ligeramente */
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
  height: 40%; 
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
  height: 40%;
  margin: 0 auto; /* Centra la imagen horizontalmente */
  display: block; /* Asegúrate de que la imagen se comporte como un bloque */
}

.service-card1 h2 {
  margin-top: 1%; /* Ajusta el margen superior según sea necesario */
  margin: 0 auto; /* Centra la imagen horizontalmente */
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 1.5vw;
  text-align: center;
  color: #1E1D4C;
}

.learn-more {
  margin-top: auto; /* Mueve el enlace a la parte inferior del card */
  margin: 0 auto; /* Centra la imagen horizontalmente */
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
