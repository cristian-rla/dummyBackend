import { Request, Response, NextFunction } from "express";
import TweetController from  "../controllers/tweet";
import tweetService from "../database/tweet"; 

const tweetController = new TweetController(tweetService);

class TweetHttpHandler{
    async getTweets(request: Request, response: Response, next: NextFunction){ // La función next es para pasar a la siguiente función 
        try{
            const tweets = await tweetController.getAllTweets();
            response.json(tweets);
        } catch(error){
            next(error);
        }
    }

    async getTweetById(request: Request, response: Response, next: NextFunction){

    }

    async updateTweet(request: Request, response: Response, next: NextFunction){

    }

    async deleteTweet(request: Request, response: Response, next: NextFunction){

    }
}

module.exports = new TweetHttpHandler();

export default TweetHttpHandler;