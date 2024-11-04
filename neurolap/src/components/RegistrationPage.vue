<template>
  <div class="registration">
    <div class="content">
      <div class="image">
        <img src="@/assets/registration-image.png" alt="Registro Neurolap">
      </div>
      <div class="text">
        <h1>¡Inicia tu proceso de Evaluación!</h1>
        <p>Registra los siguientes datos.</p>
        <div class="form-container">
          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">Nombre(s)</label>
                <input v-model="nombre" type="text" id="nombre" required />
              </div>
              <div class="form-group">
                <label for="apellido">Apellido(s)</label>
                <input v-model="apellido" type="text" id="apellido" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="ciudad">Ciudad Natal</label>
                <input v-model="ciudad" type="text" id="ciudad" required />
              </div>
              <div class="form-group">
                <label for="cedula">Cédula de Identidad</label>
                <input v-model="cedula" type="text" id="cedula" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="fechaNacimiento">Fecha de Nacimiento</label>
                <input v-model="fechaNacimiento" type="date" id="fechaNacimiento" required />
              </div>
              <div class="form-group">
                <label for="estadoCivil">Estado Civil</label>
                <input v-model="estadoCivil" type="text" id="estadoCivil" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="gradoInstruccion">Grado de Instrucción</label>
                <input v-model="gradoInstruccion" type="text" id="gradoInstruccion" required />
              </div>
              <div class="form-group">
                <label for="profesion">Profesión/Ocupación</label>
                <input v-model="profesion" type="text" id="profesion" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="telefono1">Teléfono de Contacto 1</label>
                <input v-model="telefono1" type="tel" id="telefono1" required />
              </div>
              <div class="form-group">
                <label for="telefono2">Teléfono de Contacto 2</label>
                <input v-model="telefono2" type="tel" id="telefono2" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="direccion">Dirección</label>
                <input v-model="direccion" type="text" id="direccion" required />
              </div>
            </div>
            <div class="form-group form-checkbox">
              <input v-model="aceptarTerminos" type="checkbox" id="terminos" required />
              <label for="terminos">Estoy de acuerdo con los <a href="#">Términos</a> y <a href="#">Política de privacidad</a></label>
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
export default {
  name: 'RegistrationPage',
  data() {
    return {
      nombre: '',
      apellido: '',
      ciudad: '',
      cedula: '',
      fechaNacimiento: '',
      estadoCivil: '',
      gradoInstruccion: '',
      profesion: '',
      telefono1: '',
      telefono2: '',
      direccion: '',
      aceptarTerminos: false,
      errorMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      // Aquí puedes manejar el envío del formulario
      console.log('Formulario enviado');
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