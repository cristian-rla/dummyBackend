import { Request, Response, NextFunction } from "express";
import UserController from "../controllers/user";

const userController = new UserController();

class UserHttpHandler{

    async getUsers(request: Request, response: Response, next: NextFunction){
        try{
            const tweets = await userController.getAllUsers();
            response.json(tweets);
        } catch(error){
            next(error);
        }
    }

    async getUser(request: Request, response: Response, next: NextFunction){

    }

    async updateUser(request: Request, response: Response, next: NextFunction){

    }

    async deleteUser(request: Request, response: Response, next: NextFunction){

    }
}

module.exports = new UserHttpHandler();

export default UserHttpHandler;