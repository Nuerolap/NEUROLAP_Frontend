<template>
  <div class="about">
    <div class="header">
      <h1>¿QUIENES SOMOS?</h1>
    </div>
    <div class="underline"></div>
    <div class="content1">
      <div class="history-section">
        <div class="history-content">
          <h2>Historia</h2>
          <div class="quote">    
            <p>Esbozar la historia de la neuropsicología en Bolivia, nos obliga a reconocer, en primer lugar, a René Calderón Soria como el pionero de esta disciplina.</p>   
          </div>
        </div>
      </div>
      <div class="history-text">
        <p>Bolivia es sin duda alguna un territorio de enormes riquezas naturales y grandes necesidades de atención a una población heterogénea que en este siglo veintiuno demanda oportunidades y ofrece un sin número de posibilidades de estudio, investigación, innovación e intervención Neuropsicológica.</p>
        <p>La Sociedad Boliviana de Neuropsicología se funda en la ciudad de La Paz, el 15 de octubre de 1995, como consecuencia de reuniones preliminares de organización desde 1993, a la cabeza del Dr. René Calderón Soria, un connotado hombre de ciencia, fundador del primer Instituto Nacional de Desarrollo Infantil en la década de los 60, de la primera carrera de Psicología, en la Universidad Católica Boliviana por la década de los 70 y finalmente fundador de la carrera de Psicología, de la Universidad Mayor de San Andrés en la década de los 80.</p>
      </div>
    </div>
    <div class="extra-content">
      <div class="extra-text">
        <p>Las primeras generaciones de psicólogos bolivianos formados en Bolivia recibieron de él las primeras clases de Neuropsicología, seguidas por la cátedra de la Dra. Margareth Hurtado y el Dr. Juan Carlos Durán.</p>
        <p>Desde su fundación en 1995 hasta la fecha las actividades académicas de la Sociedad Boliviana de Neuropsicología (SNpB) han permitido la visita de importantes neuropsicólogos extranjeros.</p>
        <p>Todas las actividades de la SNpB han tenido como escenario la ciudad de La Paz pero el reto es la cobertura nacional que nos permita organizar las filiales departamentales. La primera filial creada ha sido la de Santa Cruz de la Sierra en Julio de 2012.</p>
        <p>A la fecha la SNpB es la única institución de carácter científico para la agrupación de profesionales del área neuropsicológica.</p>
        <p>El NEUROLAP "René Calderón Soria" es el Primer Laboratorio de Neurocognición en Bolivia y debe su nombre al pionero de la Neuropsicología en nuestro país en reconocimiento a su trayectoria e impulso profesional.</p>
        <p>El NEUROLAP se funda en la Universidad Privada de Santa Cruz (UPSA) con el patrocinio de Grand Challenges Canada, Help Age International y Fundación Horizontes, bajo el proyecto “No te olvides de mí” a partir de septiembre de 2014.</p>
      </div>
      <div class="history-image">
        <img src="@/assets/rene-calderon-soria.png" alt="René Calderón Soria">
      </div>
    </div>
    <div class="header">
      <h1>¿QUIENES SOMOS?</h1>
    </div>
    <div class="underline"></div>

    <!-- New content section -->
    <div class="content2">
      <div class="box">
        <h3>VISIÓN</h3>
        <p>El NEUROLAP “Rene Calderón Soria” busca ser el Laboratorio de Neurocognición referencial en Bolivia, para el desarrollo de procedimientos de detección de alteraciones cognitivas y el diseño de programas de estimulación para la atención y rehabilitación de las mismas.</p>
      </div>
      <div class="box">
        <h3>MISIÓN</h3>
        <p>La misión del NEUROLAP “Rene Calderón Soria” es la atención de las necesidades de evaluación y rehabilitación neurocognitiva de personas con alteraciones en este campo, a través de procedimientos de detección y el diseño de programas de estimulación.</p>
      </div>
      <div class="box">
        <h3>OBJETIVO GENERAL</h3>
        <p>Prestar servicios de evaluación mnémica y estimulación neurocognitiva a personas adultas mayores de áreas urbanas y rurales de Bolivia, bajo sospecha de deterioro cognitivo.</p>
      </div>
      <div class="box">
        <h3>OBJETIVOS ESPECIFICOS</h3>
        <p>Desarrollar un software de evaluación mnémica para evaluación eficiente presencial y a distancia. Establecer modelos de evaluación neurocognitiva. Diseñar modelos básicos de estimulación neurocognitiva frente al deterioro cognitivo.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
/* General Styles */
.about {
  margin: 3vw 0 5vh 0;
}

/* Header Section */
.header {
  padding-left: 5vw;
}

.header h1 {
  font-family: 'Inter', sans-serif;
  font-size: 4vw;
  color: #98002E;
  margin: 0;
}

/* Underline Style */
.underline {
  margin: 1vw 0 2vw 5vw;
  width: 10%;
  height: 1ex;
  background-color: #FDB714;
}

/* Content Section */
.content1 {
  display: flex;
  justify-content: space-between;
  gap: 2vw;
}

.history-section {
  flex: 1.5;
  padding-right: 2vw;
  margin-left: 5vw;
}

.history-content h2 {
  color: #98002E;
  font-family: 'Inter';
  font-size: 2.5vw;
  margin-top: auto;
}

.quote {
  background-color: #98002E;
  color: white;
  padding: 1vw 4vw 1vw 4vw;
  font-family: 'Maiandra GD';
  font-size: 1.9vw;
  text-align: justify;
}

.history-text {
  flex: 3;
  margin-right: 5vw;
}

.history-text p {
  margin: 1vh 0;
  font-family: 'Maiandra GD';
  font-size: 1.7vw;
  color: #333;
  text-align: justify;
}

/* Extra Content Section */

.extra-content {
  margin: -1vw 5vw 0 5vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1vw;
}

.history-image {
  flex: 1;
  margin: 0 -1vw 0 -3vw;
}

.history-image img {
  width: 100%;
  height: auto;
}

.extra-text {
  flex: 1;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.content2 {
  display: flex;
  flex-wrap: wrap;
  gap: 7vw;
  margin-top: 4vw;
  justify-content: center;
  padding: 0 7vw;
}

.box {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 4vw;
  width: 45%;
}

.box h3 {
  font-family: 'Inter', sans-serif;
  font-size: 2vw;
  color: #98002E;
  margin-bottom: 2vw;
  margin-top: 0vw;
  text-align: center;
}

.box p {
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
  text-align: justify;
  margin-bottom: -1vw;
}

</style>
