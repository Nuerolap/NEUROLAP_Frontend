<template>
  <div class="report">
    <div class="header">
      <h1>REPORTE CLINICO DE LA EVALUACIÓN</h1>
    </div>
    <div class="underline"></div>
    <div class="text">
      <p>En este portal, usted encontrará un protocolo que mide el estado de los distintos tipos de memoria, por lo que recibe el nombre de “Evaluación Diferencial de la Memoria”. Este instrumento consta de 34 ítems seleccionados de 14 test de memoria, estandarizados de habla hispana.</p>
    </div>
    <!-- Dimensiones Section -->
    <div class="dimensions">
      <h2>Dimensiones que se describen en el Reporte Clínico:</h2>
      <div class="dimension-columns">
        <div class="column">
          <li><strong>Cálculo y seguimiento.</strong></li>
          <p>Agrupa los ítems concernientes a operaciones matemáticas, progresiones y regresiones.</p>
          <li><strong>Orientación.</strong></li>
          <p>Agrupa los ítems concernientes al reconocimiento de aspectos, temporales y espaciales.</p>
          <li><strong>Seguimiento de órdenes.</strong></li> 
          <p>Agrupa los ítems concernientes a la premisa de realización de acciones dirigidas y determinadas, tanto de tipo físico-motor como de carácter cognitivo.</p>
          <li><strong>Evocación Verbal.</strong></li> 
          <p>Agrupa los ítems concernientes a la recuperación de contenidos verbales simples y compuestos.</p>
          <li><strong>Codificación.</strong></li> 
          <p>Agrupa los ítems concernientes a los procesos de codificación, decodificación y recodificación.</p>
        </div>
        <div class="column">
          <li><strong>Reconocimiento.</strong></li>
          <p>Agrupa los ítems concernientes a la capacidad de evocación o recuerdo con y sin pateo.</p>
          <li><strong>Identificación.</strong></li>
          <p>Agrupa los ítems concernientes al reconocimiento de la persona en sí misma y de las de su medio ambiente circundante.</p>
          <li><strong>Discriminación.</strong></li>
          <p>Agrupa los ítems concernientes a la diferenciación, conceptualización y retención de rasgos principales de los estímulos propuestos.</p>
          <li><strong>Comprensión.</strong></li>
          <p>Agrupa los ítems concernientes a la capacidad de asimilación y coherencia.</p>
          <li><strong>Representación.</strong></li>
          <p>Agrupa los ítems concernientes a la evocación gráfica de estímulos visuales previamente presentados.</p>
        </div>
      </div>
    </div>

    <!-- Color Explanation Section -->
    <div class="color-explanation">
      <p>Posteriormente a la aplicación del protocolo, se obtiene un reporte clínico que le indica en tres colores el estado de su memoria a partir de sus distintas dimensiones descritas anteriormente.</p>
      <p>Los colores que usted encontrará serán el Rojo, el Amarillo y el Verde:</p>
      <ul>
        <li><span class="color-box red"></span> Rojo cuando es DEFICITARIO.</li>
        <li><span class="color-box yellow"></span> Amarillo cuando es AFECTADO.</li>
        <li><span class="color-box green"></span> Verde cuando es CONSERVADO.</li>
      </ul>
      <p>Debido a la utilización de colores, la interpretación del reporte clínico es muy sencilla y de uso práctico por parte tanto de los familiares como de los profesionales a cargo del paciente.</p>
    </div>
    <div class="diagram">
      <img src="@/assets/report-image.png" alt="Reporte EDM">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportPage',
}
</script>

<style scoped>
.report {
  margin-top: 4vw;
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
  width: 30%;
  height: 1ex;
  background-color: #FDB714;
}

.text {
  margin: 3vw 5vw 0 5vw;
  flex: 1;
  text-align: justify;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
}
/* Dimensions Section */
.dimensions {
  background-color: #98002E;
  color: white;
  padding: 3% 7%;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  text-align: justify;
}

.dimensions h2 {
  color: white;
  font-family: 'Inter';
  font-size: 2.5vw;
  margin-bottom: 2vw;
}

.dimension-columns {
  display: flex;
  justify-content: space-between;
}

.column {
  width: 45%;
}

.column li{
  margin-bottom: -2vw;
}

/* Color Explanation Section */
.color-explanation {
  background-color: #F5F5F5;
  padding: 2% 5%;
  font-family: 'Maiandra GD';
  font-size: 1.8vw;
  color: #333;
  text-align: justify;
}

.color-explanation ul {
  list-style: none;
  padding: 0;
  margin: 1vw 0;
}

.color-explanation li {
  display: flex;
  align-items: center;
  font-size: 1.6vw;
}

.color-box {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 10px;
}

.red {
  background-color: #D9534F;
}

.yellow {
  background-color: #F0AD4E;
}

.green {
  background-color: #5CB85C;
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

</style>