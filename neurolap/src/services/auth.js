import axios from 'axios';

const API_URL = 'http://localhost:8000';  // URL del backend FastAPI

// Función para registrar un nuevo usuario
export const signup = (email, password, nombre, nivelDeUsuario) => {
  return axios.post(`${API_URL}/register`, {
    email: email,
    password: password,
    nombre: nombre,
    nivelDeUsuario: nivelDeUsuario
  });
};

export const login = (email, password) => {
  const formData = new FormData();
  formData.append('username', email);  // FastAPI espera "username" en lugar de "email"
  formData.append('password', password);

  return axios.post(`${API_URL}/login`, formData);
};
