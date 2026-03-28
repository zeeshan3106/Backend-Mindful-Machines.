import mongoose from 'mongoose'

const orderSchema=new mongoose.Schema({
    userID:{
        type:mongoose.Schema.ObjectId,
        ref:'User'

    },
   
    orderID:{
        type:String,
        required:[true, "Provide Order Id"],
        unique:true

    },

     productID:{
        type:mongoose.Schema.ObjectId,
        ref:"product"
     },
     product_details:{
        name:String,
        image:Array
     },
     payment_ID:{
        type:String,
        default:''
     },
     payment_status:{
        type:String,
        enum:["Completed", "Denied "]
     },
     delievery_address:{
        type:mongoose.Schema.ObjectId,
        ref:'address'
     },
     subtotal:{type:Number,
        default:null
     },
     totalamount:{
        type:Number,
        default:null

     },
     invoice_recipt:{
        type:String,
        default:""
     }













},{timestamps:true})


const ordermodel=mongoose.model('OrderHistory',orderSchema)