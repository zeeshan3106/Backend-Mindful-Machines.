import {Router} from 'express'
import { Registration, Users } from '../controllers/user.controller.js'
import { Product } from '../controllers/product.controller.js'

 

const userRouter = Router()
userRouter.post('/register',Registration)   //Route:1

userRouter.get('/getusers',Users)   //Route:1




export default userRouter
