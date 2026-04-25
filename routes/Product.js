import {Router} from 'express'
import { Avalablity, filteredData, getbyid, getbyidAndDelete, GetProduct, PriceAPI, Product, ProductDetail, Ratings, UNAvalablity, UpdateProduct } from '../controllers/product.controller.js'
import verifyuser from '../Middlewares/Jwt.middleware.js';
import path from 'path';

import multer from 'multer';
import { GetProductInformation, ProductDetailElemnts } from '../controllers/product.controllers.js';

const storage = multer.diskStorage({
 
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })



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

Productroute.get('/status',Avalablity)
Productroute.get('/status-unavailable',UNAvalablity)
Productroute.get('/custom-price',PriceAPI)

Productroute.get('/ratings',Ratings)



Productroute.post('/productdetail',upload.single('image'),ProductDetailElemnts)

Productroute.get('/product-info',GetProductInformation)


export default Productroute