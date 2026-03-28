import { Router } from "express"; 
import { ProfileControler, ProfileGet } from "../controllers/ProfileControllers.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";
import path from 'path';

import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({storage:storage})


const ProfileRouter = Router()


ProfileRouter.post('/profile',  upload.single("key")  ,ProfileControler)
console.log('Product route file loaded');



ProfileRouter.get('/getprofiles',verifyuser,ProfileGet)

console.log('Profile 2nd route file loaded');

export default ProfileRouter

