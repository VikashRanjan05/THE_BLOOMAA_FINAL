const EXPRESS=require('express');
const ROUTER=EXPRESS.Router();
const axios=require('axios').default;
const otpGeneratorPassRcvry = require('otp-generator');
const Consumer=require("../dbmodels/customerdbmodel");
const jwt=require('jsonwebtoken');
const jwtValidator = require('../middleware/jwtValidator');

ROUTER.post('/',(req,res)=>{
const {number}=req.body;
global.number=number
Consumer.findOne({number}).then(consumer=>{
    if(consumer){
        global.OTPPassRcvry=otpGeneratorPassRcvry.generate(5,{upperCase:false,specialChars:false,digits:true,alphabets:false})
    const PassRcvryOTP=global.OTPPassRcvry;
    const NUM=consumer.number;


    var path="https://www.fast2sms.com/dev/bulk?authorization=ZlyX9FNswNd2JnHknmzLreXKWMA37jSe375IfiC9PYWFNIzDkJvcjx7W5vOP&sender_id=FSTSMS&language=english&route=qt&numbers="+NUM+"&message=38860&variables={AA}&variables_values="+PassRcvryOTP
    axios.get(path).then(res=>{console.log("PASSRCVRY OTP IS SEND")}).catch(err=>{console.log(err)})
    
    //Creating jwt and sending it;
    jwt.sign({id:number},"thehell",{expiresIn:'3h'},(err,token)=>{
        if(err) throw err;
        res.json({token , login: false , num : true })
    })
}
    
    else{
        res.json({msg:"INVALID NUMBER" , login : false , num : false})
    }
})
})


ROUTER.post('/passrcvryOtpValidator',jwtValidator,(req,res)=>{
    const {otp}=req.body;
    const PassRcvryOTPinValidator=global.OTPPassRcvry
    if(PassRcvryOTPinValidator===otp){
        const number=global.number;
        jwt.sign({id:number},'thehell',{expiresIn:'3h'},(err,token)=>{
            if(err) throw err;
            res.json({token , login : false , otp : true})   
        })
       
    }
    else{
        res.json({msg:"INVALID OTP" , login : false , otp : false})
    }
    
})

ROUTER.post('/updator',jwtValidator,(req,res)=>{
    const {newPassword}=req.body;
    const number=req.user.id
    Consumer.findOneAndUpdate({number},{password:newPassword},{returnOriginal:false})
    .then(Res=>{res.json({msg:"Password is changed successfully" , login: false , passchng : true})})
    .catch(err=>{console.log(err)})
})

module.exports=ROUTER
