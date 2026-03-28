import mongoose from 'mongoose'

const wishSchema = new mongoose.Schema({

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

const wishmodel = mongoose.model('Wishlist', wishSchema)
export default wishmodel