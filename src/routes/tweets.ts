import express from 'express'
const router = express.Router();

router.get('/', getTweets);  // Qué función se ejecuta al llegar al path
router.get('/:id', getTweetById);
router.put('/:id', updateTweet);
router.delete('/:id', deleteTweet);

export default router;