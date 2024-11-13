<template>
  <div>
    <h1>Grabadora de Audio</h1>
    <button @click="iniciarGrabacion" :disabled="grabando">Iniciar Grabación</button>
    <button @click="detenerGrabacion" :disabled="!grabando">Detener Grabación</button>
    <audio v-if="audioUrl" :src="audioUrl" controls></audio>

    <div v-if="result">
      <h3>Transcripción:</h3>
      <p>{{ result.transcripcion }}</p>

      <h3>Resultados de la Evaluación:</h3>
      <ul>
        <li><strong>Animales:</strong> {{ result.resultados.animales }}</li>
        <li><strong>Palabras que comienzan con "F":</strong> {{ result.resultados.palabras_f }}</li>
        <li><strong>Resultado Combinado:</strong> {{ result.resultados.combinado }}</li>
        <li><strong>Conteo de Animales:</strong> {{ result.resultados.conteo_animales }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grabando: false,
      mediaRecorder: null,
      audioChunks: [],
      audioUrl: null,
      result: null, // Para almacenar los resultados de la transcripción y evaluación
    };
  },
  methods: {
    async iniciarGrabacion() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        
        this.mediaRecorder.ondataavailable = (event) => {
          this.audioChunks.push(event.data);
        };

        this.mediaRecorder.onstop = this.guardarAudio;
        
        this.audioChunks = [];
        this.mediaRecorder.start();
        this.grabando = true;
        console.log("Grabación iniciada");
      } catch (error) {
        console.error("Error al acceder al micrófono:", error);
      }
    },
    detenerGrabacion() {
      if (this.mediaRecorder && this.grabando) {
        this.mediaRecorder.stop();
        this.grabando = false;
        console.log("Grabación detenida");
      }
    },
    guardarAudio() {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
      const formData = new FormData();
      formData.append("file", audioBlob, "grabacion.wav");

      fetch("http://127.0.0.1:8000/api/upload-audio", {
        method: "POST",
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log("Archivo de audio enviado exitosamente:", data);
          this.audioUrl = URL.createObjectURL(audioBlob);
          this.result = data; // Guardar la transcripción y resultados para mostrarlos en el frontend
        })
        .catch(error => {
          console.error("Error al enviar el archivo de audio:", error);
        });
    }
  }
};
</script>

<style scoped>
button {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}
</style>
