import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export async function Registration(req, res) {
    try {

        let user;

const { name, username, email, password, mobile, whatsapp } = req.body   //1st

           if(!email || !password){    //2nd
            return res.status(400).json({
                message:"provide email, password",
                error:true,
                success:false

            })
        }

     user = await UserModel.findOne({email}) //3rd

        if(user){
           return res.json({
                message:"User Already Exists",
                error:true,
                success:false
            })
        }

 
const verify = Math.floor(900 + Math.random() * 200).toString()  //7th


        const salt = await bcrypt.genSalt(10)    //4th
        const hashing = await bcrypt.hash(password ,salt)


user = new UserModel({
  name,
  username,
  email,
  password: hashing,
  mobile,
  whatsapp,
  otp: verify,
  otp_expiry: Date.now() + 60000
});





 await user.save()  //6th





 const verifyEmail = await SendEmailFun({
    sendTo:email,
    subject:"Verification Code From AI Sellers",
    html:verification(name, verify),
    text:''

    })
   


const token = jwt.sign(
    {email:user.email , id:user._id},JSON_WEB_TOKEN_SECRET_KEY
)


return res.status(200).json({
    error:false,
success:true,
message:"User Successfully Registered",



})


        
    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            error:true,
            success:false,



        })
        
    }
    
}



export async function Users(req, res){

    try{

        const UsersData =  await UserModel.find();

        if(!UsersData){

            return res.status(500).json({
                sucess:true,
                error:false,


            })
        }

        return res.status(200).json({

            error:false,
            sucess:true,
            data:UsersData


        })




    }
    catch(error){


        return res.status(500).json({
            success:false,
            error:true,
            message:error.message || error
        })
    }
}