import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
},
category:{
    type:String,
    require:true
   
},
subcategory:{
    type:String,
   
},
price:{
    type:String,
    require:true
   
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

ratings:{type:String},
avaiability:{type:String},

image:{
   
}




},


{timestamps:true}


)

const ProductModel=mongoose.model('ProductsUpload',productSchema)

export default ProductModel