import mongoose from "mongoose";


const SignupSchema = mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    country:{
        type:String
    },
    city:{
        type:String
    },
    profession:{
        type:String
    },
    company:{
        type:String
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    }





},{timestamps:true})


const signupmodel = mongoose.model('Signup',SignupSchema)

export default signupmodel 