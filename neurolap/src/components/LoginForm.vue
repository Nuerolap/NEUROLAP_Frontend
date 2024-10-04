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
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #369e6f;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
