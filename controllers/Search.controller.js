import ProductModel from "../models/Product.js"


export async function SearchBar(req,res){


    try{
        
        const searchid = req.query.searchid

        const page = 1
        const limit = 10
        const skip = (page-1)*limit

        console.log(searchid)

        const searhedelements = await ProductModel.find({

            $or:[
                {title:{$regex:searchid, $options:"i"}},
                {description:{$regex:searchid, $options:"i"}},
                {ratings:{$regex:searchid,$options:"i"}},
                {avaiability:{$regex:searchid, $options:"i"}},
                {ratings:{$regex:searchid, $options:"i"}},
                {quantity:{$regex:searchid, $options:"i"}},
                {location:{$regex:searchid, $options:"i"}},
                {size:{$regex:searchid, $options:"i"}},
                {weight:{$regex:searchid, $options:"i"}}
                ,{color:{$regex:searchid, $options:"i"}},
                {discount:{$regex:searchid, $options:"i"}}
                ,{company:{$regex:searchid, $options:"i"}}
                ,{productStock:{$regex:searchid , $options:"i"}},
                {isFeatured:{$regex:searchid, $options:"i"}},
                {oldPrice:{$regex:searchid , $options:"i"}}
                ,{category:{$regex:searchid, $options:"i"}},
                {subcategory:{$regex:searchid, $options:"i"}}
                ,{price:{$regex:searchid, $options:"i"}}
            ]



        }).skip(skip).limit(limit)

        console.log(searhedelements)



        return res.status(200).json({
            error:true,
            success:false,
            data:searhedelements

        })

        

    }
    catch(error){


        return res.status(500).json({
            error:true,
            success:false,
            message:error.message || error
        })
        console.log(error)

    }



}


