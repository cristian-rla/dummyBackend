import { Request, Response, NextFunction } from "express";
import TweetController from  "../controllers/tweet";
import TweetService from "../database/user"; 

const tweetController = new TweetController(TweetService);

class TweetHttpHandler{
    async getTweets(request: Request, response: Response, next: NextFunction){
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