import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloud_name ,
        api_key: process.env.api_key,
        api_secret:process.env.api_secret  // Click 'View API Keys' above to copy your API secret
    });


export async function UploadImage(localfile){

    try{

        if(!localfile) return null
        const uploadedfile = await cloudinary.uploader.upload(localfile,{
            resource_type:"auto"

        })

        console.log("File is Uploaded on cloudiary Server...!",uploadedfile.url)

        return 


    }
    catch(error){
        console.log("Uploaded Failed",error)
        fs.unlinkSync(localfile)

    }
}}

)

