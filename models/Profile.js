import mongoose from "mongoose";


const ProfileSchema = new mongoose.Schema({

 Name:{type:String},
    Email:{type:String},
    Phone:{type:String},
    Address:{type:String},
    Nationality:{type:String},
    DOB:{type:String},
    UserName:{type:String},
    LastLogin:{type:String},
    Image:{type:String},
       CurrentDevice:{type:String},
        DeviceName:{type:String},

      Country:{type:String},

         State:{type:String},

           PostalCode:{type:String}, 
            Street:{type:String},
              Landmark:{type:String},
               
                 ProductCategory:{type:String},
                    Language:{type:String},
                      Currency:{type:String},
                         Reigion:{type:String},
                          Facebook:{type:String},
              Instagram:{type:String},
              Youtube:{type:String},
              Linkedin:{type:String}








    
},{timestamps:true})

const ProfileModel = mongoose.model('Profile',ProfileSchema)

export default ProfileModel