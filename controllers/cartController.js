import cartmodel from "../models/cart.model.js"
import ProductModel from "../models/Product.js";

export async function CartPOST(req,res){


    try{
        


       
    const {userId, title,category,price,oldPrice,company,discount,color,weight}=req.body

    const CartItems = new cartmodel({

        userId,title,category,price,oldPrice,company,discount,color,weight
    })




    await CartItems.save();



    return res.status(200).json({

        error:false,
        success:true,
        data:CartItems

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




export async function Cartget(req ,res){
    
    
    
    try{
         const { _id } = req.query;

         const userId = req.jwtpayload.id

         console.log(userId)
         console.log(_id)


  const Cartitem = await ProductModel.findById(_id);

     if(!Cartitem){
        return res.status(300).json({

            error:true,
            success:false,
            message:"Product not found"
        })
     }

     const existingCartItem = await cartmodel.findOne({
    title: Cartitem.title,
    color: Cartitem.color,
    company: Cartitem.company
});

console.log(existingCartItem)
const totalprice = Cartitem.price * Cartitem.quantity

     if(existingCartItem){
        return res.status(500).json({
         
            message:"Already Exist."
        })
     }

else{

     const CartAdding = new cartmodel({

        userId:userId,
        title:Cartitem.title,
        category:Cartitem.category,
        price:Cartitem.price,
        oldPrice:Cartitem.oldPrice,
        company:Cartitem.company,
        discount:Cartitem.discount,
        color:Cartitem.color,
        weight:Cartitem.weight,
        quantity:Cartitem.quantity,
        Totalprice:totalprice,





     })

console.log(CartAdding)
      
     await CartAdding.save();



     const carttotals = await cartmodel.aggregate([
        {
            $group:{
                _id:null,
             total:{$sum:"$price"}
 }
        }
     ])

     const carttotal = carttotals[0]?.total;


      




console.log("total element",carttotal)

      
return res.status(200).json({
        error:false,
        success:true,
        data:Cartitem,
        userId,
        carttotal
    
     })




    }

   
     const priceperitem = Cartitem.priceperitem

  







 


    }
catch(error){

   return res.status(500).json({

     success:false,
    error:true,
    message:error.message || error
   })

}







}



export async function AddtoCart(req,res){

    try{
        


       

        const productid = await cartmodel.find()
        const totalItems = await cartmodel.countDocuments()



        const carttotals = await cartmodel.aggregate([
            {
                $group:{
                    _id:null,
                    total:{$sum:"$price"}
                }
            }
        ])

      const carttotal = carttotals[0]?.total || 0;

console.log("Cart Total:", carttotal);
const sample = await cartmodel.findOne({}, { price: 1 });
console.log("Sample price:", sample.price, "Type:", typeof sample.price);




        return res.status(200).json({
            error:false,
            success:true,
            data:productid    ,totalItems, carttotal
        })



    }
    catch(error){

        return res.status(500).json({
            error:true,
            success:false,
            message:error.message ||error
        })


    }



}


export async function DeleteCart(req,res){


    try{


        const id = req.query._id


        const deleteCartItem = await cartmodel.findByIdAndDelete(id)

        return res.status(200).json({
            error:false,
            success:true,
            data:deleteCartItem
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



