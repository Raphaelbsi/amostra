import Api from "./api";


const UserService = {
    register: (params) => Api.post("/usuarios/registrar", params),
    login: async (params) => {
      const response = await Api.post("/usuarios/login", params)
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
      localStorage.setItem('token', response.data.token);  
    },
}

export default UserService;