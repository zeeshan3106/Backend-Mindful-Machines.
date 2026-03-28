import express from 'express';
import cloudinary from 'cloudinary'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import helmet, { crossOriginResourcePolicy } from 'helmet'
import jsonwebtoken from 'jsonwebtoken'
import mongoose from 'mongoose';

import multer from 'multer'
import nodemon from 'nodemon'
import Connencted from './config/Database_Connenction.js';
import userRouter from './routes/user.route.js';
import Productroute from './routes/Product.js';
import ProfileRouter from './routes/Profile.js';
import FeedRouter from './routes/Feedback.js';
import ContactRouter from './routes/Contact.js';
import SignupRouter from './routes/Signup.js';
import LoginRouter from './routes/login.js';

import CartRouter from './routes/Cart.js';
import CategoryRouter from './routes/Category.js';
import OrderRouter from './routes/Order.js';
import DashboardRouter from './routes/Dashboard.js';
import WishRouter from './routes/Wishlist.js';
import serverless from 'serverless-http';
import ImageRouter from './routes/Image.js';
dotenv.config()
const app = express()
app.use(cors());


app.use(express.json())



app.get('/', (req, res)=>{


    res.json({

        message:"Server Connencted with "+ process.env.PORT
    })



})




app.use('/api/users',userRouter)

app.use('/api/users',Productroute)
console.log('✅ Product routes registered')


app.use('/api/frontend',ProfileRouter)
console.log('✅ Profile routes registered')

app.use('/api/frontend', FeedRouter)
console.log("✅ Feeback routes registered")

app.use('/api/frontend', ContactRouter)
console.log("✅ Contact routes registered")

app.use('/api/users',Productroute)
console.log('✅ 2nd Product routes registered')

app.use('/api/frontend',ProfileRouter)
console.log('✅ 2nd Profile routes registered')

app.use('/api/frontend', ContactRouter)
console.log("✅ Contact 2nd routes registered")

app.use('/api/users' , SignupRouter)
console.log("✅ Contact 2nd routes registered")

app.use('/api/users' , LoginRouter)
console.log("✅ Login Successfully!")

app.use('/api/products',CategoryRouter)
console.log("✅ Category added Successfully!")

app.use('/api/products',CategoryRouter)


app.use('/api/orders',OrderRouter)



app.use('/api/users' , Productroute)
console.log("✅ Update Successfully!")

app.use('/api/users' , Productroute)
console.log("✅ Update Successfully!")

app.use('/api/users' , Productroute)
console.log("✅ Update Successfully!")



app.use('/api/cart', CartRouter)
console.log("✅ Login Successfully!")



app.use('/api/cart', CartRouter)
console.log("✅ Login Successfully!")

app.use('/api/admin',DashboardRouter)
console.log("✅ Dashboard Displayed Successfully!")



app.use('/api/wish',WishRouter)

app.use('/api/Image',ImageRouter)


Connencted()
/*app.listen(process.env.PORT , ()=>{
console.log("Server Live")
}

)

*/

export default app;