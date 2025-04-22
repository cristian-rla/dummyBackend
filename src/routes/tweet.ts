import express from 'express'
import TweetHttpHandler from '../handlers/tweet';

const router = express.Router();
const tweetHttpHandler = new TweetHttpHandler();

router.get('/', tweetHttpHandler.getTweets);


export default router;