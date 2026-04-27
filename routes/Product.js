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




Productroute.post('/productdetail',upload.fields([
  
  {name:"Slider1",maxCount:1},{name:"Slider2",maxCount:1},
  {name:"Slider3",maxCount:1},{name:"Slider4",maxCount:1},
  {name:"Slider5",maxCount:1},{name:"Slider6",maxCount:1},
  {name:"Slider7",maxCount:1},{name:"Slider8",maxCount:1},
  {name:"Slider9",maxCount:1},{name:"Slider10",maxCount:1},
  
    {name:"function1",maxCount:1},{name:"function2",maxCount:1},
  {name:"function3",maxCount:1},{name:"function4",maxCount:1},
  {name:"function5",maxCount:1},{name:"function6",maxCount:1},
  {name:"function7",maxCount:1},{name:"function8",maxCount:1},
  {name:"function9",maxCount:1},{name:"function10",maxCount:1},

   {name:"whyImage1",maxCount:1},{name:"whyImage2",maxCount:1},
  {name:"whyImage3",maxCount:1},{name:"whyImage4",maxCount:1},
{name:"physicalImage1",maxCount:1},{name:"physicalImage2",maxCount:1},
{name:"safteyImage1",maxCount:1},


    {name:"digitalCardImage1",maxCount:1},{name:"digitalCardImage2",maxCount:1},
  {name:"digitalCardImage3",maxCount:1},{name:"digitalCardImage4",maxCount:1},
  {name:"digitalCardImage5",maxCount:1},{name:"digitalCardImage6",maxCount:1},
  {name:"digitalCardImage7",maxCount:1},{name:"digitalCardImage8",maxCount:1},
  {name:"digitalCardImage9",maxCount:1},{name:"digitalCardImage10",maxCount:1},

  



]),ProductDetailElemnts)
Productroute.get('/product-info',GetProductInformation)


export default Productroute