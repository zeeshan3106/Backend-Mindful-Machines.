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
   
},
Slider1:{type:String},
Slider2:{type:String}
,


Slider1:{type:String},
Slider2:{type:String},
Slider3:{type:String},
Slider4:{type:String},
Slider5:{type:String},
Slider6:{type:String},
Slider7:{type:String},
Slider8:{type:String},
Slider9:{type:String},
Slider10:{type:String}


,
 function1:{type:String},
    function2:{type:String},
    function3:{type:String},
    function4:{type:String},
    function5:{type:String},
    function6:{type:String},
    function7:{type:String},
    function8:{type:String},
    function9:{type:String},
    function10:{type:String},

whyImage1:{type:String},
 whyImage2:{type:String},
 whyImage3:{type:String},
 whyImage4:{type:String},
    

    wytexttitleone:{type:String},
    whytextdescriptionone:{type:String},
      wytexttitletwo:{type:String},
    whytextdescriptiontwo:{type:String},
      wytexttitlethree:{type:String},
    whytextdescriptithree:{type:String},
      wytexttitlefour:{type:String},
    whytextdescriptionfour:{type:String},

    physicalImage1:{type:String},physicalImage2:{type:String},
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
safteyImage:{type:String},


    
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




    digitalCardImage1:{type:String},
  digitalCardImage2:{type:String},
     digitalCardImage3:{type:String},
     digitalCardImage4:{type:String},
     digitalCardImage5:{type:String},
     digitalCardImage6:{type:String},
     digitalCardImage7:{type:String},
     digitalCardImage8:{type:String},
     digitalCardImage9:{type:String},
     digitalCardImage10:{type:String}
,
heroImage:{type:String},








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