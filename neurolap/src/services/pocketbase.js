import PocketBase from 'pocketbase';

const POCKETBASE_API_URL = 'http://127.0.0.1:8090';

const pb = new PocketBase(POCKETBASE_API_URL);

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

