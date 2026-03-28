import ContactModel from "../models/ContactUs.js";
import FeedModel from "../models/Feedback.js";
import OrderModel from "../models/Orders.model.js";
import ProductModel from "../models/Product.js";
import signupmodel from "../models/signup.js";


export async function Dashboard(req,res){


    try{


        

        
       // Product //
        const productsdashboard = await ProductModel.find();
        const productscounts = await ProductModel.countDocuments();


       

        //Orders//
        const orderdashboard = await OrderModel.find();
        const ordercounts = await OrderModel.countDocuments();

        //Users//
        const usersdashboard = await signupmodel.find();
        const userscount = await signupmodel.countDocuments();

        //Contaactus

        const contctdashboard = await ContactModel.find();
        const contctcount = await ContactModel.countDocuments();

        //Feedbacks

        const Feeddashboard = await FeedModel.find();
        const feedcounts = await FeedModel.countDocuments();
        



   const result = await ProductModel.aggregate([{

    $group:{
        _id:null,
        totalPrice:{$sum:"$price"}

    }

   }])


    const totalPrice = result[0].totalPrice



    const piechat = await ProductModel.aggregate([

        {$group:{
            _id:"$category",
            value:{$sum:"$price"}



        }}])

                







    
        return res.status(200).json({
            error:false,
            success:true,
    
           productscounts,
           ordercounts,
           userscount,
           totalPrice:totalPrice.toLocaleString(),
           piechat:piechat,
      
        
        }
    
    
     
)


    }

    


    catch(error){

        return res.status(500).json({

            error:true,
            success:false,
            message:error.message || error


        })

    }







}








