import jwt from "jsonwebtoken"


const verifyuser = (req,res,next)=>{


    const figuretoken = req.headers.authorization
    if(!figuretoken){
        return res.status(401).json({
            message:"Token not found"})}





  
const token = req.headers.authorization.split(' ')[1];

    if (!token){
        return res.status(401).json({
            message:"No token Found..."
        })
    }


    try{

      const tokenpayoad =  jwt.verify(token, 'secret123')
      console.log(tokenpayoad)


      req.jwtpayload = tokenpayoad;
      next();




    }
    catch(error){
        res.status(401).json({

           message:"Invalid Token"
        })
    }




}

export default verifyuser