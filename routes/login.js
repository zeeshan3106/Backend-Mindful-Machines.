import { Router } from "express";
import LoginController from "../controllers/login.controller.js";

const LoginRouter = Router();

LoginRouter.post('/login',LoginController)
console.log('Product route file loaded');
export default LoginRouter