import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({

    title:{
        type:String,
     
    },
    description:{
        type:String,
},
category:{
    type:String,
  
   
},
subcategory:{
    type:String,
   
},
price:{
    type:String,
  
   
},
oldPrice:{
    type:String,
    
},
isFeatured:{
    type:String,

},
productStock:{
    type:String
},
company:{
    type:String
},
discount:{
    type:String
},
color:{
    type:String
},
weight:{
    type:String
},
size:{
    type:String
},
location:{
    type:String
},
quantity:{
    type:String
},

ratings:{type:Number},
avaiability:{type:String},
available:{type:String},

image:{
   
}

,functiontextone:{type:String},
    functiontexttwo:{type:String},
    functiontextthree:{type:String},
    functiontextfour:{type:String},
    functiontextfive:{type:String},
    functiontextsix:{type:String},
    functiontextseven:{type:String},
    functiontexteight:{type:String},
    functiontextnine:{type:String},
    functiontextten:{type:String},
    wytexttitleone:{type:String},
    whytextdescriptionone:{type:String},
      wytexttitletwo:{type:String},
    whytextdescriptiontwo:{type:String},
      wytexttitlethree:{type:String},
    whytextdescriptithree:{type:String},
      wytexttitlefour:{type:String},
    whytextdescriptionfour:{type:String},
    physicalaititle:{type:String},
    pysicalaidescition:{type:String},
     physicalaisubtitleone:{type:String},
    pysicalaisubdescitionone:{type:String},
     physicalaisubtitletwo:{type:String},
    pysicalaisubdescitiontwo:{type:String},
    safteytitle:{type:String},
    safteydescription:{type:String},
    safteycardtitleone:{type:String},
    safteycarddescriptionone:{type:String}
    ,
    safteycardtitletwo:{type:String},
    safteycarddescriptiontwo:{type:String}
    ,
    safteycardtitlethree:{type:String},
    safteycarddescriptionthree:{type:String}
    ,
    safteycardtitlefour:{type:String},
    safteycarddescriptionfour:{type:String}
    ,
    safteycardtitlefive:{type:String},
    safteycarddescriptionfive:{type:String}
    ,
    safteycardtitlesix:{type:String},
    safteycarddescriptionsix:{type:String}
    ,
     digitalcardstitle:{type:String},
digitalcardsdescription:{type:String},
 digitalcardssubtitleone:{type:String},
digitalcardssubdescriptionone:{type:String}
,
 digitalcardssubtitletwo:{type:String},
digitalcardssubdescriptiontwo:{type:String}

,
 digitalcardssubtitlethree:{type:String},
digitalcardssubdescriptionthree:{type:String}
,
 digitalcardssubtitlefour:{type:String},
digitalcardssubdescriptionfour:{type:String}
,
 digitalcardssubtitlefive:{type:String},
digitalcardssubdescriptionfive:{type:String}
,
 digitalcardssubtitlesix:{type:String},
digitalcardssubdescriptionsix:{type:String}
,
 digitalcardssubtitleseven:{type:String},
digitalcardssubdescriptionseven:{type:String}
,
 digitalcardssubtitleeight:{type:String},
digitalcardssubdescriptioneight:{type:String}
,
 digitalcardssubtitlenine:{type:String},
digitalcardssubdescriptionnine:{type:String}
,
 digitalcardssubtitleten:{type:String},
digitalcardssubdescriptionten:{type:String}
  ,
MaterialFinish:{type:String},Headline:{type:String},
Pricing:{type:String},Processing:{type:String},
VisionSystem:{type:String},Dexterity:{type:String},
Interaction:{type:String},Sensors:{type:String},
BatteryLife:{type:String},Charging:{type:String},
SecondID:{type:String}






},


{timestamps:true}


)

const ProductModel=mongoose.model('ProductsUpload',productSchema)

export default ProductModel