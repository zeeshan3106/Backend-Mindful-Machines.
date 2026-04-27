import ProductModel from "../models/Product.js"
import {v2 as cloudinary} from 'cloudinary'
import streamifier from "streamifier";

export async function ProductDetailElemnts(req, res){

    try{

    const {title,quantity,
         category ,subcategory , price, description, oldPrice, isFeatured, productStock, company, discount, color, weight, size,location
        ,
         functiontextone,
    functiontexttwo,
    functiontextthree,
    functiontextfour,
    functiontextfive,
    functiontextsix,
    functiontextseven,
    functiontexteight,
    functiontextnine,
    functiontextten,
    wytexttitleone,
    whytextdescriptionone,
      wytexttitletwo,
    whytextdescriptiontwo,
      wytexttitlethree,
    whytextdescriptithree,
      wytexttitlefour,
    whytextdescriptionfour,
    physicalaititle,
    pysicalaidescition,
     physicalaisubtitleone,
    pysicalaisubdescitionone,
     physicalaisubtitletwo,
    pysicalaisubdescitiontwo,
    safteytitle,
    safteydescription,
    safteycardtitleone,
    safteycarddescriptionone
    ,
    safteycardtitletwo,
    safteycarddescriptiontwo
    ,
    safteycardtitlethree,
    safteycarddescriptionthree
    ,
    safteycardtitlefour,
    safteycarddescriptionfour
    ,
    safteycardtitlefive,
    safteycarddescriptionfive
    ,
    safteycardtitlesix,
    safteycarddescriptionsix
  ,  digitalcardstitle,digitalcardsdescription,digitalcardssubtitleone,digitalcardssubdescriptionone,digitalcardssubtitletwo,digitalcardssubdescriptiontwo,digitalcardssubtitlethree,digitalcardssubdescriptionthree, digitalcardssubtitlefour,digitalcardssubdescriptionfour,digitalcardssubtitlefive,digitalcardssubdescriptionfive, digitalcardssubtitlesix,digitalcardssubdescriptionsix,digitalcardssubtitleseven,digitalcardssubdescriptionseven,digitalcardssubtitleeight,digitalcardssubdescriptioneight,digitalcardssubtitlenine,digitalcardssubdescriptionnine,digitalcardssubtitleten,digitalcardssubdescriptionten
    ,MaterialFinish,Headline,Pricing,Processing,VisionSystem,Dexterity,Interaction,Sensors,BatteryLife,Charging
        
       ,SecondID 
        }= 
         req.body   




console.log(req.files)
         
 const filePath = req.files.Slider1[0].path;


        const result = await cloudinary.uploader.upload(filePath, {
  folder: "Slider"
});

const Slider1 = result.secure_url;


const filepath2 = req.files.Slider2[0].path

const result2 = await cloudinary.uploader.upload(filepath2 , {folder:"Slider"})
const Slider2 = result2.secure_url;


const filepath3 = req.files.Slider3[0].path

const result3 = await cloudinary.uploader.upload(filepath3 , {folder:"Slider"})
const Slider3 = result3.secure_url;



const filepath4 = req.files.Slider4[0].path

const result4 = await cloudinary.uploader.upload(filepath4 , {folder:"Slider"})
const Slider4 = result4.secure_url;

const filepath5 = req.files.Slider5[0].path

const result5 = await cloudinary.uploader.upload(filepath5 , {folder:"Slider"})
const Slider5 = result5.secure_url;



const filepath6 = req.files.Slider6[0].path

const result6 = await cloudinary.uploader.upload(filepath6 , {folder:"Slider"})
const Slider6 = result6.secure_url;


const filepath7 = req.files.Slider7[0].path

const result7 = await cloudinary.uploader.upload(filepath7 , {folder:"Slider"})
const Slider7 = result7.secure_url;



const filepath8 = req.files.Slider8[0].path

const result8 = await cloudinary.uploader.upload(filepath8 , {folder:"Slider"})
const Slider8 = result8.secure_url;


const filepath9 = req.files.Slider9[0].path

const result9 = await cloudinary.uploader.upload(filepath9 , {folder:"Slider"})
const Slider9 = result9.secure_url;


const filepath10 = req.files.Slider10[0].path

const result10 = await cloudinary.uploader.upload(filepath10 , {folder:"Slider"})
const Slider10 = result10.secure_url;


         

const functionfilepath1 = req.files?.function1[0]?.path

const functionresult1 = await cloudinary.uploader.upload(functionfilepath1 , {folder:"function"})


const function1 = functionresult1.secure_url;


const functionfilepath2 = req.files?.function2[0]?.path

const functionresult2 = await cloudinary.uploader.upload(functionfilepath2 , {folder:"function"})
const function2 = functionresult2.secure_url;


const functionfilepath3 = req.files?.function3[0]?.path

const functionresult3 = await cloudinary.uploader.upload(functionfilepath3 , {folder:"function"})
const function3 = functionresult3?.secure_url;



const functionfilepath4 = req.files?.function4[0]?.path

const functionresult4 = await cloudinary.uploader.upload(functionfilepath4 , {folder:"function"})
const function4 = functionresult4.secure_url;

const functionfilepath5 = req.files?.function5[0]?.path

const functionresult5 = await cloudinary.uploader.upload(functionfilepath5 , {folder:"function"})
const function5 = functionresult5.secure_url;



const functionfilepath6 = req.files?.function6[0]?.path

const functionresult6 = await cloudinary.uploader.upload(functionfilepath6 , {folder:"function"})
const function6 = functionresult6.secure_url;


const functionfilepath7 = req.files?.function7[0]?.path

const functionresult7 = await cloudinary.uploader.upload(functionfilepath7 , {folder:"function"})
const function7 = functionresult7.secure_url;



const functionfilepath8 = req.files?.function8[0]?.path

const functionresult8 = await cloudinary.uploader.upload(functionfilepath8 , {folder:"function"})
const function8 = functionresult8.secure_url;


const functionfilepath9 = req.files?.function9[0]?.path

const functionresult9 = await cloudinary.uploader.upload(functionfilepath9 , {folder:"function"})
const function9 = functionresult9.secure_url;


const functionfilepath10 = req.files?.function10[0]?.path

const functionresult10 = await cloudinary.uploader.upload(functionfilepath10 , {folder:"function"})
const function10 = functionresult10.secure_url;


const whyfilepath1 = req.files?. whyImage1[0]?.path

const whyresult1 = await cloudinary.uploader.upload(whyfilepath1 , {folder:"whyImage"})


const  whyImage1 = whyresult1.secure_url;


const whyfilepath2 = req.files?. whyImage2[0]?.path

const whyresult2 = await cloudinary.uploader.upload(whyfilepath2 , {folder:"whyImage"})
const  whyImage2 = whyresult2.secure_url;


const whyfilepath3 = req.files?. whyImage3[0]?.path

const whyresult3 = await cloudinary.uploader.upload(whyfilepath3 , {folder:"whyImage"})
const  whyImage3 = whyresult3?.secure_url;



const whyfilepath4 = req.files?. whyImage4[0]?.path

const whyresult4 = await cloudinary.uploader.upload(whyfilepath4 , {folder:"whyImage"})
const  whyImage4 = whyresult4.secure_url;


const physicalImagepath1 = req.files?. physicalImage1[0]?.path

constphysicalresult1 = await cloudinary.uploader.upload(physicalImagepath1 , {folder:"physicalImage"})


const  physicalImage1 =physicalresult1.secure_url;


const physicalImagepath2 = req.files?. physicalImage2[0]?.path

const physicalresult2 = await cloudinary.uploader.upload(physicalImagepath2 , {folder:"physicalImage"})
const  physicalImage2 =physicalresult2.secure_url;



const safteyImagepath1 = req.files?. safteyImage1[0]?.path

const safteyresult1 = await cloudinary.uploader.upload(safteyImagepath1 , {folder:"safteyImage"})


const  safteyImage1 =physicalresult1.secure_url;




const digitalCardImagepath1 = req.files?.digitalCard1[0]?.path

const digitalCardImageresult1 = await cloudinary.uploader.upload(digitalCardImagepath1 , {folder:"digitalCard"})


const digitalCard1 = digitalCardImageresult1.secure_url;


const digitalCardImagepath2 = req.files?.digitalCard2[0]?.path

const digitalCardImageresult2 = await cloudinary.uploader.upload(digitalCardImagepath2 , {folder:"digitalCard"})
const digitalCard2 = digitalCardImageresult2.secure_url;


const digitalCardImagepath3 = req.files?.digitalCard3[0]?.path

const digitalCardImageresult3 = await cloudinary.uploader.upload(digitalCardImagepath3 , {folder:"digitalCard"})
const digitalCard3 = digitalCardImageresult3?.secure_url;



const digitalCardImagepath4 = req.files?.digitalCard4[0]?.path

const digitalCardImageresult4 = await cloudinary.uploader.upload(digitalCardImagepath4 , {folder:"digitalCard"})
const digitalCard4 = digitalCardImageresult4.secure_url;

const digitalCardImagepath5 = req.files?.digitalCard5[0]?.path

const digitalCardImageresult5 = await cloudinary.uploader.upload(digitalCardImagepath5 , {folder:"digitalCard"})
const digitalCard5 = digitalCardImageresult5.secure_url;



const digitalCardImagepath6 = req.files?.digitalCard6[0]?.path

const digitalCardImageresult6 = await cloudinary.uploader.upload(digitalCardImagepath6 , {folder:"digitalCard"})
const digitalCard6 = digitalCardImageresult6.secure_url;


const digitalCardImagepath7 = req.files?.digitalCard7[0]?.path

const digitalCardImageresult7 = await cloudinary.uploader.upload(digitalCardImagepath7 , {folder:"digitalCard"})
const digitalCard7 = digitalCardImageresult7.secure_url;



const digitalCardImagepath8 = req.files?.digitalCard8[0]?.path

const digitalCardImageresult8 = await cloudinary.uploader.upload(digitalCardImagepath8 , {folder:"digitalCard"})
const digitalCard8 = digitalCardImageresult8.secure_url;


const digitalCardImagepath9 = req.files?.digitalCard9[0]?.path

const digitalCardImageresult9 = await cloudinary.uploader.upload(digitalCardImagepath9 , {folder:"digitalCard"})
const digitalCard9 = digitalCardImageresult9.secure_url;


const digitalCardImagepath10 = req.files?.digitalCard10[0]?.path

const digitalCardImageresult10 = await cloudinary.uploader.upload(digitalCardImagepath10 , {folder:"digitalCard"})
const digitalCard10 = digitalCardImageresult10.secure_url;



     













         console.log('Body Elements',req.body)

         const PRoductdetailadded = new ProductModel({
            title,quantity,
         category ,subcategory , price, description, oldPrice, isFeatured, productStock, company, discount, color, weight, size,location
      
      ,
         function1,
    function2,
    function3,
    function4,
    function5,
    function6,
    function7,
    function8,
    function9,
    function10,



    wytexttitleone,
    whytextdescriptionone,
      wytexttitletwo,
    whytextdescriptiontwo,
      wytexttitlethree,
    whytextdescriptithree,
      wytexttitlefour,
    whytextdescriptionfour,

    whyImage1,whyImage2,whyImage3,whyImage4,
    






    physicalaititle,
    pysicalaidescition,
     physicalaisubtitleone,
    pysicalaisubdescitionone,
     physicalaisubtitletwo,
    pysicalaisubdescitiontwo,

    physicalImage1,physicalImage2,





    safteytitle,
    safteydescription,
    safteycardtitleone,
    safteycarddescriptionone
    ,
    safteycardtitletwo,
    safteycarddescriptiontwo
    ,
    safteycardtitlethree,
    safteycarddescriptionthree
    ,
    safteycardtitlefour,
    safteycarddescriptionfour
    ,
    safteycardtitlefive,
    safteycarddescriptionfive
    ,
    safteycardtitlesix,
    safteycarddescriptionsix


   , safteyImage1







  ,  digitalcardstitle,digitalcardsdescription,digitalcardssubtitleone,digitalcardssubdescriptionone,digitalcardssubtitletwo,digitalcardssubdescriptiontwo,digitalcardssubtitlethree,digitalcardssubdescriptionthree, digitalcardssubtitlefour,digitalcardssubdescriptionfour,digitalcardssubtitlefive,digitalcardssubdescriptionfive, digitalcardssubtitlesix,digitalcardssubdescriptionsix,digitalcardssubtitleseven,digitalcardssubdescriptionseven,digitalcardssubtitleeight,digitalcardssubdescriptioneight,digitalcardssubtitlenine,digitalcardssubdescriptionnine,digitalcardssubtitleten,digitalcardssubdescriptionten
   
  
     ,digitalCardImage1,digitalCardImage2
     ,digitalCardImage3,digitalCardImage4
     ,digitalCardImage5,digitalCardImage6
     ,digitalCardImage7,digitalCardImage8
     ,digitalCardImage9,digitalCardImage10
     

  
  
  ,MaterialFinish,Headline,Pricing,Processing,VisionSystem,Dexterity,Interaction,Sensors,BatteryLife,Charging, SecondID
   
    


       ,Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8, Slider9, Slider10
  })
        console.log(PRoductdetailadded)

         await PRoductdetailadded.save();


         return res.status(200).json({
            error:false,
            success:true,
            data:PRoductdetailadded
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



export async function GetProductInformation(req,res)
{

  try{

    const proId = "69eb8d7915828899b4e3013e"

    const Productinfo = await ProductModel.find({_id:proId})

    console.log(Productinfo)

    return res.status(200).json({
      error:false,
      success:true,
      data:Productinfo
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