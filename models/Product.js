import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({

    title:{
        type:String,
     
    },
    description:{
        type:String,
},
category:{
    type:String,
  
   
},
subcategory:{
    type:String,
   
},
price:{
    type:String,
  
   
},
oldPrice:{
    type:String,
    
},
isFeatured:{
    type:String,

},
productStock:{
    type:String
},
company:{
    type:String
},
discount:{
    type:String
},
color:{
    type:String
},
weight:{
    type:String
},
size:{
    type:String
},
location:{
    type:String
},
quantity:{
    type:String
},

ratings:{type:Number},
avaiability:{type:String},
available:{type:String},

image:{
   
}




},


{timestamps:true}


)

const ProductModel=mongoose.model('ProductsUpload',productSchema)

export default ProductModel