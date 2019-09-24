import express from 'express';
import UserController from '../controllers/user';

const router = express.Router({});

router.post('/user/test', UserController.test);

export default router;
