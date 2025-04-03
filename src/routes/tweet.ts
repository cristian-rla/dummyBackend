import express from 'express'
import TweetHttpHandler from '../handlers/tweet.js';

const router = express.Router();
const tweetHttpHandler = new TweetHttpHandler();

router.get('/', tweetHttpHandler.getTweets);  // Qué función se ejecuta al llegar al path. Por qué no se le puede poner paréntesis al getTweets?
router.get('/:id', tweetHttpHandler.getTweetById);
router.put('/:id', tweetHttpHandler.updateTweet);
router.delete('/:id', tweetHttpHandler.deleteTweet);

export default router;