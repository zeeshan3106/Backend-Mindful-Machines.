import { Router } from "express";

import { AddtoCart, Cartget, CartPOST, DeleteCart } from "../controllers/cartController.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";

const CartRouter=Router();


CartRouter.post('/cart',CartPOST)

CartRouter.get('/cartget',verifyuser,Cartget)


CartRouter.get('/get',verifyuser,AddtoCart)

CartRouter.delete('/delete',verifyuser,DeleteCart)

export default CartRouter

