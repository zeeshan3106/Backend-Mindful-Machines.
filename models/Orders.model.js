import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
 userId:{type:String, },
    FullName:{type:String},
  Email: {
    type: String,

}
,
    HouseNo:{type:String},
    StreetNo:{type:String},
    City:{type:String},State:{type:String},
    Country:{type:String},PostalCode:{type:String},
    PhoneNo:{type:String},
    Whatsapp:{type:String},
    PostalCode:{type:String},

 items: {
    type: [
      {
        title: { type: String, },
        company: { type: String },
        price: { type: String,  },
        oldPrice: { type: String },
        discount: { type: String , default: 0 },
        color: { type: String },
        weight: { type: String },
        category: { type: String },
        quantity: { type: String ,},
        subtotal: { type: String , } // price * quantity - discount
      }
    ],
   
  },




})

const OrderModel = mongoose.model('OrdersReceieved',OrderSchema)

export default OrderModel