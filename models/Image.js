import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({

    Image:{type:String},
    Name:{type:String},
    Dept:{type:String},
    Age:{type:String}




},{timestamps:true})

const ImageModel = mongoose.model('Images',ImageSchema)

export default ImageModel