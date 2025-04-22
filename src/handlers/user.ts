import { Request, Response, NextFunction } from "express";
import UserController from "../controllers/user";
import userService from "../database/user"

const userController = new UserController(userService);

class UserHttpHandler{

    async getUsers(request: Request, response: Response, next: NextFunction){
        try{
            const tweets = await userController.getAllUsers();
            response.status(200).json(tweets);
        } catch(error){
            next(error);
        }
    }

    async getUser(request: Request, response: Response, next: NextFunction){
        try{
            const tweets = await userController.getUserById(parseInt(request.params.id));
            response.status(200).json(tweets);
        } catch(error){
            next(error);
        }
    }

    async updateUser(request: Request, response: Response, next: NextFunction){
        try{
            const tweets = userController.updateUser(parseInt(request.params.id),request.body);
            response.status(200).json(tweets);
        } catch(error){
            next(error);
        }
    }

    async deleteUser(request: Request, response: Response, next: NextFunction){
        try{
            const tweets = userController.deleteUser(parseInt(request.params.id));
            response.status(200).json(tweets);
        } catch(error){
            next(error);
        }
    }
}

export default UserHttpHandler;