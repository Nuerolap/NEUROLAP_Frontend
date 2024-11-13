<template>
    <div class="patient-registration-container">
      <h2>Registro de Paciente</h2>
      <form @submit.prevent="handlePatientRegistration">
        <!-- Información básica -->
        <div class="form-group">
          <label for="ciudad_natal">Ciudad Natal:</label>
          <input v-model="ciudad_natal" type="text" id="ciudad_natal" required />
        </div>
        <div class="form-group">
          <label for="profesion">Profesión:</label>
          <input v-model="profesion" type="text" id="profesion" required />
        </div>
        <div class="form-group">
          <label for="estado_civil">Estado Civil:</label>
          <select v-model="estado_civil" id="estado_civil" required>
            <option value="Solter@">Solter@</option>
            <option value="Casad@">Casad@</option>
            <option value="Divorciad@">Divorciad@</option>
          </select>
        </div>
        <div class="form-group">
          <label for="grado_instruccion">Grado de Instrucción:</label>
          <select v-model="grado_instruccion" id="grado_instruccion" required>
            <option value="Primario">Primario</option>
            <option value="Secundario">Secundario</option>
            <option value="Universitario">Universitario</option>
            <option value="Post Universitario">Post Universitario</option>
          </select>
        </div>
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input v-model="direccion" type="text" id="direccion" required />
        </div>
        <div class="form-group">
          <label for="mano_escribe">Mano con la que Escribe:</label>
          <select v-model="mano_escribe" id="mano_escribe" required>
            <option value="Izquierda">Izquierda</option>
            <option value="Derecha">Derecha</option>
          </select>
        </div>
        <div class="form-group">
          <label for="ocupacion">Ocupación:</label>
          <input v-model="ocupacion" type="text" id="ocupacion" required />
        </div>
        <div class="form-group">
          <label for="nro_hijos">Número de Hijos:</label>
          <input v-model="nro_hijos" type="number" id="nro_hijos" min="0" required />
        </div>
        <div class="form-group">
          <label for="idioma_materno">Idioma Materno:</label>
          <select v-model="idioma_materno" id="idioma_materno" > <!-- required -->
            <option v-for="idioma in idiomasDisponibles" :key="idioma.id" :value="idioma.idioma">
              {{ idioma.idioma }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="observacion">Observación:</label>
          <textarea v-model="observacion" id="observacion"></textarea>
        </div>
  
        <!-- Idiomas -->
        <div class="form-group">
          <h3>Idiomas Adicionales</h3>
          <label for="idiomas">Selecciona los Idiomas:</label>
          <select id="idiomas" multiple class="multi-select">
            <option
              v-for="idioma in filteredIdiomas"
              :key="idioma.id"
              :value="idioma.id"
              @click="addLanguage(idioma.id)"
            >
              {{ idioma.idioma }}
            </option>
          </select>
        </div>

        <!-- Idiomas Seleccionados -->
        <div class="form-group">
          <h3>Idiomas Seleccionados</h3>
          <div v-for="idiomaId in idiomasSeleccionados" :key="idiomaId" class="form-group">
            <p>{{ idiomasDisponibles.find((idioma) => idioma.id === idiomaId).idioma }}</p>
            <button type="button" @click="removeLanguage(idiomaId)" class="btn-danger">Eliminar</button>
          </div>
        </div>

        <!-- Condiciones Médicas -->
        <div class="form-group">
          <h3>Condiciones Médicas</h3>
          <button type="button" @click="addMedicalCondition" class="btn">Agregar Condición Médica</button>
          <div v-for="(condition, index) in medicalConditions" :key="index" class="form-group">
            <input v-model="condition.enfermedad" type="text" placeholder="Enfermedad" required />
            <input v-model="condition.medicacion" type="text" placeholder="Medicación" required />
            <input v-model="condition.fecha_inicio" type="date" required />
            <textarea v-model="condition.observacion" placeholder="Observación"></textarea>
            <button type="button" @click="removeMedicalCondition(index)" class="btn-danger">Eliminar</button>
          </div>
        </div>
  
        <!-- Convivientes -->
        <div class="form-group">
          <h3>Convivientes</h3>
          <button type="button" @click="addConviviente" class="btn">Agregar Conviviente</button>
          <div v-for="(conviviente, index) in convivientes" :key="index" class="form-group">
            <input v-model="conviviente.nombre" type="text" placeholder="Nombre" required />
            <textarea v-model="conviviente.relacion" placeholder="Relación"></textarea>
            <button type="button" @click="removeConviviente(index)" class="btn-danger">Eliminar</button>
          </div>
        </div>
  
        <!-- Dificultades de Memoria -->
        <div class="form-group">
          <h3>Dificultades de Memoria</h3>
          <button type="button" @click="addMemoryDifficulty" class="btn">Agregar Dificultad</button>
          <div v-for="(difficulty, index) in memoryDifficulties" :key="index" class="form-group">
            <select v-model="difficulty.tipo" required>
              <option value="Diagnosticada">Diagnosticada</option>
              <option value="Observada">Manifiesta</option>
            </select>
            <textarea v-model="difficulty.descripcion" placeholder="Descripción"></textarea>
            <button type="button" @click="removeMemoryDifficulty(index)" class="btn-danger">Eliminar</button>
          </div>
        </div>
  
        <!-- Enfermedades o Intervenciones -->
        <div class="form-group">
          <h3>Enfermedades o Intervenciones Quirurgicas</h3>
          <button type="button" @click="addIntervention" class="btn">Agregar Enfermedad o Intervención</button>
          <div v-for="(intervention, index) in interventions" :key="index" class="form-group">
            <textarea v-model="intervention.descripcion" placeholder="Descripción"></textarea>
            <button type="button" @click="removeIntervention(index)" class="btn-danger">Eliminar</button>
          </div>
        </div>
  
        <button type="submit" class="btn">Registrar Paciente</button>
      </form>
      <p class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import {
    createPatient,
    createMedicalCondition,
    createConviviente,
    createMemoryDifficulty,
    createInterventionDisease,
    listLanguages,
  } from "../services/pocketbase";
  
  export default {
    data() {
      return {
        ciudad_natal: "",
        profesion: "",
        estado_civil: "Solter@",
        grado_instruccion: "Primario",
        direccion: "",
        mano_escribe: "Derecha",
        ocupacion: "",
        nro_hijos: 0,
        idioma_materno: "",
        observacion: "",
        medicalConditions: [],
        convivientes: [],
        memoryDifficulties: [],
        interventions: [],
        idiomasDisponibles: [],
        idiomasSeleccionados: [],
        errorMessage: "",
      };
    },
    async created() {
      try {
        this.idiomasDisponibles = await listLanguages();
      } catch (error) {
        console.error("Error al cargar idiomas:", error);
      }
    },
    computed: {
      filteredIdiomas() {
        return this.idiomasDisponibles.filter((idioma) => idioma.id !== this.idioma_materno);
      },
    },
    methods: {
      addLanguage(id) {
        if (!this.idiomasSeleccionados.includes(id)) {
          this.idiomasSeleccionados.push(id);
        }
      },
      removeLanguage(idiomaId) {
        this.idiomasSeleccionados = this.idiomasSeleccionados.filter((idioma) => idioma !== idiomaId);
      },
      addMedicalCondition() {
        this.medicalConditions.push({
          enfermedad: "",
          medicacion: "",
          fecha_inicio: "",
          observacion: "",
        });
      },
      removeMedicalCondition(index) {
        this.medicalConditions.splice(index, 1);
      },
      addConviviente() {
        this.convivientes.push({ nombre: "", relacion: "" });
      },
      removeConviviente(index) {
        this.convivientes.splice(index, 1);
      },
      addMemoryDifficulty() {
        this.memoryDifficulties.push({ tipo: "Diagnosticada", descripcion: "" });
      },
      removeMemoryDifficulty(index) {
        this.memoryDifficulties.splice(index, 1);
      },
      addIntervention() {
        this.interventions.push({ descripcion: "" });
      },
      removeIntervention(index) {
        this.interventions.splice(index, 1);
      },
      async handlePatientRegistration() {
        const personaId = this.$route.query.personaId;
        if (!personaId) {
          this.errorMessage = "Error: Persona no encontrada.";
          return;
        }
  
        try {
          const patient = await createPatient(
            this.ciudad_natal,
            this.profesion,
            this.estado_civil,
            this.grado_instruccion,
            this.direccion,
            this.mano_escribe,
            this.ocupacion,
            this.nro_hijos,
            this.idioma_materno,
            this.observacion,
            personaId,
            this.idiomasSeleccionados
          );
  
          for (const condition of this.medicalConditions) {
            await createMedicalCondition(
              condition.enfermedad,
              condition.medicacion,
              condition.fecha_inicio,
              condition.observacion,
              patient.id
            );
          }
  
          for (const conviviente of this.convivientes) {
            await createConviviente(conviviente.nombre, patient.id);
          }
  
          for (const difficulty of this.memoryDifficulties) {
            await createMemoryDifficulty(difficulty.descripcion, patient.id, difficulty.tipo);
          }
  
          for (const intervention of this.interventions) {
            await createInterventionDisease(intervention.descripcion, patient.id);
          }
  
          this.$router.push("/");
          console.log("Registro de paciente exitoso.");
        } catch (error) {
          this.errorMessage = "Error al registrar el paciente. Intenta de nuevo.";
          console.error("Error:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos consistentes con los otros formularios */
  .patient-registration-container {
    width: 50%;
    margin: 4vw auto;
    padding: 1vw 5vw;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Inter', sans-serif;
  }
  
  .patient-registration-container h2 {
    font-size: 3.5vw;
    color: #800000;
    text-align: center;
    margin-bottom: 2vw;
  }
  
  .form-group {
    margin: 1.5vw 0;
  }
  
  label {
    display: block;
    margin-bottom: 0.5vw;
    font-weight: bold;
    font-size: 1.5vw;
    color: #333;
  }
  
  input,
  select,
  textarea {
    width: 100%;
    padding: 1vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.5vw;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    outline: none;
  }
  
  textarea {
    resize: none;
  }
  
  input:focus,
  select:focus,
  textarea:focus {
    border-color: #8D323E;
    box-shadow: 0 0 3px rgba(141, 50, 62, 0.8);
  }
  
  .multi-select {
    width: 100%;
    height: auto;
    padding: 1vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.5vw;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    outline: none;
    overflow-y: auto;
    min-height: 5vw;
  }
  
  .multi-select:focus {
    border-color: #8D323E;
    box-shadow: 0 0 3px rgba(141, 50, 62, 0.8);
  }
  
  .btn {
    width: 100%;
    padding: 1vw;
    background-color: #8D323E;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.5vw;
    margin-top: 1vw;
  }
  
  .btn:hover {
    background-color: #AB8A8E;
    color: #8D323E;
    font-weight: bold;
  }
  
  .error-message {
    color: red;
    font-size: 1.5vw;
    margin-top: 1.5vw;
    text-align: center;
  }
  </style>