<template>
  <div class="evaluation">
    <div class="header">
      <h1>EVALUACIÓN NEUROPSICOLOGICA DE LA MEMORIA</h1>
    </div>
    <div class="underline"></div>
    <div class="content">
      <div class="text">
        <p>La evaluación de la memoria se constituye en un procedimiento neuropsicológico protocolar en las diversas áreas de la Neuropsicología debido a la relevancia de la conservación o déficit de la memoria en todas y cada una de las acciones humanas.</p>
        <p>Anteriormente, la evaluación de la memoria se restringía al plano de la patología y se sobreentendía que su evaluación respondía a la necesidad de valorar el deterioro cognitivo de personas muy mayores, o sobrevivientes a eventos que hubieren puesto en peligro su integridad física o hubiera agredido la región de la cabeza.</p>
        <p>Hoy en día, la evaluación de la memoria debe realizarse a partir del estudio de la maduración cerebral y el neurodesarrollo hasta el envejecimiento patológico.</p>
      </div>
      <div class="image">
        <img src="@/assets/evaluation-image.png" alt="Evaluación de memoria">
      </div>
    </div>
    <div class="quote">
      <p>Evaluar la memoria es evaluar la cognición humana, porque es a ella a quien le debemos los procesos de codificación, decodificación y recodificación; es evaluar los procesos cognitivos tanto básicos como superiores.</p>
    </div>
    <div class="diagram-text">
      <p>En el cuadro siguiente se muestra de manera clara como los procesos cognitivos centrales para la interacción humana recurren y requieren de nuestra capacidad mnémica para tener lugar.</p>
    </div>
    <div class="diagram">
      <img src="@/assets/evaluation-diagram.png" alt="Funciones neuropsicologicas">
    </div>
    <div class="test-section">
      <h2>EVALUACIÓN DIFERENCIAL DE LA MEMORIA </h2>
      <div class="button-container">
        <button class="button" @click="checkLogin">Iniciar</button>
      </div>
    </div>
  </div>
</template>

<script>
import pb from '../services/pocketbase';
export default {
  name: 'EvaluationPage',
  methods: {
    checkLogin() {
      if (!pb.authStore.isValid) {
        this.$router.push('/login');
      }else{
        this.$router.push('/patient-registration');
      }
    } 
  }
}
</script>

<style scoped>
.evaluation {
  margin-top: 9vh;
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


.underline {
  margin-top: 9vh;
  margin-left: 7vh;
  width: 41%;
  height: 1ex;
  background-color: #FDB714;
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 4vw;
  margin: 4% 0;
}

.text {
  margin-top: 2vh;
  margin-left: 7vh;
  flex: 1;
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
}

.quote {
  background-color: #98002E;
  color: white;
  padding: 2% 12% 2% 12%;
  font-family: 'Maiandra GD';
  font-size: 3vw;
  text-align: center;
}

.diagram-text {
  color: #4A4459;
  padding: 5% 5% 2% 5%;
  font-family: 'Inter';
  font-size: 1.8vw;
  text-align: center;
}

.diagram {
  flex: 1;
  margin: 1% 10% 5% 10%;
}

.diagram img {
  width: 100%;
  height: auto;
  display: block;
  align-content: center;
}

.test-section {
  margin-top: 5%;
  margin-bottom: 5%;
}

.test-section h2 {
  font-family: 'Inter';
  font-weight: bold;
  font-size: 4vw;
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
