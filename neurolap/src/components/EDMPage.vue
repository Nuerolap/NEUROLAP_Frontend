<template>
  <div class="edm">
    <div class="header">
      <h1>EVALUACIÓN DIFERENCIAL DE LA MEMORIA</h1>
    </div>
    <div class="underline"></div>
    <div class="text">
      <p>
        En este portal, usted encontrará un protocolo que mide el estado de los distintos tipos de memoria, por
        lo que recibe el nombre de “Evaluación Diferencial de la Memoria”. Este instrumento consta de 34 ítems
        seleccionados de 14 test de memoria, estandarizados de habla hispana.
      </p>
    </div>
    <div class="content">
      <form @submit.prevent="handleSubmit">
        <div v-for="question in questions" :key="question.id" class="section">
          <h2>{{ question.orden }} - {{ question.pregunta }}</h2>
          <p v-if="question.instrucciones" v-html="question.instrucciones"></p>

          <!-- File upload -->
          <div v-if="isFileUpload(question)" class="form-group">
            <label :for="`file-${question.id}`">Subir archivo</label>
            <input type="file" :id="`file-${question.id}`" @change="handleFileChange($event, question.id)" required />
          </div>

          <!-- Sí/No -->
          <div v-else-if="isObject(question.opciones) && isBinary(question.opciones)" class="form-group">
            <label>{{ question.pregunta }}</label>
            <label>
              <input type="radio" :name="`q-${question.id}`" value="Sí" v-model="answers[question.id]" required /> Sí
            </label>
            <label>
              <input type="radio" :name="`q-${question.id}`" value="No" v-model="answers[question.id]" /> No
            </label>
          </div>

          <!-- Campos JSON -->
          <div v-else-if="isObject(question.opciones)" class="form-group">
            <div v-for="(val, label) in question.opciones" :key="label">
              <label :for="`q-${question.id}-${slugify(label)}`">{{ label }}</label>
              <input v-model="answers[question.id][label]" type="text" :id="`q-${question.id}-${slugify(label)}`"
                required />
            </div>
          </div>

          <!-- Array de campos -->
          <div v-else-if="Array.isArray(question.opciones)" class="form-group">
            <div v-for="(opt, idx) in question.opciones" :key="idx">
              <label :for="`q-${question.id}-${idx}`">{{ opt }}</label>
              <input v-model="answers[question.id][idx]" type="text" :id="`q-${question.id}-${idx}`" required />
            </div>
          </div>

          <!-- Campo único -->
          <div v-else class="form-group">
            <label :for="`q-${question.id}`">Respuesta</label>
            <input v-model="answers[question.id]" type="text" :id="`q-${question.id}`" required />
          </div>
        </div>

        <button type="submit" class="btn" :disabled="submitting">
          {{ submitting ? 'Enviando...' : 'Enviar' }}
        </button>
      </form>
      <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import pb from '@/services/pocketbase'
import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  data() {
    return {
      questions: [],
      answers: {},
      resultadoId: null,
      submitting: false,
      errorMessage: ''
    }
  },
  async created() {
    try {
      const testId     = '9m6r769tgnckrj1'
      const pacienteId = Cookies.get('pacienteId')
      const today      = new Date().toISOString().split('T')[0]

      // 1) Crear resultado_test inicial
      const rt = await pb.collection('resultado_test').create({
        fecha_realizacion: today,
        puntuacion_total:   0,
        interpretacion:    '',
        comentario:        '',
        test:              testId,
        paciente:          pacienteId
      })
      this.resultadoId = rt.id

      // 2) Cargar todas las preguntas
      const resp = await axios.get(
        'http://localhost:8090/api/collections/pregunta/records',
        { params: { filter: `test="${testId}"`, sort: 'orden', perPage: 50 } }
      )
      this.questions = resp.data.items.map(q => ({ ...q, opciones: q.opciones || [] }))

      // 3) Inicializar `answers` según tipo de pregunta
      this.questions.forEach(q => {
        if (this.isFileUpload(q)) {
          this.answers[q.id] = null
        } else if (this.isObject(q.opciones)) {
          // JSON-based (incluye binarias)
          this.answers[q.id] = this.isBinary(q.opciones) ? null : {}
          if (!this.isBinary(q.opciones)) {
            Object.keys(q.opciones).forEach(k => {
              this.answers[q.id][k] = ''
            })
          }
        } else if (Array.isArray(q.opciones)) {
          this.answers[q.id] = q.opciones.map(() => '')
        } else {
          // fallback texto simple
          this.answers[q.id] = ''
        }
      })
    } catch (err) {
      console.error(err)
      this.errorMessage = 'Error inicializando la evaluación.'
    }
  },
  methods: {
    isObject(v) { return v && v.constructor === Object },
    isBinary(opts) {
      const keys = Object.keys(opts)
      return keys.length === 2 && keys.includes('Cumplió') && keys.includes('No cumplió')
    },
    slugify(s) {
      return s.toString().toLowerCase()
               .replace(/\s+/g, '-')
               .replace(/[^\w-]+/g, '')
    },
    isFileUpload(q) {
      const txt = (q.pregunta || '').toLowerCase()
      return /dibujo|lámina|golpe|audio|numeral|visoespacial/.test(txt)
    },
    handleFileChange(ev, qid) {
      this.answers[qid] = ev.target.files[0]
    },
    async handleSubmit() {
      this.submitting = true
      this.errorMessage = ''

      const testId     = '9m6r769tgnckrj1'
      const pacienteId = Cookies.get('pacienteId')

      try {
        // 4) Guardar cada respuesta en PocketBase (simulando puntuación máxima)
        for (const q of this.questions) {
          let payload, score

          if (this.isFileUpload(q)) {
            const isAudio = /audio|golpe/.test(q.pregunta.toLowerCase())
            if (isAudio) {
              payload = { transcripcion:'simulada', resultado:{ animales:'verde', palabras_f:'verde', estado:'verde' } }
              score   = 10
            } else {
              payload = { ssim_index:1, puntaje:36 }
              score   = 36
            }
          } else if (this.isObject(q.opciones) && this.isBinary(q.opciones)) {
            // pregunta binaria
            payload = { respuesta: this.answers[q.id] }
            score   = 1
          } else if (this.isObject(q.opciones)) {
            // campos JSON con múltiples subpreguntas
            payload = this.answers[q.id]
            score   = Object.keys(this.answers[q.id]).length
          } else if (Array.isArray(q.opciones)) {
            // array de campos
            payload = this.answers[q.id]
            score   = this.answers[q.id].length
          } else {
            // texto simple
            payload = { respuesta: this.answers[q.id] }
            score   = 1
          }

          await pb.collection('respuesta').create({
            respuesta:      JSON.stringify(payload),
            pregunta:       q.id,
            resultado_test: this.resultadoId,
            calificacion:   score
          })
        }

        // 5) Recalcular total acumulado
        await axios.post(
          `http://localhost:8000/resultado_test/${this.resultadoId}/recalcular_total`
        )

        // 6) Validar cada pregunta con los endpoints de Pydantic
        for (const q of this.questions) {
          const isPersonal = q.orden <= 2
          const url = isPersonal
            ? 'http://localhost:8000/responder_personales'
            : 'http://localhost:8000/responder'

          // reconstruir payload de validación igual que en creación
          let respuestasParaEnviar
          if (this.isFileUpload(q)) {
            const isAudio = /audio|golpe/.test(q.pregunta.toLowerCase())
            respuestasParaEnviar = isAudio
              ? { transcripcion:'simulada', resultado:{ animales:'verde', palabras_f:'verde', estado:'verde' } }
              : { ssim_index:1, puntaje:36 }
          } else if (this.isObject(q.opciones) && this.isBinary(q.opciones)) {
            respuestasParaEnviar = { respuesta: this.answers[q.id] }
          } else if (this.isObject(q.opciones) || Array.isArray(q.opciones)) {
            respuestasParaEnviar = this.answers[q.id]
          } else {
            respuestasParaEnviar = { respuesta: this.answers[q.id] }
          }

          const body = {
            id_test:     testId,
            id_segmento: q.id,
            respuestas:  respuestasParaEnviar
          }
          if (isPersonal) {
            body.id_paciente = pacienteId
          }

          await axios.post(url, body)
        }

        // 7) Redirigir al reporte
        this.$router.push('/report')

      } catch (e) {
        console.error(e)
        this.errorMessage = 'Error al enviar respuestas.'
      } finally {
        this.submitting = false
      }
    }
  }
}
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

input[type="file"] {
  font-size: 1.3vw;
}

input[type="radio"] {
  margin-right: 0.5vw;
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
