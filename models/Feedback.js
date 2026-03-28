import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema ({

 
    userId: {
      type: mongoose.Schema.Types.ObjectId,
          
      required: true       
    },

    Name:{

        type:String
    },
    Email:{
        type:String
    },
    Message:{
        type:String
    }





})

const FeedModel = mongoose.model("Feedbacks",FeedbackSchema)
export default FeedModel