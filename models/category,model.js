import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({

    category:{type:String},
    subcategory:{type:String}
},{timestamps:true})

const CategoryModel = mongoose.model('Category',CategorySchema)

export default CategoryModel