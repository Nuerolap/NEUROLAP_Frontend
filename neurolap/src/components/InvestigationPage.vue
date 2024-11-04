<template>
  <div class="investigation">
    <div class="header">
      <h1>TÍTULO DE LA VENTANA</h1>
    </div>
    <div class="underline"></div>
    <div class="content">
      <div class="text">
        <p>Contenido principal de la ventana. Aquí puedes añadir el texto que desees.</p>
      </div>
      <div class="image">
        <img src="@/assets/home-image.png" alt="Descripción de la imagen">
      </div>
    </div>
    <div class="quote">
      <p>Cita o texto destacado relacionado con el contenido.</p>
    </div>
    <div class="extra-content">
      <p>Contenido adicional que puede incluir texto, diagramas, etc.</p>
    </div>
    <div class="diagram">
      <img src="@/assets/evaluation-diagram.png" alt="Descripción del diagrama">
    </div>
    <!-- Additional Sections from Home Page -->
    <div class="other-section">
      <div class="other-header">
        <div class="line"></div>
        <div class="text-header">
          <h2>Sección 1</h2>
        </div>
      </div>
      <div class="other-content">
        <div class="other-image">
          <img src="@/assets/home-image.png" alt="Descripción de la imagen histórica">
        </div>
        <div class="other-text">
          <p>Contenido de la historia...</p>
        </div>
      </div>
    </div>
    <div class="vision-section">
      <h2>Subseccion 1</h2>
      <p>Contenido de la subseccion...</p>
    </div>
    <div class="mission-section">
      <h2>Subseccion 2</h2>
      <p>Contenido de la subseccion...</p>
    </div>
    <div class="objectives-section">
      <h2>Subseccion 3</h2>
      <p>Contenido de los subseccion...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestigationPage',
}
</script>

<style scoped>
/* General Styles */
.investigation {
  margin-top: 7vh;
  margin-bottom: 5vh;
  padding: 0;
}

/* Header Section */
.header {
  margin-left: 7vh;
}

.header h1, .text h1 {
  font-family: 'Inter', sans-serif;
  font-size: 5vw;
  color: #98002E;
  margin: 0;
  margin-right: 10vh;
}

/* Underline Style */
.underline {
  margin-top: 9vh;
  margin-left: 7vh;
  width: 41%;
  height: 1ex;
  background-color: #FDB714;
}

.line {
  flex: 3;
  width: 41%;
  height: 1ex;
  background-color: #b27270;
}

/* Content Section */
.content, .welcome-section, .other-content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4vw;
  margin: 4% 0;
}

.text, .other-text, .vision-section p, .mission-section p, .objectives-section p {
  margin-top: 2vh;
  margin-left: 7vh;
  flex: 1;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.image, .other-image {
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
  background-color: #98002E;
  color: white;
  padding: 2% 12%;
  font-family: 'Maiandra GD';
  font-size: 3vw;
  text-align: center;
}

/* Extra Content Section */
.extra-content {
  color: #4A4459;
  padding: 5%;
  font-family: 'Inter';
  font-size: 1.8vw;
  text-align: center;
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
