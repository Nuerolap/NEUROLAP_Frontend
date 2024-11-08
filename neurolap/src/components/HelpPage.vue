<template>
  <div class="help">
    <div class="header">
      <h1>PROFESIONAL ACREDITADO</h1>
    </div>
    <div class="underline"></div>
    <p>Para el profesional este portal será una ayuda al momento de trabajar con Personas Adultas Mayores (PAM). Para ser parte de él usted debe ser acreditado previamente, este portal solo admite a usuarios de las siguientes ramas: neuropsicólogos, psicólogos clínicos, médicos generales, médicos familiares, gerontólogos, psiquiatras, neurólogos y otros profesionales vinculados a las neurociencias y el desarrollo humano.</p>
    <div class="content">
      <div class="text">
        <p>Al ser parte del portal usted puede acceder a las siguientes evaluaciones:</p>
        <h3>Evaluación Diferencial de la Memoria (EDM):</h3>
        <p>Donde usted podrá luego de realizar la prueba a la PAM obtener un reporte clínico el cuál se indicará el estado actual de la memoria de su paciente de forma clara y precisa</p>
        <h3>Escala de Reserva Cognitiva: </h3>
        <p>Esta escala ayuda a ver las habilidades o hábitos que posee la PAM y que pueden ser utilizadas para palear el avance del deterioro cognitivo.</p>
        <h3>Mini-Mental State Examination (MMSE): </h3>
        <p>Es una prueba rápida la cual confirma el resultado obtenido en el EDM.</p>
        <h3>Escala Global de Deterioro cognitivo (GDS):</h3>
        <p> Esta escala le indicará a usted en qué fase se encuentra su paciente, dependiendo los síntomas que el presenta.</p>
      </div>
      <div class="image">
        <img src="@/assets/help-image.png" alt="Profesional acreditado">
      </div>
    </div>
    <div class="quote">
      <p>Por estos beneficios de brindar un mejor servicio y trato a su paciente PAM le invitamos a ser parte de esta experiencia que contribuirá no solo a su desempeño como profesional sino que ayudará a investigaciones del área a nivel nacional e internacional.</p>
    </div>
    <div class="extra-content">
      <h2>Una Persona Adulto Mayor:</h2>
      <p>Si usted es una Persona Adulta Mayor (PAM) este portal le ayudará en la detección temprana de problemas de memoria. Usted puede dirigirse a nuestros profesionales acreditados de las siguientes ramas: neuropsicólogos, psicólogos clínicos, médicos generales, médicos familiares, gerontólogos, psiquiatras, neurólogos y otros profesionales vinculados a las neurociencias y el desarrollo humano; para que se le realice las evaluaciones respectivas.</p> 
      <p>Al realizarle las pruebas usted podrá tener una descripción precisa de su estado actual de memoria y ser parte de un programa de estimulación cognitiva, servicio que se brinda en la Universidad Privada de Santa Cruz (UPSA) en el Centro de Investigaciones y Asesoramiento Psicológico (CIAP), donde contamos con un equipo especializado y listo para atenderlo en lo que necesite.</p>
    </div>
    <div class="other-content">
      <div class="other-text">
        <h2>Familiar o cuidador:</h2>
        <p>Si usted es un familiar o cuidador de una Persona Adulta Mayor (PAM) el servicio que le brinda a usted primeramente es el de contactar a un profesional del area: neuropsicólogos, psicólogos clínicos, médicos generales, médicos familiares, gerontólogos, psiquiatras, neurólogos y otros profesionales vinculados a las neurociencias y el desarrollo humano. Al contactarse con ellos la PAM será evaluada con una serie de instrumentos que determinarán cuál es la situación de su memoria. Posterior a esta prueba puede llevar a la PAM a la Universidad Privada de Santa Cruz (UPSA) en el Centro de Investigaciones y Asesoramiento Psicológico (CIAP), donde contamos con un equipo especializado y listo para trabajar con la PAM en la estimulación cognitiva, además en él usted recibirá capacitaciones sobre el cuidado de esta persona.</p> 
      </div>
      <div class="other-image">
        <img src="@/assets/family-image.png" alt="Familiar o cuidador">
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'HelpPage',
}
</script>

<style scoped>
/* General Styles */
.help {
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
.content, .welcome-section, .other-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
}

.help p {
  margin: 2vh 5vw;
  flex: 1;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.text, .other-text, .mission-section p, .objectives-section p {
  margin-left: 5vw;
  flex: 1;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.text h3 {
  color: #98002E;
  font-family: 'Inter';
  font-size: 1.8vw;
  margin: 2vw 0 0 0;
}

.text p {
  margin: 0;
}

.image {
  flex: 1;
  margin-right: 5vw;
}

.other-image {
  flex: 1;
}

.image img, .other-image img {
  width: 100%;
  height: auto;
  display: block;
}

.diagram {
  flex: 1;
  margin: 1% 10% 5% 10%;
}

.diagram img {
  width: 100%;
  height: auto;
  display: block;
}

/* Quote Section */
.quote {
  margin: 2vw 0;
  background-color: #98002E;
  padding: 2% 5%;
  text-align: center;
}

.quote p{
  color: white;
  font-family: 'Maiandra GD';
  font-size: 2vw;
}

/* Extra Content Section */
.extra-content {
  color: #4A4459;
  font-family: 'Inter';
  font-size: 1.8vw;
  text-align: justify;
  margin: 0 5vw;
}

.extra-content h2, .other-text h2 {
  color: #98002E;
  font-family: 'Inter';
  font-size: 2.5vw;
  margin: 2vw 0 1vw 0;
}

.extra-content p, .other-text p{
  margin: 0;
}

/* Rectangle Styles */
.rectangle1, .rectangle2 {
  position: relative;
  opacity: 0.8;
  z-index: 1;
}

.rectangle1 {
  background-color: #EED3BE;
  border-radius: 0 0 0 15px;
  width: 80%;
  height: 5vh;
  margin: 0 0 0 auto;
}

.rectangle2 {
  background-color: #974844;
  border-radius: 0 15px 0 0;
  width: 30%;
  height: 5vh;
  margin: auto 0 0 0;
}

/* other Section */
.other-section, .vision-section, .mission-section, .objectives-section {
  text-align: center;
}

.other-header, .vision-section h2, .mission-section h2, .objectives-section h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  margin-top: 7vh;
}

.other-header .text-header, .vision-section h2, .mission-section h2, .objectives-section h2 {
  flex: 1;
}

.other-header .text-header h2, .vision-section h2, .mission-section h2, .objectives-section h2 {
  color: #800000;
  font-family: 'Maiandra GD';
  font-size: 4vw;
  margin: 0;
  margin: 0 auto 0 auto;
}

/* other Content */
.other-text p {
  margin: 1% 0;
}

</style>
