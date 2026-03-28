import { Router } from "express";
import { ImageController } from "../controllers/Image.Controller.js";
import multer from 'multer';

const storage = multer.memoryStorage()
const upload = multer({ storage:storage});


const ImageRouter = Router()


ImageRouter.post("/imagetoback", upload.single('key'), ImageController);

export default ImageRouter