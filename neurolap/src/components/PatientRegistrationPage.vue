<template>
  <div class="patient-registration-container">
    <h2>Registro de Paciente</h2>

    <!-- Selección o registro de nuevo -->
    <div v-if="!showForm">
      <div class="form-group">
        <label for="selectedPersona">Seleccione la Persona:</label>
        <select v-model="selectedPersona" id="selectedPersona">
          <option value="" disabled>-- Elija una persona --</option>
          <option v-for="p in personas" :key="p.id" :value="p.id">
            {{ p.expand.persona.apellidos }}, {{ p.expand.persona.nombres }} (CI: {{ p.expand.persona.ci }})
          </option>
        </select>
      </div>
      <div class="form-group buttons">
        <button class="btn" @click="handleContinue" :disabled="!selectedPersona">
          Continuar
        </button>
        <button class="btn" @click="showForm = true">
          Agregar Nuevo
        </button>
      </div>
    </div>

    <form v-else @submit.prevent="handlePatientRegistration">
      <!-- Campos para registrar nuevo paciente -->
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
        <select v-model="idioma_materno" id="idioma_materno" required>
          <option v-for="idioma in idiomasDisponibles" :key="idioma.id" :value="idioma.idioma">
            {{ idioma.idioma }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="observacion">Observación:</label>
        <textarea v-model="observacion" id="observacion"></textarea>
      </div>

      <!-- Idiomas Adicionales -->
      <div class="form-group">
        <h3>Idiomas Adicionales</h3>
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
        <div v-for="idiomaId in idiomasSeleccionados" :key="idiomaId" class="selected-language">
          <p>{{ idiomasDisponibles.find(i => i.id === idiomaId).idioma }}</p>
          <button type="button" @click="removeLanguage(idiomaId)" class="btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <!-- Condiciones Médicas -->
      <div class="form-group">
        <h3>Condiciones Médicas</h3>
        <button type="button" @click="addMedicalCondition" class="btn">Agregar Condición Médica</button>
        <div v-for="(condition, idx) in medicalConditions" :key="idx" class="medical-condition">
          <input v-model="condition.enfermedad" type="text" placeholder="Enfermedad" required />
          <input v-model="condition.medicacion" type="text" placeholder="Medicación" required />
          <input v-model="condition.fecha_inicio" type="date" required />
          <textarea v-model="condition.observacion" placeholder="Observación"></textarea>
          <button type="button" @click="removeMedicalCondition(idx)" class="btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <!-- Convivientes -->
      <div class="form-group">
        <h3>Convivientes</h3>
        <button type="button" @click="addConviviente" class="btn">Agregar Conviviente</button>
        <div v-for="(conv, idx) in convivientes" :key="idx" class="conviviente">
          <input v-model="conv.nombre" type="text" placeholder="Nombre" required />
          <textarea v-model="conv.relacion" placeholder="Relación"></textarea>
          <button type="button" @click="removeConviviente(idx)" class="btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <!-- Dificultades de Memoria -->
      <div class="form-group">
        <h3>Dificultades de Memoria</h3>
        <button type="button" @click="addMemoryDifficulty" class="btn">Agregar Dificultad</button>
        <div v-for="(diff, idx) in memoryDifficulties" :key="idx" class="memory-difficulty">
          <select v-model="diff.tipo" required>
            <option value="Diagnosticada">Diagnosticada</option>
            <option value="Observada">Observada</option>
          </select>
          <textarea v-model="diff.descripcion" placeholder="Descripción"></textarea>
          <button type="button" @click="removeMemoryDifficulty(idx)" class="btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <!-- Enfermedades / Intervenciones -->
      <div class="form-group">
        <h3>Enfermedades o Intervenciones Quirúrgicas</h3>
        <button type="button" @click="addIntervention" class="btn">Agregar Entrada</button>
        <div v-for="(iv, idx) in interventions" :key="idx" class="intervention">
          <textarea v-model="iv.descripcion" placeholder="Descripción"></textarea>
          <button type="button" @click="removeIntervention(idx)" class="btn-danger">
            Eliminar
          </button>
        </div>
      </div>

      <button type="submit" class="btn">Registrar Paciente</button>
    </form>

    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import pb, { listPatients, listLanguages } from "../services/pocketbase";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      personas: [],
      selectedPersona: "",
      showForm: false,
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
      idiomasDisponibles: [],
      idiomasSeleccionados: [],
      medicalConditions: [],
      convivientes: [],
      memoryDifficulties: [],
      interventions: [],
      errorMessage: "",
    };
  },
  async created() {
    try {
      this.personas = await listPatients();
      this.idiomasDisponibles = await listLanguages();
    } catch (error) {
      console.error("Error al cargar datos iniciales:", error);
      this.errorMessage = "Error al cargar datos iniciales.";
    }
  },
  computed: {
    filteredIdiomas() {
      return this.idiomasDisponibles.filter(i => i.id !== this.idioma_materno);
    }
  },
  methods: {
    addLanguage(id) {
      if (!this.idiomasSeleccionados.includes(id)) this.idiomasSeleccionados.push(id);
    },
    removeLanguage(id) {
      this.idiomasSeleccionados = this.idiomasSeleccionados.filter(i => i !== id);
    },
    addMedicalCondition() {
      this.medicalConditions.push({ enfermedad: '', medicacion: '', fecha_inicio: '', observacion: '' });
    },
    removeMedicalCondition(idx) {
      this.medicalConditions.splice(idx, 1);
    },
    addConviviente() {
      this.convivientes.push({ nombre: '', relacion: '' });
    },
    removeConviviente(idx) {
      this.convivientes.splice(idx, 1);
    },
    addMemoryDifficulty() {
      this.memoryDifficulties.push({ tipo: 'Diagnosticada', descripcion: '' });
    },
    removeMemoryDifficulty(idx) {
      this.memoryDifficulties.splice(idx, 1);
    },
    addIntervention() {
      this.interventions.push({ descripcion: '' });
    },
    removeIntervention(idx) {
      this.interventions.splice(idx, 1);
    },
    handleContinue() {
      Cookies.set('pacienteId', this.selectedPersona);
      this.$router.push({ path: '/edm', query: { pacienteId: this.selectedPersona } });
    },
    async handlePatientRegistration() {
      try {
        const payload = {
          ciudad_natal: this.ciudad_natal,
          profesion: this.profesion,
          estado_civil: this.estado_civil,
          grado_instruccion: this.grado_instruccion,
          direccion: this.direccion,
          mano_escribe: this.mano_escribe,
          ocupacion: this.ocupacion,
          nro_hijos: this.nro_hijos,
          idioma_materno: this.idioma_materno,
          observacion: this.observacion,
          idiomas: this.idiomasSeleccionados
        };
        const patient = await pb.collection('paciente').create(payload);
        for (const cond of this.medicalConditions) {
          await pb.collection('condicion_medica').create({ ...cond, paciente: patient.id });
        }
        for (const conv of this.convivientes) {
          await pb.collection('conviviente').create({ conviviente: conv.nombre, paciente: patient.id });
        }
        for (const diff of this.memoryDifficulties) {
          await pb.collection('dificultad_memoria').create({ dificultad_memoria: diff.descripcion, tipo_identificacion: diff.tipo, paciente: patient.id });
        }
        for (const iv of this.interventions) {
          await pb.collection('enfermedad_intervencion').create({ enfermedad_intervencion: iv.descripcion, paciente: patient.id });
        }
        Cookies.set('pacienteId', patient.id);
        this.$router.push({ path: '/edm', query: { pacienteId: patient.id } });
      } catch (error) {
        console.error("Error al registrar paciente:", error);
        this.errorMessage = "Error al registrar paciente.";
      }
    }
  }
};
</script>

<style scoped>
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

.multi-select {
  min-height: 5vw;
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