
import ProductModel from '../models/Product.js'
import {v2 as cloudinary} from 'cloudinary'



cloudinary.config({ 
  cloud_name: 'de5423mei',
  api_key: '112722565633318',
  api_secret: 'E0fPy7_vrOXprgLl_yRSMW3XtA8'
});


export async function Product(req,res){

   try{

    console.log("File received by Multer:", req.file); // <--- Add this log
  console.log("Body received:", req.body);
    let product

    const {title,quantity,image,
         category ,subcategory , price, description, oldPrice, isFeatured, productStock, company, discount, color, weight, size,location}= 
         req.body
     

         const Image = await cloudinary.uploader.upload(req.file.path , {folder:"Product-Display-Image"})
          
        

 let Product1 = new ProductModel({
    quantity,
title,
category,
subcategory,
price,
description,
oldPrice,
isFeatured,
company,
productStock,
discount,
color,
weight,
size,
location,
image:Image
 });


 await Product1.save();


 return res.status(200).json({
    error:false,
    success:true,
    message:"Product Created in the Database"
    ,
    data:Product1


})


}

catch(error){

    return res.status(500).json({

        error:true,
        success:false,
        message:error.message || error,

    })




}




}



export async function GetProduct(req,res){


    try{

        const Products = await ProductModel.find();
        const ProductsCounts= await ProductModel.countDocuments();
       

        if(!Products){

            return res.status(200).json({

                error:true,
                message:"Products not avaiable"

            })
        }

        return res.status(200).json({

            error:false,
            success:true,
            message:"All Products Retrieved Properly",
          
            data:Products,ProductsCounts

        })





    }
    catch(error){


        return res.status(500).json({


            error:true,
            success:false,
            message:error.message|| error,
            
            





        })
     
    }






}





export async function getbyid(req,res){

    try{

        const user = await ProductModel.findById()

        return res.status(200).json({

            error:false,
            success:true,
            message:"Your User is HERE",
            data:user

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

export async function getbyidAndDelete(req,res){



    try{

        const userdelete = await ProductModel.findByIdAndDelete()

        return res.status(200).json({
            error:false,
            success:true,
            data:userdelete
        })


    }
    catch{

return res.status(500).json({

    error:true,
    success:false,
    message:error.message || error

})

    }
}




export async function filteredData(req,res){


    try{

        const Filtereddata = await ProductModel.find();


        const {category, price , availability,subcategory, minprice, maxprice , ratings, page, limit}=req.body
const filter={}
      if(category.length){

        filter.category= {$in: category}
      }
        if(subcategory.length){

        filter.category= {$in: subcategory}
      }
      if(availability.length){
        filter.availability = {$in: availability}
      }
      if(ratings.length){
        filter.ratings= {$in: ratings}
      }

      try {

        const filtering = await ProductModel.find(filter).populate("category".skip(page-1)* limit).limit(parseInt(limit))


        const CategoryFilter = await ProductModel.find({category})

           const AvaiableProduct = await ProductModel.find({availability})




        const totalProduct = await ProductModel.countDocuments(filter);

        return res.status(200).json({

            success:true,
            error:false,
            page:parseInt(page),
            total:Math.ceil(totalProduct/limit)
        
         
        })
        
      } catch (error) {


        return res.status(500).jsom({
            error:true,
            success:false,
            message:error.message || error
        })
        
      }










  console.log(Filtereddata)
        return res.status(200).json({
            success:true,
            error:false,
            data:Filtereddata
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












export async function UpdateProduct(req, res) {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Update product by string _id
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: id },                    // match string _id
      { $set: { ...updateData, updatedAt: new Date() } }, // update all fields
      { new: true }                   // return updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "Product not found"
      });
    }

    return res.status(200).json({
      error: false,
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    });

  } catch (error) {
    return res.status(500).json({
      error: true,
      success: false,
      message: error.message || error
    });
  }
}





export async function ProductDetail(req,res){

    try{

        const _id = req.query.id


        const detailitem = await ProductModel.find({_id:_id})

        return res.status(200).json({
            error:false,
            success:true,
            data:detailitem
        })




    }
    catch(error){

        return res.status(500).json({
            error:true,
            success:false,
            message: error.message || error
        })
    }
}





export async function Avalablity (req,res){

    try{

        const statusid = ""


        const status = await ProductModel.find({avaiability:statusid})

        console.log("Status",status)

        return res.status(200).json({
            error:false,
            success:true,
            data:status
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



export async function PriceAPI(req,res){



    try{
        const {price}= req.query

        const priceditem = await ProductModel.find({price:price})

        return res.status(200).json({
            error:false,
            success:true,
            data:priceditem
        })

    }
    catch(error){

        return res.status(500).json({
            error:false,
            success:true,
            message:error.message || error
        })



    }
}



export async function Ratings (req,res){


    try{

        const rating = req.query.rating

        const ratingData = await ProductModel.find({ratings:rating})

        return res.status(200).json({
            error:false,
            success:true,
            data:ratingData
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
