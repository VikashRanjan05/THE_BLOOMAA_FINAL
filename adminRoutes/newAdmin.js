const EXPRESS=require('express')
const ROUTER=EXPRESS.Router();
const Admin=require('../dbmodels/admindbmodel')
const jwtValidator=require('../middleware/jwtValidator')
const jwt=require('jsonwebtoken')
const otpGenerator=require('otp-generator')
const axios=require('axios')




ROUTER.post('/ragister',jwtValidator,(req,res)=>{
    const _id=req.user.id;
    console.log(_id)
     Admin.findOne({_id})

     .then(admin=>{
        if(admin){
           console.log(admin)
           const number="7903657891";
           global.OTP2=otpGenerator.generate(5,{upperCase:false,specialChars:false,alphabets:false,digits:true});
           const GENERATEDotp=global.OTP2;
           var path= "https://www.fast2sms.com/dev/bulk?authorization=ZlyX9FNswNd2JnHknmzLreXKWMA37jSe375IfiC9PYWFNIzDkJvcjx7W5vOP&sender_id=FSTSMS&language=english&route=qt&numbers="+number+"&message=38860&variables={AA}&variables_values="+GENERATEDotp
 axios.get(path)
 .then( (Response)=> {console.log('OTP IS SEND')})
 .catch(err=>{console.log("this is error")});
 
 jwt.sign({id:_id},"thehell",{expiresIn:'3h'},(err,token)=>{
     if(err) throw err;
     res.json({token , "newAdd" : true})
 })
       
        }else{
            res.json({msg:"admin is not found" , "newAdd" : false})
        }
        
     }).catch(Err=>{console.log(Err)})


 
})

ROUTER.post('/ragisterotpvalidator',jwtValidator,(req,res)=>{
  const otp=req.body.otp;
  const id2=req.user.id;
  const gENERATEOTp=global.OTP2;
  if(gENERATEOTp===otp){
   jwt.sign({id:id2},"thehell",{expiresIn:'3h'},(err,token)=>{
       if(err) throw err;
       res.json({token , "newAddOtp" : true})
   })
  }
  else{
      res.json({msg:"PLEASE ENTER A VALID OTP" , "newAddOtp" : false})
  }
})



ROUTER.post('/ragisteringnewadmin',jwtValidator,(req,res)=>{
   const newName=req.body.name;
   const newNumber=req.body.number;
   const newEmail=req.body.email;
   const newPassword=req.body.password;
   const newAdmin=new Admin({ 
   name:newName,
   number:newNumber,
   email:newEmail,
   password:newPassword
})
   newAdmin.save()
   .then(res.json({msg:"NEW ADMIN IS ADDED" , "added" : true}))
   .catch(Err=>{res.json(Err)})
})
module.exports=ROUTER
