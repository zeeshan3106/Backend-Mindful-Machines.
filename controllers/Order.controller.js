import cartmodel from "../models/cart.model.js";
import OrderModel from "../models/Orders.model.js";


export async function OrderController(req,res){


    try{

        const sort = {createdAt:-1}

       const limit = 10
       const page = parseInt(req.query.page)

       console.log(page)

       const skip = (page-1)*limit

 
     const element = req.query.element

        const Ordersget = await OrderModel.find({

            $or:[
                { FullName:{$regex:element,$options:"i"}},
                 { Email:{$regex:element,$options:"i"}},
                  { HouseNo:{$regex:element,$options:"i"}},
                   { StreetNo:{$regex:element,$options:"i"}},
                    { City:{$regex:element,$options:"i"}},
                     { Country:{$regex:element,$options:"i"}},
                      {  PhoneNo:{$regex:element,$options:"i"}},
                       { Whatsapp:{$regex:element,$options:"i"}},
            ]



        }).sort(sort).skip(skip).limit(limit);


        const totalOrders = await OrderModel.countDocuments();


 const totalpages = Math.ceil(totalOrders/limit)






        return res.status(200).json({
            error:false,
            success:true,
            data:Ordersget,
            totalOrders,
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



export async function OrderPut(req,res){


    try{


        const { FullName, Email,HouseNo,StreetNo, City,Country, PhoneNo,  Whatsapp, PostalCode

        }=req.body


          const userId = req.jwtpayload.id


        const cartitems = await cartmodel.find({userId})


        const orders = cartitems.map( (product)=> ({


             title:product.title,
             price:product.price,
             discount:product.discount,
             color:product.color,
              weight:product.weight,
              category:product.category
        }))


        console.log(orders)


        const orderItems = await new OrderModel({

                   FullName, Email,HouseNo,StreetNo, City,Country, PhoneNo,  Whatsapp, PostalCode,
            userId:userId,

            items:orders,
            status:"Pending"




        })

        await orderItems.save();

  console.log(orderItems)














        return res.status(200).json({
            error:false,
            success:true,
       
            orders ,orderItems
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