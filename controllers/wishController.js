import ProductModel from "../models/Product.js";
import wishmodel from "../models/Wishlist.js";

export async function WishGetController(req, res){


    try{





        const userId= req.jwtpayload.id


 const WishGet = await wishmodel.find({
    userId:userId
 });
 const totalwish = await  wishmodel.find({
    userId:userId
 }).countDocuments()



 return res.status(200).json({
    error :false,
    success:true,
    data:WishGet,
    totalwish
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