<template>
  <div class="login-container">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
    <p class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { login } from '../services/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await login(this.email, this.password);
        console.log('Login exitoso:', response.data);
        console.log('registro: ', response.data.cu)
        // Guardar el nombre del usuario en localStorage
        localStorage.setItem('username', response.data.nombre);

        // Redirigir a la página principal
        this.$router.push('/');
      } catch (error) {
        this.errorMessage = 'Error al iniciar sesión. Revisa tus credenciales.';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 50%;
  margin: 4vw auto;
  padding: 3vw 5vw;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Inter';
}


.login-container h2 {
  font-size: 5vw;
  color: #800000;
}

.form-group {
  margin: 2vw 0;
}

label {
  display: block;
  margin-bottom: 3vw;
  font-weight: bold;
  font-size: 2.5vw;
}

input {
  width: 100%;
  padding: 1vw;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 2vh;
  background-color: #8D323E;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2.5vw;
}

.btn:hover {
  background-color: #AB8A8E;
  color: #8D323E;
  font-weight: bold;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
