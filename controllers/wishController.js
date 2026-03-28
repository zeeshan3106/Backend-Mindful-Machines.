import ProductModel from "../models/Product.js";
import wishmodel from "../models/Wishlist.js";

export async function WishGetController(req, res){


    try{





        const userId= req.jwtpayload.id
        const pageid = req.query.page



 const page = pageid
 const limit = 5

 const skip = (page - 1)*limit

 const WishGet = await wishmodel.find({
    userId:userId
 }).skip(skip).limit(limit)


 const totalwish = await  wishmodel.find({
    userId:userId
 }).countDocuments()

 const totalpages = Math.ceil(totalwish/limit)

console.log(totalpages)

 return res.status(200).json({
    error :false,
    success:true,
    data:WishGet,
    totalwish,
    totalpages
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



export async function PostWishlish(req,res){


    try{

        const {_id}=req.body
        const userId= req.jwtpayload.id

        const Productfind = await ProductModel.findById(_id)


        const AddToWishlist = await new wishmodel({

            userId:userId,
            title:Productfind.title,
            company:Productfind.company,
            price:Productfind.price,
            oldPrice:Productfind.oldPrice,
            discount:Productfind.discount,
            category:Productfind.category,
            




        })


       const added =  await AddToWishlist.save();


        return res.status(200).json({
            error:false,
            success:true,
            data:added,
            message:"Added Successfully!"
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