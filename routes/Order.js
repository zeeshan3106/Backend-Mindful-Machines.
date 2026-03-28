import { Router } from "express";
import { OrderController, OrderPut } from "../controllers/Order.controller.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";

const OrderRouter = Router()


OrderRouter.get('/getorders',OrderController)


OrderRouter.post('/putorders',verifyuser,OrderPut)


export default OrderRouter