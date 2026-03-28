
import signupmodel from "../models/signup.js"
import bcrypt from "bcryptjs"


export async function SignupController(req, res) {

    try{



    const { name, email, phone, country, city, profession,  company,  password,    confirmpassword }=req.body
     
    const salt = await bcrypt.genSalt(12)
    const hashedpassword=await bcrypt.hash(password, salt)


    console.log(password)










    const SingupData = new signupmodel({

name, email, phone, country, city, profession,  company,  
password:hashedpassword,

  confirmpassword:hashedpassword

    })

    await SingupData.save()


console.log(hashedpassword)


    return res.status(200).json({

        error:false,
        sucess:true,
    message:"Data Sent Succcessfully!",
    data:SingupData
    })

    }
    
    catch(error){

        return res.status(500).json({

            error:true,
            sucess:false,

            message:error.message || error




        })
    }



 
}



export async function GetUsers(req , res ){
    try{

        


     

        const Allusers = await signupmodel.find()
         const   Usercounts1= await signupmodel.countDocuments();
               
      


        return res.status(200).json({
            error :false,
            success:true,
            data:Allusers,
            Usercounts
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


export async function SearchUsers(req,res){
    try{
     
const element = req.query.element
        const userFind = await signupmodel.find({

            $or:[
                {name:{$regex:element,$options:"i"}},
                  {email:{$regex:element,$options:"i"}},
                  {phone:{$regex:element,$options:"i"}},
                   {city:{$regex:element,$options:"i"}},
                      {country:{$regex:element,$options:"i"}},
                      
            ]
        })
const Usercounts = userFind.length

return res.status(200).json({
    error:false,
    success:true,
    data:userFind,
    Usercounts
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