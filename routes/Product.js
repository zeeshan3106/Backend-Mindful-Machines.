import {Router} from 'express'
import { filteredData, getbyid, getbyidAndDelete, GetProduct, Product, ProductDetail, UpdateProduct } from '../controllers/product.controller.js'
import verifyuser from '../Middlewares/Jwt.middleware.js';
import path from 'path';

import multer from 'multer';

const storage = multer.memoryStorage();
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

Productroute.get('/detail',ProductDetail)


export default Productroute