import mongoose from 'mongoose'
import { MdOutlineGppGood } from 'react-icons/md'

const adressSchema = new mongoose.Schema({

addressline:{
    type:String,
    required:[true,"Enter Your Shipping Adress"],
    default:''
},
city:{
    type:String,
    default:''
},
state:{
    type:String,
    default:''
},
postalcode:{
    type:String,
    default:''
},
country:{
    type:String,
    default:''
},
mobile:{
    type:Number,
    default:null
},
status:{
    type:Boolean,
    default:true
},
userID:{
    type:mongoose.Schema.ObjectId,
    default:""
}


},{timestamps:true})

const AddressModel=mongoose.model('Adress',adressSchema)
export default AddressModel