<template>
  <div class="edm">
    <div class="header">
      <h1>EVALUACIÓN DIFERENCIAL DE LA MEMORIA</h1>
    </div>
    <div class="underline"></div>
    <div class="text">
      <p>En este portal, usted encontrará un protocolo que mide el estado de los distintos tipos de memoria, por lo que recibe el nombre de “Evaluación Diferencial de la Memoria”. Este instrumento consta de 34 ítems seleccionados de 14 test de memoria, estandarizados de habla hispana.</p>
    </div>
    <div class="content">
      <div class="section">
        <h2>1-3 MEMORIA EPISÓDICA: ORIENTACIÓN - IDENTIFICACIÓN - PERSONA</h2>
        <p>Explicar al paciente que debemos formalmente hacer preguntas que son muy fáciles. "A continuación le voy a hacer algunas preguntas, muchas de ellas parecen muy simples e inclusive bobas pero necesito hacerlas para tenerlas registradas así que usted por favor contésteme lo mejor que pueda para que el registro quede muy bien" (acompañe este texto con los gestos que correspondan para evitar que el paciente se enoje o se sienta insultado por el tipo de preguntas) (sobre 3 puntos)</p>
        <div class="form-group">
          <label for="edm_nombre">1. ¿CUÁL ES SU NOMBRE?</label>
          <input v-model="edm_nombre" type="text" id="edm_nombre" required />
        </div>
        <div class="form-group">
          <label for="edm_apellido">2. ¿CUÁL ES SU APELLIDO?</label>
          <input v-model="edm_apellido" type="text" id="edm_apellido" required />
        </div>
        <div class="form-group">
          <label for="edm_edad">3. ¿QUÉ EDAD TIENE?</label>
          <input v-model="edm_edad" type="text" id="edm_edad" required />
        </div>
      </div>
      <div class="section">
        <h2>2-2 MEMORIA EPISÓDICA: ORIENTACIÓN - ORIENTACIÓN - ESPACIO</h2>
        <p>"Bien, ahora continuamos con más preguntas. Empezamos" (sobre 5 puntos)</p>
        <div class="form-group">
          <label for="edm_lugar">1. ¿EN QUÉ LUGAR ESTAMOS?</label>
          <input v-model="edm_lugar" type="text" id="edm_lugar" required />
        </div>
        <div class="form-group">
          <label for="edm_piso">2. ¿EN QUÉ PISO?</label>
          <input v-model="edm_piso" type="text" id="edm_piso" required />
        </div>
        <div class="form-group">
          <label for="edm_calle">3. ¿NOMBRE DE LA CALLE?</label>
          <input v-model="edm_calle" type="text" id="edm_calle" required />
        </div>
        <div class="form-group">
          <label for="edm_ciudad">4. ¿EN QUÉ DEPARTAMENTO/PROVINCIA/CIUDAD?</label>
          <input v-model="edm_ciudad" type="text" id="edm_ciudad" required />
        </div>
        <div class="form-group">
          <label for="edm_pais">5. ¿EN QUÉ PAÍS?</label>
          <input v-model="edm_pais" type="text" id="edm_pais" required />
        </div>
      </div>
      <div class="section">
        <h2>3-4 MEMORIA EPISÓDICA: ORIENTACIÓN - IDENTIFICACIÓN - REMOTA</h2>
        <p>"Seguimos con unas preguntas más" (sobre 7 puntos)</p>
        <div class="form-group">
          <label for="edm_navidad">1. ¿EN QUÉ FECHA ES NAVIDAD?</label>
          <input v-model="edm_navidad" type="text" id="edm_navidad" required />
        </div>
        <div class="form-group">
          <label for="edm_agosto">2. ¿QUÉ SE FESTEJA EL 06 DE AGOSTO?</label>
          <input v-model="edm_agosto" type="text" id="edm_agosto" required />
        </div>
        <div class="form-group">
          <label for="edm_enero">3. ¿CUÁNTOS DÍAS TIENE ENERO?</label>
          <input v-model="edm_enero" type="text" id="edm_enero" required />
        </div>
        <div class="form-group">
          <label for="edm_septiembre">4. ¿QUÉ SE FESTEJA EL 24 DE SEPTIEMBRE?</label>
          <input v-model="edm_septiembre" type="text" id="edm_septiembre" required />
        </div>
        <div class="form-group">
          <label for="edm_bandera">5. ¿CUÁLES SON LOS COLORES DE LA BANDERA BOLIVIANA?</label>
          <input v-model="edm_bandera" type="text" id="edm_bandera" required />
        </div>
        <div class="form-group">
          <label for="edm_departamentos">6. ¿CUÁNTOS DEPARTAMENTOS TIENE BOLIVIA?</label>
          <input v-model="edm_departamentos" type="text" id="edm_departamentos" required />
        </div>
        <div class="form-group">
          <label for="edm_bolivar">7. ¿QUIÉN FUE SIMÓN BOLIVAR?</label>
          <input v-model="edm_bolivar" type="text" id="edm_bolivar" required />
        </div>
      </div>
      <button type="submit" class="btn">Enviar</button>
    </div>
    <p class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edm_nombre: '',
      edm_apellido: '',
      edm_edad: '',
      edm_lugar: '',
      edm_piso: '',
      edm_calle: '',
      edm_ciudad: '',
      edm_pais: '',
      edm_navidad: '',
      edm_agosto: '',
      edm_enero: '',
      edm_septiembre: '',
      edm_bandera: '',
      edm_departamentos: '',
      edm_bolivar: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Aquí podrías añadir la lógica para enviar los datos a tu servidor
        console.log('Formulario enviado:', {
          edm_nombre: this.edm_nombre,
          edm_apellido: this.edm_apellido,
          edm_edad: this.edm_edad,
          edm_lugar: this.edm_lugar,
          edm_piso: this.edm_piso,
          edm_calle: this.edm_calle,
          edm_ciudad: this.edm_ciudad,
          edm_pais: this.edm_pais,
          edm_navidad: this.edm_navidad,
          edm_agosto: this.edm_agosto,
          edm_enero: this.edm_enero,
          edm_septiembre: this.edm_septiembre,
          edm_bandera: this.edm_bandera,
          edm_departamentos: this.edm_departamentos,
          edm_bolivar: this.edm_bolivar
        });
        
        // Suponiendo que los datos se envían correctamente, redirigir a /report
        this.$router.push('/report');
      } catch (error) {
        this.errorMessage = 'Error al enviar los datos. Intenta de nuevo.';
      }
    }
  }
};
</script>

<style scoped>
/* General Styles */
.edm {
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

.content {
  margin: 3vw 5vw 0 5vw;
  font-family: 'Maiandra GD';
  font-size: 1.5vw;
  color: #333;
}

.section {
  margin-bottom: 2vw;
}

.section h2 {
  font-size: 2vw;
  color: #98002E;
}

.section p {
  font-size: 1.8vw;
  color: #333;
}

.form-group {
  margin: 1vw 0;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 1.3vw;
}

input[type="text"] {
  width: 100%;
  padding: 0.5vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.3vw;
  font-family: 'Poppins';
}

.btn {
  width: 100%;
  padding: 1vw;
  background-color: #98002E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3vw;
  margin-top: 2vw;
}

.btn:hover {
  background-color: #AB8A8E;
  color: #98002E;
  font-weight: bold;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
