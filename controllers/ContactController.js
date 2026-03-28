import ContactModel from "../models/ContactUs.js"




export async function ContactController(req, res){


    try{

        const{Name,Email ,Company, Subject, Message}=req.body

        const Contact = new ContactModel({
Name,Email ,Company, Subject, Message
})


await Contact.save();

return res.status(200).json({
    error:false,
    success:true,
    Message:'Next Done'



})





    }
    catch{

        return res.status(500).json({


            success:false,
            error:true,
            message:message.error || error



        })


    }





}



export async function ContactGet(req,res){


    try{

        const page = 1
        const limit = 200
        const skip = (page-1)*limit

        const Contacts = await ContactModel.find().skip(skip).limit(limit)
        const ContactsCounts = await ContactModel.countDocuments();

        if(!Contacts){ 
            return res.status(500).json({
                error:true,
                success:false,



            })
        }


        return res.status(200).json({

            error:false,
            success:true,
            data:Contacts, ContactsCounts
        })


    }
    catch(error){

            return res.status(500).json({
                error:true,
                success:false,
                


            })
    }
}





export async function SearchContacts(req, res){


    try{

        const element = req.query.element


        const searcheditems = await ContactModel.find({
    
            $or:[ {Name:{$regex:element, $options:"i"}},
                {Email:{$regex:element, $options:"i"}},
                {Message:{$regex:element, $options:"i"}} ,
                    {Company:{$regex:element, $options:"i"}} 
            
            
            
            ] })


            const ContactsCounts = searcheditems.length


                return res.status(200).json({
                    error:false,
                    success:true,
                    data:searcheditems,
                    ContactsCounts
                })




    }
    catch(error){

        return res.status(500).json({
            error:true,
            success:false,
            messgae:error.message || error
        })

    }







}