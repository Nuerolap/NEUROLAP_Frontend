<template>
  <div class="terms">
    <div class="header">
      <h1>Terminos y Politica de Privacidad</h1>
    </div>
    <div class="extra-content">
      <p>Por favor lea  cuidadosamente el contenido de este documento, debemos estar seguros que comprende todos los requisitos  y procedimientos que requiere su participación.</p>
      <h2>Proposito del Estudio:</h2>
      <p>El propósito de este estudio es detectar casos de personas adultas mayores que presenten alteraciones en el  estado neuropsicológico para poder implementar de manera gratuita un programa de intervención  neuropsicológica, para lo cual tenemos como punto de partida el establecimiento del perfil neuropsicológico  de las personas Adultas Mayores en la ciudad de Santa Cruz de la Sierra.</p>
      <h2>Riesgo del Estudio:</h2>
      <p>La participación en este estudio no representa para el adulto mayor o su entorno NINGÚN RIESGO al no  plantearse variables de influencia, ni positiva, ni negativa.</p>
      <h2>Participación en el Estudio:</h2>
      <p>Nuevamente le reiteramos que su participación es completamente voluntaria. Usted puede finalizar su  participación en el momento que lo decida. No se le penalizará de ninguna forma por no participar.  Adicionalmente, pudiera ser excluido del estudio por el personal de investigación si en algún momento los  investigadores consideran que su participación no es beneficiosa para usted mismo.</p>
      <h2>Confidencialidad:</h2>
      <p>Su información llevará su nombre, pero este no será nunca divulgado. La base de datos del estudio permanecerá  en la oficina del investigador principal y solamente los miembros del equipo de investigación tendrán acceso  a ella.</p>
      <h2>Aceptación:</h2>
      <p>He leído este consentimiento de participación en el Estudio del e, el cual está impreso en español (lenguaje  que leo y entiendo). Este estudio de investigación me ha sido explicado y todas mis preguntas relacionadas con  los procedimientos, riesgos, inconvenientes y efectos adversos del mismo, me han sido respondidas  satisfactoriamente.</p>
    </div>
    <div class="button-container">
      <router-link to="/registration" class="button">Volver</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsPage',
}
</script>

<style scoped>
/* General Styles */
.terms {
  margin: 4vw 5vw;
  border: 2px solid black; /* Borde negro alrededor del contenido */
  padding: 5vw;
}

.header {  
  justify-content: center;
  margin-top: -1vw;
}

.header h1, .text h1 {
  font-family: 'Inter', sans-serif;
  font-size: 4vw;
  color: #98002E;
  text-align: center;
}

/* Extra Content Section */
.extra-content {
  color: #4A4459;
  font-family: 'Inter';
  font-size: 1.8vw;
  text-align: justify;
}

.extra-content h2{
  font-size: 2vw;
  font-weight: bold;
}

.button-container {
  text-align: center;
  margin-top:  3vw;
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
