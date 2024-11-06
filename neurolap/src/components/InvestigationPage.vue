<template>
  <div class="investigation">
    <div class="header">
      <h1>¿QUÉ INVESTIGAMOS?</h1>
    </div>
    <div class="underline"></div>
    <div class="topics">
      <div class="topic-card">
        <h2>LA MEMORIA</h2>
        <div class="button-container">
          <router-link to="/about" class="button">Más información</router-link>
        </div>
      </div>
      <div class="topic-card">
        <h2>EL DETERIORO COGNITIVO</h2>
        <div class="button-container">
          <router-link to="/about" class="button">Más información</router-link>
        </div>
      </div>
      <div class="topic-card">
        <h2>RESERVA COGNITIVA</h2>
        <div class="button-container">
          <router-link to="/about" class="button">Más información</router-link>
        </div>
      </div>
      <div class="topic-card">
        <h2>LA CALIDAD DE VIDA DE LAS P.A.M.</h2>
        <div class="button-container">
          <router-link to="/about" class="button">Más información</router-link>
        </div>
      </div>
      <div class="topic-card">
        <h2>EL ENVEJECIMIENTO NORMAL Y PATOLÓGICO</h2>
        <div class="button-container">
          <router-link to="/about" class="button">Más información</router-link>
        </div>
      </div>
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
  margin: 7vh 5vw 5vh 5vw;
  padding: 0;
}

/* Header Section */
.header {
  text-align: center;
}

.header h1 {
  font-family: 'Inter', sans-serif;
  font-size: 4vw;
  color: #98002E;
  margin: 0;
}

/* Underline Style */
.underline {
  margin: 1vh auto 5vh 0;
  width: 10%;
  height: 1ex;
  background-color: #FDB714;
}

/* Topics Grid */
.topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  padding: 0 7vh;
  justify-content: center;
}

/* Topic Card */
.topic-card {
  background-color: #FFFFFF;
  padding: 40px 25px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.topic-card h2 {
  font-family: 'Inter', sans-serif;
  font-size: 2vw;
  color: #8D323E;
  margin-bottom: 30px;
}

/* Button Styles */
.button-container {
  text-align: center;
}

.button {
  text-decoration: none;
  background-color: #FDB714;
  padding: 15px 20px;
  border: none;
  border-radius: 36px;
  font-family: 'Maiandra GD', sans-serif;
  font-weight: bold;
  font-size: 1.2vw;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #AB8A8E;
  color: #8D323E;
}
</style>
