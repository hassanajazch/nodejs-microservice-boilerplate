import express from 'express';
import UserController from '../controllers/user';

const router = express.Router({});

router.post('/user/find', UserController.findUser);

export default router;
