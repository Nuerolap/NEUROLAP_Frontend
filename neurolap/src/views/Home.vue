<template>
  <div class="home">
    <div class="rectangle1"></div> 
    <div class="welcome-section">
      <div class="text">
        <h1>Bienvenidos a Neurolap</h1>
        <p>Este es un portal destinado a la detección de alteraciones en el funcionamiento de la memoria de las Personas Adultas Mayores (PAM). Usted tendrá, en este portal, acceso a un instrumento denominado Evaluación Diferencial de la memoria (EDM) que brindará a su paciente, a su familia y a usted la posibilidad de identificar el estado de las habilidades cognitivas que derivan del uso cotidiano de las memorias.</p>
      </div>
      <div class="image">
        <img src="@/assets/home-image.png" alt="Bienvenida Neurolap">
      </div>
    </div>
    <div class="rectangle2"></div> 

    <div class="history-section">
      <div class="history-header">
        <div class="line"></div>
        <div class="text-header">
          <h2>Historia</h2>
        </div>
      </div>

      <div class="history-content">
        <div class="history-image">
          <img src="@/assets/rene-calderon-soria.png" alt="René Calderón Soria">
        </div>
        <div class="history-text">
          <p>Esbozar la historia de la neuropsicología en Bolivia, nos obliga a reconocer, en primer lugar, a René Calderón Soria como el pionero de esta disciplina.</p>
          <p>Bolivia es sin duda alguna un territorio de enormes riquezas naturales y grandes necesidades de atención a una población heterogénea que en este siglo veintiuno demanda oportunidades y ofrece un sin número de posibilidades de estudio, investigación, innovación e intervención Neuropsicológica.</p>
          <p>La Sociedad Boliviana de Neuropsicología se funda en la ciudad de La Paz, el 15 de octubre de 1995, como consecuencia de reuniones preliminares de organización desde 1993, a la cabeza del Dr. René Calderón Soria, un connotado hombre de ciencia, fundador del primer Instituto Nacional de Desarrollo Infantil en la década de los 60, de la primera carrera de Psicología, en la Universidad Católica Boliviana por la década de los 70 y finalmente fundador de la carrera de Psicología, de la Universidad Mayor de San Andrés en la década de los 80.</p>
          <p>Las primeras generaciones de psicólogos bolivianos formados en Bolivia recibieron de él las primeras clases de Neuropsicología, seguidas por la cátedra de la Dra. Margareth Hurtado y el Dr. Juan Carlos Durán.</p>
          <p>Desde su fundación en 1995 hasta la fecha las actividades académicas de la Sociedad Boliviana de Neuropsicología (SNpB) han permitido la visita de importantes neuropsicólogos extranjeros.</p>
          <p>Todas las actividades de la SNpB han tenido como escenario la ciudad de La Paz pero el reto es la cobertura nacional que nos permita organizar las filiales departamentales. La primera filial creada ha sido la de Santa Cruz de la Sierra en Julio de 2012.</p>
          <p>A la fecha la SNpB es la única institución de carácter científico para la agrupación de profesionales del área neuropsicológica.</p>
          <p>El NEUROLAP "René Calderón Soria" es el Primer Laboratorio de Neurocognición en Bolivia y debe su nombre al pionero de la Neuropsicología en nuestro país en reconocimiento a su trayectoria e impulso profesional.</p>
          <p>El NEUROLAP se funda en la Universidad Privada de Santa Cruz (UPSA) con el patrocinio de Grand Challenges Canada, Help Age International y Fundación Horizontes, bajo el proyecto “No te olvides de mí” a partir de septiembre de 2014.</p>
        </div>
      </div>
    </div>

    <div class="vision-section">
      <h2>Visión</h2>
      <p>El NEUROLAP "René Calderón Soria" busca ser el Laboratorio de Neurocognición referencial en Bolivia, para el desarrollo de procedimientos de detección de alteraciones cognitivas y el diseño de procedimientos para la atención y rehabilitación de las mismas.</p>
    </div>
    <div class="mission-section">
      <h2>Misión</h2>
      <p>La misión del NEUROLAP "René Calderón Soria" es la atención de las necesidades de evaluación y rehabilitación neurocognitiva de personas con alteraciones en este campo, a través de procedimientos de detección y programas de estimulación.</p>
    </div>
    <div class="objectives-section">
      <h2>Objetivos</h2>
      <p>Prestar servicios de evaluación médica y estimulación neurocognitiva a personas adultas mayores de áreas urbanas y rurales de Bolivia, bajo niveles óptimos de eficiencia y calidad.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  padding: 0;
}

.rectangle1 {
  position: relative;
  background-color: #EED3BE;
  opacity: 0.8;
  border-radius: 0 0 0 15px; /* Bordes redondeados */
  width: 80%;
  height: 5vh; /* Altura del rectángulo */
  margin: 0 0 0 auto; 
  z-index: 1;
}

.welcome-section {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3vw;
}

.text {
  margin-top: 7vh;
  margin-left: 7vh;
  flex: 1.5;
}

.text h1{
  font-family: 'Inter', sans-serif;
  font-size: 5vw;
  color: #98002E;
  margin: 0;
  margin-right: 10vh;
}

.text p{  
  margin-top: 5vh;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.image {
  flex: 1;
}

.image img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 0 0 auto; 

}

.rectangle2 {
  background-color: #974844;
  opacity: 0.8;
  border-radius: 0 15px 0 0; /* Bordes redondeados */
  width: 30%;
  height: 5vh; /* Altura del rectángulo */
  margin: auto 0 0 0; 
  margin-bottom: 0; /* Ajusta el margen inferior para que se superponga ligeramente */
}

.history-section {
  margin-left: 7vh;
  margin-right: 4vh;
  text-align: center;
}

.history-header {
  display: flex;
  align-items: center; /* Cambiado de flex-start a center para centrar verticalmente */
  justify-content: center;
  gap: 3vw;
}

.line {
  flex: 3;
  margin-top: 7vh; 
  width: 41%;
  height: 1ex;
  background-color: #b27270;
}

.text-header {
  margin-top: 7vh;
  margin-right: 7vh; /* Cambiado de margin-left a margin-right */
  flex: 1;
}

.text-header h2 {
  color: #800000;
  font-family: 'Maiandra GD';
  font-size: 4vw;
  margin: 0 auto 0 auto;
}

.history-content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2vw;
}

.history-image {
  flex: 1;
}

.history-image img {
  width: 100%;
  height: auto;
  margin-left: -7vh;
}

.history-text {
  flex: 1.5;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.history-text p {
  margin: 10px 0;
}

.vision-section, .mission-section, .objectives-section {
  margin-left: 7vh;
  margin-right: 4vh;
  text-align: center;
}

.vision-section h2, .mission-section h2, .objectives-section h2 {
  color: #800000;
  font-family: 'Maiandra GD';
  font-size: 4vw;
  margin-bottom: 20px;
}

.vision-section p, .mission-section p, .objectives-section p {
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
  text-align: justify;
}


</style>
