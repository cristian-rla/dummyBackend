import { Request, Response, NextFunction } from "express";
import UserController from "../controllers/user";
import userService from "../database/user"

const userController = new UserController(userService);

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