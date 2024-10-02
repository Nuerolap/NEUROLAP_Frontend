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

// Función para iniciar sesión
export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, {
    username: email,  
    password: password
  });
};
