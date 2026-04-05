import { Router } from "express";
import { PostWishlish, WishGetController } from "../controllers/wishController.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";


const WishRouter = Router()

WishRouter.get('/wishGet',WishGetController)
WishRouter.post('/addWish',verifyuser,PostWishlish)

export default WishRouter
