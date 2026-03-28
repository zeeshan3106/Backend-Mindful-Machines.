import { Router } from "express";
import { ImageController } from "../controllers/Image.Controller.js";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });


const ImageRouter = Router()


ImageRouter.post("/imagetoback", upload.single('key'), ImageController);

export default ImageRouter