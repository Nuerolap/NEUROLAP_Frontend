<template>
  <div class="registration">
    <div class="content">
      <div class="image">
        <img src="@/assets/registration-image.png" alt="Registro Neurolap">
      </div>
      <div class="text">
        <h1>¡Inicia el proceso de Evaluación!</h1>
        <p>Registra los siguientes datos.</p>
        <div class="form-container">
          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">Nombre(s)</label>
                <input v-model="formData.nombre" @input="handleInput('updateNombre', $event)" type="text" id="nombre" required />
              </div>
              <div class="form-group">
                <label for="apellido">Apellido(s)</label>
                <input v-model="formData.apellido" @input="handleInput('updateApellido', $event)" type="text" id="apellido" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="ciudad">Ciudad Natal</label>
                <input v-model="formData.ciudad" @input="handleInput('updateCiudad', $event)" type="text" id="ciudad" required />
              </div>
              <div class="form-group">
                <label for="cedula">Cédula de Identidad</label>
                <input v-model="formData.cedula" @input="handleInput('updateCedula', $event)" type="text" id="cedula" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="fechaNacimiento">Fecha de Nacimiento</label>
                <input v-model="formData.fechaNacimiento" @input="handleInput('updateFechaNacimiento', $event)" type="date" id="fechaNacimiento" required />
              </div>
              <div class="form-group">
                <label for="estadoCivil">Estado Civil</label>
                <input v-model="formData.estadoCivil" @input="handleInput('updateEstadoCivil', $event)" type="text" id="estadoCivil" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="gradoInstruccion">Grado de Instrucción</label>
                <input v-model="formData.gradoInstruccion" @input="handleInput('updateGradoInstruccion', $event)" type="text" id="gradoInstruccion" required />
              </div>
              <div class="form-group">
                <label for="profesion">Profesión/Ocupación</label>
                <input v-model="formData.profesion" @input="handleInput('updateProfesion', $event)" type="text" id="profesion" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="telefono1">Teléfono 1</label>
                <input v-model="formData.telefono1" @input="handleInput('updateTelefono1', $event)" type="tel" id="telefono1" required />
              </div>
              <div class="form-group">
                <label for="telefono2">Teléfono 2 (Opcional)</label>
                <input v-model="formData.telefono2" @input="handleInput('updateTelefono2', $event)" type="tel" id="telefono2" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="direccion">Dirección</label>
                <input v-model="formData.direccion" @input="handleInput('updateDireccion', $event)" type="text" id="direccion" required />
              </div>
            </div>
            <div class="form-group form-checkbox">
              <input v-model="formData.aceptarTerminos" @change="handleCheckbox('updateAceptarTerminos', $event)" type="checkbox" id="terminos" required />
              <label for="terminos">Estoy de acuerdo con los <router-link to="/terms">Términos y Política de privacidad</router-link></label>
            </div>
            <button type="submit" class="btn">Enviar</button>
          </form>
          <p class="error-message">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'RegistrationPage',
  data() {
    return {
      errorMessage: ''
    };
  },
  computed: {
    ...mapState({
      formData: state => state.formData
    })
  },
  methods: {
    ...mapMutations([
      'updateNombre',
      'updateApellido',
      'updateCiudad',
      'updateCedula',
      'updateFechaNacimiento',
      'updateEstadoCivil',
      'updateGradoInstruccion',
      'updateProfesion',
      'updateTelefono1',
      'updateTelefono2',
      'updateDireccion',
      'updateAceptarTerminos'
    ]),
    handleSubmit() {
      try {
        console.log('Formulario enviado', this.formData);
        this.$router.push('/edm');
      } catch (error) {
        this.errorMessage = 'Error al enviar los datos. Intenta de nuevo.';
      }
    },
    handleInput(mutation, event) {
      this[mutation](event.target.value);
    },
    handleCheckbox(mutation, event) {
      this[mutation](event.target.checked);
    }
  }
};
</script>

<style scoped>
/* General Styles */
.registration {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}

/* Header Section */
.content h1, .text h1 {
  font-family: 'Inter', sans-serif;
  font-size: 2.5vw;
  color: #98002E;
  margin-top: 2vw;
}

.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1vw;
}

.text {
  margin: 4vh 3vh 0 3vh;
  flex: 1.1;
  text-align: justify;
  font-family: 'Inter';
  font-size: 1.5vw;
  font-weight: bold;
  color: #333;
}

.image {
  flex: 1.3;
}

.image img {
  width: 100%;
  height: auto;
  display: block;
}


.form-container {
  margin: 0;
  font-family: 'Poppins';
}

.form-group {
  margin: 0.8vw 0;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-size: 1.3vw;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="date"] {
  width: 100%;
  padding: 0.5vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.3vw;
  font-family: 'Poppins';
}

input[type="checkbox"] {
  margin-right: 0.5em;
}

.form-checkbox {
  display: flex;
  align-items: center;
}

.form-checkbox input[type="checkbox"] {
  margin-right: 0.5em;
}

.form-checkbox label {
  margin: 0; /* Asegura que no haya margen adicional en la etiqueta */
}

.btn {
  width: 100%;
  padding: 1em;
  background-color: #8D323E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.btn:hover {
  background-color: #AB8A8E;
  color: #8D323E;
  font-weight: bold;
}

.error-message {
  color: red;
  margin-top: 1em;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 2em;
}

.form-row .form-group {
  flex: 1;
}

</style>