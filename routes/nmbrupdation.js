const EXPRESS=require('express');
const jwtValidator = require('../middleware/jwtValidator');
const ROUTER=EXPRESS.Router();
const otpGenerator=require('otp-generator');
const axios=require('axios')
const jwt=require('jsonwebtoken')
const Consumer=require('../dbmodels/customerdbmodel')

ROUTER.post('/',jwtValidator,(req,res)=>{
global.consumerId=req.user.id
const number=req.body.newNumber;
console.log(number)

Consumer.findOne({number})
.then(consumer=>{
    console.log(consumer)
    if(!consumer){
       
        OTP=otpGenerator.generate(5,{specialChars:false,alphabets:false,digits:true,upperCase:false});
        global.otp=OTP
        
        
        var path="https://www.fast2sms.com/dev/bulk?authorization=ZlyX9FNswNd2JnHknmzLreXKWMA37jSe375IfiC9PYWFNIzDkJvcjx7W5vOP&sender_id=FSTSMS&language=english&route=qt&numbers="+number+"&message=38860&variables={AA}&variables_values="+OTP
        axios.get(path)
        .then(console.log('number updation otp is send'))
        .catch(err=>{console.log(err)})
        
         
        jwt.sign({id:number},'thehell',{expiresIn:'3h'},(err,token)=>{
            if(err) throw err;
            res.json({token , login :true , newnum : true})
        })
    }
    else{
        res.json({msg:'Already Registered' , login : true , newnum : false})
    }
})
})

ROUTER.post('/nmbrupdationOtpValidator',jwtValidator,(req,res)=>{
const    newNumber=req.user.id;
const    generatedOTP=global.otp;
const    consumerId=global.consumerId;

if(req.body.otp===generatedOTP){
Consumer.findByIdAndUpdate(consumerId,{number:newNumber},{returnOriginal:false})
.then(Res=>{res.json({msg: "number changed" , newchngnum : true , login :false})})
.catch(err=>{console.log(err)})
}
else{
    res.json({msg: "INVALID OTP" , newchngnum : false , login : false})
}


})


module.exports=ROUTER






