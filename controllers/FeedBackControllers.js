import FeedModel from "../models/Feedback.js"


export async function FeedController(req, res){
try{
        
    const {Name, Email, Message}=req.body


    const Feedback = new FeedModel({
    userId,  
        Name, Email, Message


    })
    await Feedback.save();

    return res.status(200).json({
        error:false,
        success:true,
        message:"3rd Done!"
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



export async function Feedbacks(req,res){

    try{

        const limit = 20
        const pages = 1
        const skip = (pages-1)*limit
      

        const Feeds = await FeedModel.find().skip(skip).limit(limit)
        const FeedbackCount1 = await FeedModel.countDocuments();
    if(!Feeds){
        return res.status(100).json({
            error:false,
            success:true,
            message:"No User in database"
        })
    }


    return res.status(200).json({


        success:true,
        error:false,
        
        messsage:"All Feddbacks are here and thier timings as well",
data:Feeds,
FeedbackCount
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


export async function DSAFeedsGEt (req ,res){


    try{



    const DSAFeedback = await FeedModel.find();

    console.log("Data Found Properly...!")

    const array = []
array.push(200)
    array.push(300)
    array.push(400)
    array.push(500)
    array.push(600)

const  apple =   console.log(array[2])

array.pop()
array.pop()
array.pop()
array.pop()

console.log(array)



array[0]=1
array[1]=2
array[2]=3
array[3]=4
array[4]=5


array[10]=6


console.log(array)


let arr = [12,122,3743,73473]

let sum = 0;

for (let i=0; i<arr.length; i++){
    sum = sum+arr[i]
}


console.log(sum)


  let Maxinarray = [90,50,23,45,400,56]
   let max = Maxinarray[0]

    for (let i = 1; i<=Maxinarray.length ; i++ ){
  if(max<Maxinarray[i]){

    max=Maxinarray[i]


  }

    }

    console.log(max)

   let Secondndmax = [20, 50 , 60 , 70 , 60, 90 ]

    let fmax = Math.max(Secondndmax[0],Secondndmax[1])
   let smax =  Math.min(Secondndmax[0],Secondndmax[1])


    for (let i = 0 ; i<Secondndmax.length; i++){

        if(Secondndmax[i]>fmax){

            smax=fmax
            fmax=Secondndmax[i]
        }

    else if(Secondndmax[i]>smax){

        smax=Secondndmax[i]


    }



    }


/*  const reverse = [50,40,30,20,10]

  let temp = []
    let j=0;

    for (let i = reverse.length-1; i>=0; i++ ){

          temp[j]=reverse[i]
          j++


    } */

     
const arraytoarrange = [0,1,0,1,1,0,0,1]


let i=0;
let j=0;


  for (let i = 0; i<=arraytoarrange.length ; i++){

    if(arraytoarrange[i]==0){

        let temporary = arraytoarrange[i];
        arraytoarrange[i]=arraytoarrange[j];
        arraytoarrange[j]=temporary
        j++

    }



  }

  console.log(arraytoarrange)




  const ar = [0,0,0,0,1,1,0,0,0]

  let c=0;
  let d = 0;

  for (let i = 0 ; i<=ar.length; i++){


    if(ar[i]==0){

      let  temp= ar[i];
        ar[i]=ar[d];
        ar[d]=temp
    d++


    }
  }

  const variable = 3

let condition = 2

  if (variable=== 3){
     condition = 4
  }

  if (variable ===4 ){
  condition = 6
  }











  console.log(ar)

console.log(fmax)
return res.status(200).json({
        error:false,
        success:true,
       sum,smax,fmax,ar,condition
    })




    }

    catch(error){
        return res.status(500).json({
            error :true,
            success:false,
            message:error.message || error
        })
    }






}



export async function FeedSearch (req ,res){

    try{

        const element = req.query.element
        const searchedfeeds = await FeedModel.find({

            $or:[
                {Name:{$regex:element , $options:"i"}},
                  {Email:{$regex:element , $options:"i"}},
                    {Message:{$regex:element , $options:"i"}}
            ]



        })

        const FeedbackCount =searchedfeeds.length



        return res.status(200).json({
            error:false,
            success:true,
            data:searchedfeeds,
            FeedbackCount
        })









    }
    catch(error){
          return res.status(500).json({
            error:false,
            success:true,
           message:error.message || error
        })



    }




}