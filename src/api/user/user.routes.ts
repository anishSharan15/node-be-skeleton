import express from 'express';
import { createUsers } from './user.controller';

const userRouter = express.Router();

// Base URL /api/v1/user

userRouter.post('/', createUsers);


export default userRouter;
