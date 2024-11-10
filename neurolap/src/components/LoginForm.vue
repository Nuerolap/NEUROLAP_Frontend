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
      <button type="submit" class="btn">Iniciar Sesión</button>
    </form>
    <p class="error-message">{{ errorMessage }}</p>
    <p class="register-link">¿No tienes una cuenta? <router-link to="/signup">Registrate</router-link></p>
  </div>
</template>

<script>
import {authWithPassword} from '../services/pocketbase';

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
        const authData = await authWithPassword(this.email, this.password);
        console.log(authData);
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
  width: 40%;
  margin: 4vw auto;
  padding: 1vw 5vw;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Inter';
}


.login-container h2 {
  font-size: 3.5vw;
  color: #800000;
  text-align: center;
}

.form-group {
  margin: 2vw 0;
}

label {
  display: block;
  margin-bottom: 1vw;
  font-weight: bold;
  font-size: 2vw;
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
  margin-top: 2vw;
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

.register-link {
  margin-top: 2vw;
  font-size: 2vw;
  text-align: center;
}

.register-link a {
  color: #8D323E;
  text-decoration: none;
  font-weight: bold;
}

.register-link a:hover {
  text-decoration: underline;
}

</style>
