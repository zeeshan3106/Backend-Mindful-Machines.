import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({

  userId:{type:String, required:true},
 title:{type:String},
 company:{type:String},
 price:{type:String},
 oldPrice:{type:String},
 discount:{type:String},
 color:{type:String},
 weight:{type:String},
 category:{type:String},
 quantity:{type:String},
 totalamount:{type:String}
 , Totalprice:{type:String},



},{timestamps:true})

const cartmodel = mongoose.model('Cart', cartSchema)
export default cartmodel