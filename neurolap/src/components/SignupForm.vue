<template>
  <div class="signup-container">
    <h2>Registrarse</h2>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="username">Usuario:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div class="form-group">
        <label for="passwordConfirm">Confirmar Contraseña:</label>
        <input v-model="passwordConfirm" type="password" id="passwordConfirm" required />
      </div>
      <div class="form-group">
        <label for="rol">Rol:</label>
        <select v-model="rol" id="rol" required>
          <option value="" disabled>Selecciona un rol</option>
          <option value="paciente">Paciente</option>
          <option value="familiar">Profesional</option>
        </select>
      </div>
      <button type="submit" class="btn">Registrarse</button>
    </form>
    <p class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { signup } from '../services/pocketbase';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      rol: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleSignup() {
      if (this.password !== this.passwordConfirm) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      try {
        const response = await signup(
          this.username,
          this.email,
          true, // emailVisibility siempre es true para permitir mostrar el email
          this.password,
          this.passwordConfirm,
          this.rol
        );
        console.log('Registro exitoso:', response);
        this.$router.push({
          path: '/person-registration',
          query: { id: response.id, role: this.rol }
        })
        //this.$router.push('/'); // Redirige a la página principal
      } catch (error) {
        this.errorMessage = 'Error al registrarse. Intenta de nuevo.';
        console.error('Error:', error);
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  width: 40%;
  margin: 4vw auto;
  padding: 1vw 5vw;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Inter';
}

.signup-container h2 {
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

input,
select {
  width: 100%;
  padding: 1vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.8vw;
  font-family: 'Inter';
  background-color: #fff;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  outline: none;
}

input:focus,
select:focus {
  border-color: #8D323E;
  box-shadow: 0 0 3px rgba(141, 50, 62, 0.8);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23666' d='M10 12l-5-5h10l-5 5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1.5vw;
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
</style>
