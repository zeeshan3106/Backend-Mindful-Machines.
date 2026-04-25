import ProductModel from "../models/Product.js"

export async function ProductDetailElemnts(req, res){

    try{

    const {title,quantity,image,
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
         console.log('Body Elements',req.body)

         const PRoductdetailadded = new ProductModel({
            title,quantity,image,
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
    ,MaterialFinish,Headline,Pricing,Processing,VisionSystem,Dexterity,Interaction,Sensors,BatteryLife,Charging, SecondID
       
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