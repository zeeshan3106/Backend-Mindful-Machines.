import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({


    Name:{
        type:String
    },
    Email:{  type:String},
    Company:{  type:String},
    Subject:{  type:String},
    Message:{  type:String}


},{timestamps:true})

const ContactModel = mongoose.model('ContactUs',ContactSchema)
export default ContactModel 

