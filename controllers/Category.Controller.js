import mongoose from "mongoose";
import CategoryModel from "../models/category,model.js";
import ProductModel from "../models/Product.js";

export async function CategoryController(req,res){


    try{
        const {category,subcategory}=req.body

        const PutCategory = new CategoryModel({


category,subcategory

        })

      const DBSaved = await PutCategory.save()

      console.log(DBSaved)

      return res.status(200).json({
        error:false,
        success:true,
        data:DBSaved
      })


    }
    catch{error}{
        return res.status(500).kson({
            error:true,
            success:false,
            message:error || error
        })
    }






}



export async function GetCategories(req,res){

    try{

        const GetAllCategories = await CategoryModel.find({})

        return res.status(200).json({
            error:false,
            success:true,
            data:GetAllCategories
        })

    }
    catch(error){

        return res.status(500).json({
            error:true,
            success:false,
            message:error || error
        })


    }




}




export async function GetByCategory(req,res){


    try{

         const categoryid = req.query.categoryid;
         const sortingId = req.query.sortingId
         const pageid = req.query.page

       

console.log("sortingId:", `"${sortingId}"`);
console.log("Does it match Name A to Z?", sortingId === "Name A to Z");


         const limitid = 8
         const page = pageid

         const skip=(page-1)*limitid

         const totalpage = 


console.log(sortingId)

     let sorted = {ceeatedAt:-1};

         if (sortingId === "Latest to Oldest")
         {   
            sorted = {createdAt:-1}
         }
         if (sortingId=== "Oldest to Latest")
         {   
           sorted = {createdAt:1}
         }
         if (sortingId=== "Name A to Z")
         {   
           sorted = {price:1}

         }
         if (sortingId=== "Name Z to A")
         {   
            sorted = {price:-1}
         }

         console.log(sortingId)

  
        const getbycategory = await ProductModel.find({category:categoryid})
        .sort(sorted)
        .skip(skip).limit(limitid)
        const countfilter =  await ProductModel.find({category:categoryid}).countDocuments()

        const totalPages = Math.ceil(countfilter/limitid)
        console.log(totalPages)
console.log('totalPages:', totalPages);







        return res.status(200).json({
            success:true,
            error:false,
            data:getbycategory,
            countfilter,
            totalPages
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

export async function GetByCategoryhome(req,res){


    try{

         const categoryid = req.query.categoryid;
         const sortingId = req.query.sortingId

       

console.log("sortingId:", `"${sortingId}"`);
console.log("Does it match Name A to Z?", sortingId === "Name A to Z");


         const limitid = 20
         const page = 1

         const skip=(page-1)*limitid


console.log(sortingId)

     let sorted = {ceeatedAt:-1};

         if (sortingId === "Latest to Oldest")
         {   
            sorted = {createdAt:-1}
         }
         if (sortingId=== "Oldest to Latest")
         {   
           sorted = {createdAt:1}
         }
         if (sortingId=== "Name A to Z")
         {   
           sorted = {price:1}

         }
         if (sortingId=== "Name Z to A")
         {   
            sorted = {price:-1}
         }

         console.log(sortingId)

  
        const getbycategory = await ProductModel.find({category:categoryid})
        .sort(sorted)
        .skip(skip).limit(limitid)
        const countfilter =  await ProductModel.find({category:categoryid}).countDocuments()

        const totalPages = Math.ceil(countfilter/limitid)
        console.log(totalPages)
console.log('totalPages:', totalPages);







        return res.status(200).json({
            success:true,
            error:false,
            data:getbycategory,
            countfilter,
            totalPages
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


export async function GetByCategorylatest(req,res){


    try{

         const categoryid = req.query.categoryid;
         const sortingId = req.query.sortingId

       

console.log("sortingId:", `"${sortingId}"`);
console.log("Does it match Name A to Z?", sortingId === "Name A to Z");


         const limitid = 20
         const page = 1

         const skip=(page-1)*limitid


console.log(sortingId)

     let sorted = {ceeatedAt:-1};

         if (sortingId === "Latest to Oldest")
         {   
            sorted = {createdAt:-1}
         }
         if (sortingId=== "Oldest to Latest")
         {   
           sorted = {createdAt:1}
         }
         if (sortingId=== "Name A to Z")
         {   
           sorted = {price:1}

         }
         if (sortingId=== "Name Z to A")
         {   
            sorted = {price:-1}
         }

         console.log(sortingId)

  
        const getbycategory = await ProductModel.find({category:categoryid})
        .sort({createdAt:-1})
        .skip(skip).limit(limitid)
        const countfilter =  await ProductModel.find({category:categoryid}).countDocuments()

        const totalPages = Math.ceil(countfilter/limitid)
        console.log(totalPages)
console.log('totalPages:', totalPages);







        return res.status(200).json({
            success:true,
            error:false,
            data:getbycategory,
            countfilter,
            totalPages
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









export async function SearchPRoducts(req, res){


    try{

        const demand = req.query.searchId

        if(!demand){
            return ers.status(400).json({
                error:true,
                success:false,
                message:"Put Any Element in Search Bar"
            })
        }


        const Searching = await ProductModel.find({

            $or:[
                {title:{$regex:demand, $options:"i"} },
                     {category:{$regex:demand, $options:"i"}},
                    {company:{$regex:demand, $options:"i"}},
                     { description:{$regex:demand, $options:"i"}},
                       {price:{$regex:demand, $options:"i"}},
                              {oldPrice:{$regex:demand, $options:"i"} },
                               { location:{$regex:demand, $options:"i"}},
                                  {subcategory:{$regex:demand, $options:"i"}},
                                     {weight:{$regex:demand, $options:"i"}},
                                    {  size:{$regex:demand, $options:"i"}},
                                      {  discount:{$regex:demand, $options:"i"} },
                                       {  quantity:{$regex:demand, $options:"i"} },
                   
                   

                
            ]
        })


        const count = await Searching.length







        return res.status(200).json({
            error:false,
            success:true,
            data:Searching,
            count
            

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

export async function SearchPRoductsHome(req, res){


    try{

        const demand = req.query.searchId

        if(!demand){
            return ers.status(400).json({
                error:true,
                success:false,
                message:"Put Any Element in Search Bar"
            })
        }


        const Searching = await ProductModel.find({

            $or:[
                {title:{$regex:demand, $options:"i"} },
                     {category:{$regex:demand, $options:"i"}},
                    {company:{$regex:demand, $options:"i"}},
                     { description:{$regex:demand, $options:"i"}},
                       {price:{$regex:demand, $options:"i"}},
                              {oldPrice:{$regex:demand, $options:"i"} },
                               { location:{$regex:demand, $options:"i"}},
                                  {subcategory:{$regex:demand, $options:"i"}},
                                     {weight:{$regex:demand, $options:"i"}},
                                    {  size:{$regex:demand, $options:"i"}},
                                      {  discount:{$regex:demand, $options:"i"} },
                                       {  quantity:{$regex:demand, $options:"i"} },
                   
                   

                
            ]
        })


        const count = await Searching.length







        return res.status(200).json({
            error:false,
            success:true,
            data:Searching,
            count
            

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


















































export async function DeleteCategory(req,res){


    try{

        const DeleteCetegoryItems = await CategoryModel.find({});

        return res.status(200).json({
            error:false,
            success:true,
            data:DeleteCetegoryItems

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