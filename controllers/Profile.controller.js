import ProfileModel from "../models/Profile.js"

export async function ProfileControllerPut(req,res){


    try{

        const userID = req.jwtpayload.id

        const {Name, Email,Phone,
            Address,Nationality, DOB,    Facebook,
              Instagram,
              Youtube,Linkedin,
            UserName,LastLogin,Image,
            CurrentDevice,DeviceName,Country,State,PostalCode, Street,Landmark, ProductCategory,Language,Currency,Reigion} = req.body
           

            const ProfileData = new ProfileModel({
                userID,
                Name, Email,Phone,
            Address,Nationality, DOB,       Facebook,
              Instagram,
              Youtube,Linkedin,
            UserName,LastLogin,Image,
            CurrentDevice,DeviceName,Country,State,PostalCode, Street,Landmark, ProductCategory,Language,Currency,Reigion })
           console.log(ProfileData)
           
            await ProfileData.save()
           
           return res.status(200).json({
                error:false,
                success:true,
                data:ProfileData
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



export async function ProfileControllerGet(req,res){

    try{


        const Profileitems = await ProfileModel.find()


        return res.status(200).json({
            error:true,
            success:false,
            data:Profileitems
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