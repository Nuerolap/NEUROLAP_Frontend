<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{{ errorMessage }}</p>
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
        } catch (error) {
          this.errorMessage = 'Error al iniciar sesión. Revisa tus credenciales.';
        }
      }
    }
  };
  </script>
  