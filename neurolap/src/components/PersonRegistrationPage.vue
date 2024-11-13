<template>
    <div class="registration-container">
        <h2>Registro de Información General</h2>
        <form @submit.prevent="handleRegistration">
            <div class="form-group">
                <label for="ci">Cédula de Identidad:</label>
                <input v-model="ci" type="text" id="ci" required />
            </div>
            <div class="form-group">
                <label for="nombres">Nombre(s):</label>
                <input v-model="nombres" type="text" id="nombres" required />
            </div>
            <div class="form-group">
                <label for="apellidos">Apellido(s):</label>
                <input v-model="apellidos" type="text" id="apellidos" required />
            </div>
            <div class="form-group">
                <label for="genero">Género:</label>
                <select v-model="genero" id="genero" required>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <div class="form-group">
                <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
                <input v-model="fecha_nacimiento" type="date" id="fecha_nacimiento" required />
            </div>
            <div class="form-group">
                <label for="telefono_principal">Teléfono Principal:</label>
                <input v-model="telefono_principal" type="tel" id="telefono_principal" required />
            </div>
            <div class="form-group">
                <label for="telefono_secundario">Teléfono Secundario:</label>
                <input v-model="telefono_secundario" type="tel" id="telefono_secundario" />
            </div>
            <div v-if="isFamiliar" class="form-group">
                <label for="paciente">Selecciona el Paciente:</label>
                <select v-model="pacienteSeleccionado" id="paciente" > <!-- required -->
                    <option v-for="paciente in pacientes" :value="paciente.id" :key="paciente.id">
                        {{ paciente.expand.persona.nombres }} {{ paciente.expand.persona.apellidos }}
                    </option>
                </select>
            </div>
            <!-- <div v-if="isFamiliar" class="form-group">
                <label for="parentesco">Selecciona el Parentesco:</label>
                <select v-model="tipoParentesco" id="parentesco" required>
                    <option value="Padre">Padre</option>
                    <option value="Madre">Madre</option>
                    <option value="Hermano">Hermano</option>
                    <option value="Hijo">Hijo</option>
                    <option value="Otro">Otro</option>
                </select>
            </div> -->
            <button type="submit" class="btn">Registrar Información</button>
        </form>
        <p class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
import { createPerson, createRelative, createPatientRelativeRelationship, listPatients } from "../services/pocketbase";

export default {
    data() {
        return {
            ci: "",
            nombres: "",
            apellidos: "",
            genero: "Masculino",
            fecha_nacimiento: "",
            telefono_principal: "",
            telefono_secundario: "",
            errorMessage: "",
            isFamiliar: false,
            pacientes: [],
        };
    },
    async created() {
        if (this.$route.query.role === "familiar") {
            this.isFamiliar = true;
            try {
                this.pacientes = await listPatients();
                console.log("Pacientes cargados:", this.pacientes);
            } catch (error) {
                console.error("Error al cargar los pacientes:", error);
            }
        }
    },
    methods: {
        async handleRegistration() {
            const id = this.$route.query.id;
            if (!id) {
                this.errorMessage = "Error: Usuario no encontrado.";
                return;
            }

            try {
                const persona = await createPerson(
                    this.ci,
                    this.nombres,
                    this.apellidos,
                    this.genero,
                    this.fecha_nacimiento,
                    this.telefono_principal,
                    this.telefono_secundario,
                    id
                );
                if (this.isFamiliar) {
                    const familiar = await createRelative(persona.id);
                    await createPatientRelativeRelationship(this.pacienteSeleccionado, familiar.id, "Otro");
                    this.$router.push("/");
                } else {
                    this.$router.push({
                        path: '/patient-registration',
                        query: { personaId: persona.id }
                    })
                }

                console.log("Registro exitoso");
            } catch (error) {
                this.errorMessage = "Error al registrar la información. Intenta de nuevo.";
                console.error("Error:", error);
            }
        },
    },
};
</script>

<style scoped>
.registration-container {
    width: 40%;
    margin: 4vw auto;
    padding: 1vw 5vw;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Inter', sans-serif;
}

.registration-container h2 {
    font-size: 3.5vw;
    color: #800000;
    text-align: center;
    margin-bottom: 2vw;
}

.form-group {
    margin: 2vw 0;
}

label {
    display: block;
    margin-bottom: 1vw;
    font-weight: bold;
    font-size: 2vw;
    color: #333;
}

input,
select {
    width: 100%;
    padding: 1vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.8vw;
    font-family: 'Inter', sans-serif;
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
    transition: background-color 0.3s ease, color 0.3s ease;
}

.btn:hover {
    background-color: #AB8A8E;
    color: #8D323E;
    font-weight: bold;
}

.error-message {
    color: red;
    font-size: 1.5vw;
    margin-top: 1.5vw;
    text-align: center;
}
</style>