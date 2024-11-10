import PocketBase from 'pocketbase';

const POCKETBASE_API_URL = 'http://127.0.0.1:8090';

const pb = new PocketBase(POCKETBASE_API_URL);

export default pb;

//funcion para autenticar a un usuario con email y password
export const authWithPassword = async (email, password) => {
    return await pb.collection('usuario').authWithPassword(email, password);
};

//logout
export const logout = async () => {
    return pb.authStore.clear();
};

//funcion para registrar un nuevo usuario
export const signup = async (username, email, emailVisibility, password, passwordConfirm, rol) => {
    const data = {
        "username": username,
        "email": email,
        "emailVisibility": emailVisibility,
        "password": password,
        "passwordConfirm": passwordConfirm,
        "rol": rol
    };

    return await pb.collection('usuario').create(data);
};

//crear persona
export const createPerson = async (ci, nombres, apellidos, genero, fechaNacimiento, telefonoPrincipal, telefonoSecundario, usuario) => {
    const data = {
        "ci": ci,
        "nombres": nombres,
        "apellidos": apellidos,
        "genero": genero,
        "fecha_nacimiento": fechaNacimiento,
        "telefono_principal": telefonoPrincipal,
        "telefono_secundario": telefonoSecundario,
        "usuario": usuario
    };

    return await pb.collection('persona').create(data);
}

//crear familiar
export const createRelative = async (persona) => {
    const data = {
        "persona": persona
    };

    return await pb.collection('familiar').create(data);
}

//crear paciente
export const createPatient = async (ciudad_natal, profesion, estado_civil, grado_instruccion, direccion, mano_escribe, ocupacion, nro_hijos, idioma_materno, observacion, persona, idiomas) => {
    const data = {
        "ciudad_natal": ciudad_natal,
        "profesion": profesion,
        "estado_civil": estado_civil,
        "grado_instruccion": grado_instruccion,
        "direccion": direccion,
        "mano_escribe": mano_escribe,
        "ocupacion": ocupacion,
        "nro_hijos": nro_hijos,
        "idioma_materno": idioma_materno,
        "observacion": observacion,
        "persona": persona,
        "idiomas": idiomas
    };

    console.log(data);

    return await pb.collection('paciente').create(data);
}

//crear condiciones medicas
export const createMedicalCondition = async (enfermedad, medicacion, fecha_inicio, observacion, paciente) => {
    const data = {
        "enfermedad": enfermedad,
        "medicacion": medicacion,
        "fecha_inicio": fecha_inicio,
        "observacion": observacion,
        "paciente": paciente
    };

    return await pb.collection('condicion_medica').create(data);
}

//create conviviente
export const createConviviente = async (conviviente, paciente) => {
    const data = {
        "conviviente": conviviente,
        "paciente": paciente
    };

    return await pb.collection('conviviente').create(data);
}

//create dificultad memoria
export const createMemoryDifficulty = async (dificultad_memoria, paciente, tipo_identificacion) => {
    const data = {
        "dificultad_memoria": dificultad_memoria,
        "paciente": paciente,
        "tipo_identificacion": tipo_identificacion
    };

    return await pb.collection('dificultad_memoria').create(data);
}

//create enfermedad intervencion
export const  createInterventionDisease = async (enfermedad_intervencion, paciente) => {
    const data = {
        "enfermedad_intervencion": enfermedad_intervencion,
        "paciente": paciente
    };

    return await pb.collection('enfermedad_intervencion').create(data);
}

//create patient relative relationship
export const createPatientRelativeRelationship = async (paciente, familiar, tipo_parentesco) => {
    const data = {
        "paciente": paciente,
        "familiar": familiar,
        "tipo_parentesco": tipo_parentesco
    };

    return await pb.collection('paciente_familiar').create(data);
}

//listado de idiomas
export const listLanguages = async () => {
    return await pb.collection('idioma').getFullList({
        sort:'+idioma'
    });
}

//listado de pacientes
export const listPatients = async () => {
    return await pb.collection('paciente').getFullList({
        sort:'+persona',
        expand:['persona', 'idiomas']
    });
}






