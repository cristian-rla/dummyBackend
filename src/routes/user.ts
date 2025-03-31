import express from 'express'
import UserHttpHandler from '../handlers/user.js';

const router = express.Router();
const userHttpHandler = new UserHttpHandler();

router.get('/', userHttpHandler.getUsers)
router.get('/:id', userHttpHandler.getUser);
router.put('/:id', userHttpHandler.updateUser);
router.delete('/:id', userHttpHandler.deleteUser);

export default router;