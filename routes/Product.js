import {Router} from 'express'
import { filteredData, getbyid, getbyidAndDelete, GetProduct, Product, UpdateProduct } from '../controllers/product.controller.js'
import verifyuser from '../Middlewares/Jwt.middleware.js';
import path from 'path';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const ext = path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix +ext)
  }
})
const upload = multer ({storage:storage})



const Productroute = Router()

Productroute.post('/product',upload.single("image"),Product)
console.log('Product route file loaded');




Productroute.get('/getall',verifyuser,GetProduct)
console.log('Product Get route file loaded');


Productroute.put('/updateproducts/:id',UpdateProduct)
console.log("Your Typical Product updation route Done")




Productroute.get('/filterdata',filteredData)
console.log("Filtered Data...")


export default Productroute