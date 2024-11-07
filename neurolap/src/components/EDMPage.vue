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
      <form @submit.prevent="handleSubmit">
        <div class="section">
          <h2>1-3 MEMORIA EPISÓDICA: ORIENTACIÓN - IDENTIFICACIÓN - PERSONA</h2>
          <p>Explicar al paciente que debemos formalmente hacer preguntas que son muy fáciles. <strong>"A continuación le voy a hacer algunas preguntas, muchas de ellas parecen muy simples e inclusive bobas pero necesito hacerlas para tenerlas registradas así que usted por favor contésteme lo mejor que pueda para que el registro quede muy bien"</strong> (acompañe este texto con los gestos que correspondan para evitar que el paciente se enoje o se sienta insultado por el tipo de preguntas) (sobre 3 puntos)</p>
          <div class="form-group">
            <label for="episodica1_1">1. ¿CUÁL ES SU NOMBRE?</label>
            <input v-model="episodica1.nombre" type="text" id="episodica1_1" required />
          </div>
          <div class="form-group">
            <label for="episodica1_2">2. ¿CUÁL ES SU APELLIDO?</label>
            <input v-model="episodica1.apellido" type="text" id="episodica1_2" required />
          </div>
          <div class="form-group">
            <label for="episodica1_3">3. ¿QUÉ EDAD TIENE?</label>
            <input v-model="episodica1.edad" type="text" id="episodica1_3" required />
          </div>
        </div>
        <div class="section">
          <h2>2-2 MEMORIA EPISÓDICA: ORIENTACIÓN - ORIENTACIÓN - ESPACIO</h2>
          <p><strong>"Bien, ahora continuamos con más preguntas. Empezamos"</strong> (sobre 5 puntos)</p>
          <div class="form-group">
            <label for="episodica2_1">1. ¿EN QUÉ LUGAR ESTAMOS?</label>
            <input v-model="episodica2.lugar" type="text" id="episodica2_1" required />
          </div>
          <div class="form-group">
            <label for="episodica2_2">2. ¿EN QUÉ PISO?</label>
            <input v-model="episodica2.piso" type="text" id="episodica2_2" required />
          </div>
          <div class="form-group">
            <label for="episodica2_3">3. ¿NOMBRE DE LA CALLE?</label>
            <input v-model="episodica2.calle" type="text" id="episodica2_3" required />
          </div>
          <div class="form-group">
            <label for="episodica2_4">4. ¿EN QUÉ DEPARTAMENTO/PROVINCIA/CIUDAD?</label>
            <input v-model="episodica2.departamento" type="text" id="episodica2_4" required />
          </div>
          <div class="form-group">
            <label for="episodica2_5">5. ¿EN QUÉ PAÍS?</label>
            <input v-model="episodica2.pais" type="text" id="episodica2_5" required />
          </div>
        </div>
        <div class="section">
          <h2>3-4 MEMORIA EPISÓDICA: ORIENTACIÓN - IDENTIFICACIÓN - REMOTA</h2>
          <p><strong>"Seguimos con unas preguntas más"</strong> (sobre 7 puntos)</p>
          <div class="form-group">
            <label for="episodica3_1">1. ¿EN QUÉ FECHA ES NAVIDAD?</label>
            <input v-model="episodica3.navidad" type="text" id="episodica3_1" required />
          </div>
          <div class="form-group">
            <label for="episodica3_2">2. ¿QUÉ SE FESTEJA EL 06 DE AGOSTO?</label>
            <input v-model="episodica3.agosto6" type="text" id="episodica3_2" required />
          </div>
          <div class="form-group">
            <label for="episodica3_3">3. ¿CUÁNTOS DÍAS TIENE ENERO?</label>
            <input v-model="episodica3.enero" type="text" id="episodica3_3" required />
          </div>
          <div class="form-group">
            <label for="episodica3_4">4. ¿QUÉ SE FESTEJA EL 24 DE SEPTIEMBRE?</label>
            <input v-model="episodica3.septiembre24" type="text" id="episodica3_4" required />
          </div>
          <div class="form-group">
            <label for="episodica3_5">5. ¿CUÁLES SON LOS COLORES DE LA BANDERA BOLIVIANA?</label>
            <input v-model="episodica3.bandera" type="text" id="episodica3_5" required />
          </div>
          <div class="form-group">
            <label for="episodica3_6">6. ¿CUÁNTOS DEPARTAMENTOS TIENE BOLIVIA?</label>
            <input v-model="episodica3.departamentos" type="text" id="episodica3_6" required />
          </div>
          <div class="form-group">
            <label for="episodica3_7">7. ¿QUIÉN FUE SIMÓN BOLIVAR?</label>
            <input v-model="episodica3.simonBolivar" type="text" id="episodica3_7" required />
          </div>
        </div>
        <div class="section">
          <h2>4-5 MEMORIA OPERATIVA: ATENCIÓN - CÁLC. Y SEGUIM. - PROGRESIÓN</h2>
          <p>El examinador pide que el paciente nombre los días de la semana en orden progresivo; se anumal la instrucción cuando el sujeto demora por buscar algún tipo de ayuda (repite desde el principio más de dos veces).</p>
          <p><strong>"Nombre los días de la semana, del primero que es hábil al último"</strong> (sobre 7 puntos)</p>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.lunes"> Lunes
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.martes"> Martes
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.miercoles"> Miércoles
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.jueves"> Jueves
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.viernes"> Viernes
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.sabado"> Sábado
            </label>
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="operativa4.domingo"> Domingo
            </label>
          </div>
        </div>
        <button type="submit" class="btn">Enviar</button>
      </form>
    </div>
    <p class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      episodica1: {
        nombre: '',
        apellido: '',
        edad: ''
      },
      episodica2: {
        lugar: '',
        piso: '',
        calle: '',
        departamento: '',
        pais: ''
      },
      episodica3: {
        navidad: '',
        agosto6: '',
        enero: '',
        septiembre24: '',
        bandera: '',
        departamentos: '',
        simonBolivar: ''
      },
      operativa4: {
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado: false,
        domingo: false
      },
      errorMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // Aquí podrías añadir la lógica para enviar los datos a tu servidor
      console.log('Formulario enviado:', {
        episodica1: this.episodica1,
        episodica2: this.episodica2,
        episodica3: this.episodica3,
        operativa4: this.operativa4
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
  text-align: justify;
}

.form-group {
  margin: 1vw 2vw;
  display: flex;
  justify-content: space-between;
  gap: 3%;
  align-items: baseline;
}

label {
  font-size: 1.4vw;
}

input[type="text"] {
  width: 100%;
  padding: 0.5vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.3vw;
  font-family: 'Poppins';
  flex: 1;
}

input[type="checkbox"] {
  margin-right: 1vw;
  margin-bottom: -1vw;
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
