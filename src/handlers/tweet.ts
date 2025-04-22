import { Request, Response, NextFunction } from "express";
import TweetController from  "../controllers/tweet";
import tweetService from "../database/tweet"; 

const tweetController = new TweetController(tweetService);

class TweetHttpHandler{

    async getTweets(request: Request, response: Response, next: NextFunction){ // La función next es para pasar a la siguiente función 
        try{
            const tweets = await tweetController.getAllTweets();
            response.status(200).json(tweets);
        } catch(error){
            next(error);
        }
    }

}

export default TweetHttpHandler;