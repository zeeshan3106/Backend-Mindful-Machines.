import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.MONGOD_URL){

   throw new Error(
    "Please Enter MongoDB URL in .env File")
   
}

async function Connencted(){
    
    try{
        await mongoose.connect(process.env.MONGOD_URL)
        console.log("Database Sucessfully Connected Properly")
    }
    catch(error){
        console.log("Database Connenction making error ", error)
        process.exit(1)
    }



}

export default Connencted