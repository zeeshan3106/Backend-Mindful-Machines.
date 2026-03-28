import { Router } from "express";
import { GetUsers, SearchUsers, SignupController } from "../controllers/Signup.controller.js";


const SignupRouter = Router()

SignupRouter.post('/signup',SignupController)

SignupRouter.get('/getallusers',GetUsers)

SignupRouter.get('/searchusers',SearchUsers)

export default SignupRouter