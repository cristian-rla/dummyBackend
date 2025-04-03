import UserService from "../database/user";

class UserController{
    service:typeof UserService;
    constructor(service: typeof UserService){
        this.service = service;
    }
    async getAllUsers(){
        
    }
}

export default UserController;