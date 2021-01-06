const jwt=require('jsonwebtoken')
function jwtValidator(req,res,next){
    const token=req.header('x-auth-token');
 try{
        //Varify token
       const decoded=jwt.verify(token,'thehell');
        //Add user from payload  
      req.user=decoded;
      console.log(req.user)
      next()
    }
    catch(e){
      res.status(400).json({msg:'Token is not valid',login: false})
    }
}
module.exports=jwtValidator;