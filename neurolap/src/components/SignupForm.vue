<template>
    <div>
      <h2>Registrarse</h2>
      <form @submit.prevent="handleSignup">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <div>
          <label for="nombre">Nombre:</label>
          <input v-model="nombre" type="text" id="nombre" required />
        </div>
       
        <button type="submit">Registrarse</button>
      </form>
      <p>{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { signup } from '../services/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        nombre: '',
        nivelDeUsuario: '',
        errorMessage: ''
      };
    },
    methods: {
      async handleSignup() {
        try {
          const response = await signup(this.email, this.password, this.nombre, "cliente");
          console.log('Registro exitoso:', response.data);
        } catch (error) {
          this.errorMessage = 'Error al registrarse. Intenta de nuevo.';
        }
      }
    }
  };
  </script>
  