import UserService from "../database/user";
import { UserUpdateDB, User } from "../types/user";

class UserController{
    service:typeof UserService;
    constructor(service: typeof UserService){
        this.service = service;
    }
    getAllUsers(){
        return this.service.getAll();
    }
    getUserById(id:number){
        return this.service.getById(id);
    }
    deleteUser(id:number){
        return this.service.delete(id);
    }
    updateUser(id:number, userData:UserUpdateDB | User){
        return this.service.update(id, userData)
    }
}

export default UserController;