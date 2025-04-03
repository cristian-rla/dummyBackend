import express from 'express'
import TweetHttpHandler from '../handlers/tweet';

const router = express.Router();
const tweetHttpHandler = new TweetHttpHandler();

router.get('/', tweetHttpHandler.getTweets.bind(tweetHttpHandler));
router.get('/:id', tweetHttpHandler.getTweetById.bind(tweetHttpHandler));
router.put('/:id', tweetHttpHandler.updateTweet.bind(tweetHttpHandler));
router.delete('/:id', tweetHttpHandler.deleteTweet.bind(tweetHttpHandler));

export default router;