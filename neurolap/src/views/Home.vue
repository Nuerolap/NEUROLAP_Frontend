<template>
  <div class="home">
    <div class="rectangle1"></div> 
    <div class="welcome-section">
      <div class="text">
        <h1>BIENVENIDOS A NEUROLAP</h1>
        <div class="underline"></div>
        <p>Este es un portal destinado a la detección de alteraciones en el funcionamiento de la memoria de las Personas Adultas Mayores (PAM). Usted tendrá, en este portal, acceso a un instrumento denominado Evaluación Diferencial de la memoria (EDM) que brindará a su paciente, a su familia y a usted la posibilidad de identificar el estado de las habilidades cognitivas que derivan del uso cotidiano de las memorias.</p>
        <div class="rectangle2"></div> 
      </div>
      <div class="image">
        <img src="@/assets/home-image.png" alt="Bienvenida Neurolap">
      </div>
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
  height: 3vw; /* Altura del rectángulo */
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
  margin-top: 10vw;
  flex: 1.7;
}

.text h1{
  font-family: 'Inter', sans-serif;
  font-size: 4vw;
  color: #98002E;
  margin-left: 5vw;
}

.underline {
  width: 41%;
  height: 1ex;
  background-color: #FDB714;
  margin: 1vw 0;
  margin-left: 5vw;
}

.text p{  
  margin-top: 5vh;
  margin-left: 5vw;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}

.rectangle2 {
  background-color: #98002E;
  opacity: 0.8;
  border-radius: 0 15px 0 0; /* Bordes redondeados */
  width: 30%;
  height: 3vw; /* Altura del rectángulo */
  margin: 12.5% 0 0 0; 
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


</style>
