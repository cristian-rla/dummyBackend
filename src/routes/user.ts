import express from 'express'
const router = express.Router();

router.get('/', getUsers)
router.get('/:id', getTweetById);
router.put('/:id', updateTweet);
router.delete('/:id', deleteTweet);

export default router;