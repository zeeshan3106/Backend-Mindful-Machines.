import { Router } from "express"; 
import { ProfileControler, ProfileGet } from "../controllers/ProfileControllers.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";
import path from 'path';

import multer from "multer";
import { ProfileControllerGet, ProfileControllerPut } from "../controllers/Profile.controller.js";

const storage = multer.memoryStorage();

const upload = multer({storage:storage})


const ProfileRouter = Router()


ProfileRouter.post('/profiledf',  upload.single("key")  ,ProfileControler)
console.log('Product route file loaded');

ProfileRouter.get('/getprofiles',verifyuser,ProfileGet)

ProfileRouter.post('/profile',verifyuser,ProfileControllerPut)

ProfileRouter.get('/profile-items',ProfileControllerGet)


export default ProfileRouter

