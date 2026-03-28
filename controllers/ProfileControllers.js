import ProfileModel from "../models/Profile.js"
import signupmodel from "../models/signup.js"
import fs from 'fs'
import {v2 as cloudinary} from 'cloudinary'


cloudinary.config({ 
  cloud_name: 'de5423mei',
  api_key: '112722565633318',
  api_secret: 'E0fPy7_vrOXprgLl_yRSMW3XtA8'
});


export async function ProfileControler(req, res){


    try{

        const {Name,Email, Mobile,Whatsapp,Country,State,City,PostalCode} = req.body
        

        const result =  await cloudinary.uploader.upload(req.file.path,{folder:"Profile Images"})
      const  Image = result.secure_url

    fs.unlinkSync(req.file.path)

    
        const ProfileData = new ProfileModel({

            Name,Email, Mobile,Whatsapp,Country,State,City,PostalCode,
            Image:Image


        })


        await ProfileData.save()

        return res.status(200).json({


            error:false,
            success:true,
            message:"You Finally did it properly!"


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


export async function ProfileGet(req, res){

    try{


const Useremail = req.jwtpayload.email


 const Profiles = await ProfileModel.find({Email: Useremail});

 
        if(!Profiles){

            return res.status(100).json({

                error:false,
                sucess:true,
                message:"No Single USer Avaiable"
            })
        }

       


        return res.status(200).json({
            error:false,
            success:true,
            data:Profiles,
            message:"All Profiles are There..."
      
        })


    }
    catch{



    }
}



export async function GetImage (req,res){


    try{

        

    }
    catch(error){

    }



}