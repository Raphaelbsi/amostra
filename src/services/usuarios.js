import Api from "./api";


const UserService = {
    register: (params) => Api.post("/usuarios/registrar", params)
}

export default UserService;