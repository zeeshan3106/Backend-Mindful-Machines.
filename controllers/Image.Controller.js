import ImageModel from "../models/Image.js";


export async  function ImageController (req,res){
try{


    const {Name, Dept , Age}=req.body;

if (!req.file) {
            return res.status(400).json({ 
                error: true, 
                message: "No file received. Check your 'key' name in Postman/React." 
            });
        }

    const stored = new ImageModel({

        Name, Dept, Age,
        Image:req.file.path
    })

    const save = await stored.save()


    return res.status(200).json({
        error:false,
        success:true,
        data:stored
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