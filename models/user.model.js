import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    name:{
        type:String,
       
    },
    username:{
        type:String,
       
        unique:true
    },

    email:{
        type:String,
    
        unique:true
    },

    password:{
        type:String,
     


    },

    avtar:{
        type:String,
        default:''
    },

    mobile:{
        type:Number,
      
        unique:true
    },
     whatsapp:{
        type:Number,

        unique:true
    },

    verify_email:{
        type:Boolean,
        default:false
    },

    last_login_date:{
        type:Date,
        default:""

        
    },

   status: { 
    type:String, 
    enum:['Active','Blocked','Inactive'], default:'Active' },


    adress_details:[{
        type:mongoose.Schema.ObjectId,
        ref:'address'
    }],

    shopping_Cart:[{
        type:mongoose.Schema.ObjectId,
        ref:'cart'
    }],

    orderHistory:[{
        type:mongoose.Schema.ObjectId,
        ref:'orderhistory'
    }],

    forget_Password_otp:{
        type:String,
        default:''
    },
    forget_Password_otp_expiry:{
        type:Date,
        default:''
    },

    role:{
        type:String,
        enum:['Admin','User'],
        default:'User'

    },
    otp:{
        type:String,
        default:''
    },
    otp_expiry:{
        type:Date,
        default:Date.now


    }
},
{timestamps:true}


)


const UserModel = mongoose.model("UserDetils", userSchema)
export default UserModel