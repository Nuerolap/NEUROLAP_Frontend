import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      formData: {
        nombre: '',
        apellido: '',
        ciudad: '',
        cedula: '',
        fechaNacimiento: '',
        estadoCivil: '',
        gradoInstruccion: '',
        profesion: '',
        telefono1: '',
        telefono2: '',
        direccion: '',
        aceptarTerminos: false
      }
    };
  },
  mutations: {
    updateNombre(state, value) {
      state.formData.nombre = value;
    },
    updateApellido(state, value) {
      state.formData.apellido = value;
    },
    updateCiudad(state, value) {
      state.formData.ciudad = value;
    },
    updateCedula(state, value) {
      state.formData.cedula = value;
    },
    updateFechaNacimiento(state, value) {
      state.formData.fechaNacimiento = value;
    },
    updateEstadoCivil(state, value) {
      state.formData.estadoCivil = value;
    },
    updateGradoInstruccion(state, value) {
      state.formData.gradoInstruccion = value;
    },
    updateProfesion(state, value) {
      state.formData.profesion = value;
    },
    updateTelefono1(state, value) {
      state.formData.telefono1 = value;
    },
    updateTelefono2(state, value) {
      state.formData.telefono2 = value;
    },
    updateDireccion(state, value) {
      state.formData.direccion = value;
    },
    updateAceptarTerminos(state, value) {
      state.formData.aceptarTerminos = value;
    }
  },
  actions: {
    updateFormData({ commit }, formData) {
      commit('updateFormData', formData);
    }
  },
  getters: {
    getFormData(state) {
      return state.formData;
    }
  }
});

export default store;
