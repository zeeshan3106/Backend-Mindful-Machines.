
import LoginModel from "../models/login.js"
import signupmodel from "../models/signup.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export default async function LoginController(req , res) {

    try{
        const{email , password}=req.body

        const finduser = await signupmodel.findOne({email})


        if (!finduser) {
  return res.status(402).json({ success:false, error:true, message:"Invalid email or password" });
}


        const passwordcomparison = await bcrypt.compare( password,finduser.password)

        if (!passwordcomparison) {
   

}


        



        console.log("Login password:", password); 

        const payload = {

            id: finduser._id,
            email:finduser.email


        }

        console.log(payload)

      const token = jwt.sign(payload, "secret123", { expiresIn: "3000s" });






        return res.status(200).json({
            error:false,
            success:true,
            message:"Data Submitted Successfully!",
            token,
            data:finduser,passwordcomparison
        })


        

      
        





    }
    catch(error){

        return res.status(500).json({
            error:true,
            success:false,
            message:error.message || error

        })


    }
    
}