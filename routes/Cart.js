import { Router } from "express";

import { AddtoCart, Cartget, CartPOST, DeleteCart } from "../controllers/cartController.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";

const CartRouter=Router();


CartRouter.post('/cart',CartPOST)

CartRouter.get('/cartget',Cartget)


CartRouter.get('/get',AddtoCart)

CartRouter.delete('/delete',DeleteCart)

export default CartRouter

