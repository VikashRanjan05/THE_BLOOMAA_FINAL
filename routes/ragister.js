const EXPRESS=require('express');
const ROUTER=EXPRESS.Router();
const axios=require('axios').default;
const otpGenerator = require('otp-generator');
const Consumer=require("../dbmodels/customerdbmodel")
const jwt=require('jsonwebtoken')
const jwtValidator=require('../middleware/jwtValidator')


ROUTER.post('/',(req,res)=>{
    const {number}=req.body
    Consumer.findOne({number}).then(consumer=>{
if(!consumer){
    
global.OTP=otpGenerator.generate(5,{upperCase:false,specialChars:false,alphabets:false,digits:true});
global.BODY=req.body;
const GeneratedOTP=global.OTP;
const NUM=req.body.number;

//Integrating the generated otp and numbers in SMS api URL for sending the OTP through message on user`s mobile number  
var path= "https://www.fast2sms.com/dev/bulk?authorization=ZlyX9FNswNd2JnHknmzLreXKWMA37jSe375IfiC9PYWFNIzDkJvcjx7W5vOP&sender_id=FSTSMS&language=english&route=qt&numbers="+NUM+"&message=38860&variables={AA}&variables_values="+GeneratedOTP
axios.get(path)
.then( (Response)=> {console.log('OTP IS SEND')})
.catch(err=>{console.log("this is error")});
//Creating jwt and sending it;
jwt.sign({id:number},"thehell",{expiresIn:'3h'},(err,token)=>{
    if(err) throw err;
    res.json({token , login : false , register : true })
})
}else{
    res.json({msg :"Mobile Number already exist", login : false , register : false })
}

    }).catch(err=>{console.log(err)})
  
   
})
ROUTER.post('/validator',jwtValidator,(req,res)=>{
        const BODY=global.BODY;
        const NAME=BODY.name;
        const NUMBER=BODY.number;
        const PASSWORD=BODY.password;
        const GENERATEDOTP=global.OTP;
    if(req.body.otp===GENERATEDOTP){
        const newConsumer=new Consumer({
             name: NAME,
             number:NUMBER,
             password:PASSWORD,
             address:'',
             appartment_or_building_name:'',
             flat_or_house_number:'',
             landmark:'',
             road_name_or_number:'',
             area:'',
             colony:'',
             state:'',
             city:'',
             pincode:'',
             demo:true
        });
         newConsumer.save()
         .then(consumer=>{//Creating jwt and sending it;
            jwt.sign({id:consumer.id},"thehell",{expiresIn:'3h'},(err,token)=>{
                if(err) throw err;
                res.json({token, consumer , login : true})
            })
             
             
         })
    }
    else{
        res.json({msg : "INVALID OTP" , login : false , register : true})
    }})
    module.exports=ROUTER