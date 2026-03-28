import mongoose from "mongoose";


const ProfileSchema = new mongoose.Schema({
 Name:{type:String,unique:true},
 Name:{type:String},
    Email:{type:String},
    Mobile:{type:String},
    Whatsapp:{type:String},
    Country:{type:String},
    State:{type:String},
    City:{type:String},
    PostalCode:{type:String},
    Image:{type:String}
    
},{timestamps:true})

const ProfileModel = mongoose.model('Profile',ProfileSchema)

export default ProfileModel