import { Router } from "express";
import { PostWishlish, WishDelete, WishGetController } from "../controllers/wishController.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";


const WishRouter = Router()

WishRouter.get('/wishGet',verifyuser,WishGetController)
WishRouter.post('/addWish',verifyuser,PostWishlish)
WishRouter.delete('/deleteWish',WishDelete)

export default WishRouter
