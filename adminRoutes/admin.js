const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const Admin=require('../dbmodels/admindbmodel')
const jwtValidator=require('../middleware/jwtValidator')
const jwt=require('jsonwebtoken')
const otpGenerator=require('otp-generator')
const axios=require('axios')


ROUTER.post('/login',(req,res)=>{
    const {number}=req.body
    Admin.findOne({number}).then(admin=>{
if(admin){
    
global.OTP1=otpGenerator.generate(5,{upperCase:false,specialChars:false,alphabets:false,digits:true});
global.BODY=req.body;
const GeneratedOTP=global.OTP1;
const NUM=req.body.number;

//Integrating the generated otp and numbers in SMS api URL for sending the OTP through message on user`s mobile number  
var path= "https://www.fast2sms.com/dev/bulk?authorization=ZlyX9FNswNd2JnHknmzLreXKWMA37jSe375IfiC9PYWFNIzDkJvcjx7W5vOP&sender_id=FSTSMS&language=english&route=qt&numbers="+NUM+"&message=38860&variables={AA}&variables_values="+GeneratedOTP
axios.get(path)
.then( (Res)=> {console.log('OTP IS SEND')})
.catch(err=>{console.log("this is error")});
//Creating jwt and sending it;
jwt.sign({id:number},"thehell",{expiresIn:'3h'},(err,token)=>{
    if(err) throw err;
    res.json({token , num : true})
})
}else{
    res.json({msg:"You are not ragistered with this number as a admin with THE BLOOMAA" , num :false})
}

    }).catch(err=>{console.log(err)})
  
})
ROUTER.post('/loginotpvalidator',jwtValidator,(req,res)=>{
    const GENERATEDOTP=global.OTP1
    const otp=req.body.otp
    const number=req.user.id
    if(GENERATEDOTP===otp){
        Admin.findOne({number})
        .then(admin=>{
            
            console.log(admin)
          if(admin){
             const number=admin.number
              jwt.sign({id:number},"thehell",{expiresIn:'3h'},(err,token)=>{
                if(err) throw err;
                res.json({token , "otp" : true})
            })

          }
          else{
              res.json({msg:"something miscellaneous has happend" })
          }



        }).catch(Err=>{res.json(Err)})}
    else{
        res.json({msg:"PLEASE ENTER A VALID OTP",  "otp" : false})
    }
})
ROUTER.post('/entername',jwtValidator,(req,res)=>{
        const nameInReq=req.body.name;
        const number=req.user.id;
        Admin.findOne({number})
        .then(admin=>{
            const validName=admin.name
            
            if(validName===nameInReq){
                jwt.sign({id:number},"thehell",{expiresIn:'3h'},(err,token)=>{
                    if(err) throw err;
                    res.json({token , "name" : true })
                })
            }
            else{
                res.json({msg:"You are not ragistered as an admin with this name with THE BLOOMA"  , "name" : false})
            }
        })
        .catch(Err=>{ res.json({msg:'SOMETHING MISCELLANEOUS HAS HAPPEND' })})
       
       
})
ROUTER.post('/enteremail',jwtValidator,(req,res)=>{
    const emailInReq=req.body.email;
    const number=req.user.id;
    Admin.findOne({number})
    .then(admin=>{
        const validEmail=admin.email;
        if(validEmail===emailInReq){
            jwt.sign({id:number},"thehell",{expiresIn:'3h'},(err,token)=>{
                if(err) throw err;
                res.json({token , "email" : true})
            })
        }
        else{
            res.json({msg:"YOU ARE NOT RAGISTERED WITH THIS EMAIL WITH THE BLOOMAA" , "email" : false})
        }
    })
    .catch(Err=>{
        res.json({msg:'somethihng miscellaneous has happend'})
    })
   

})
ROUTER.post('/gettingpassword',jwtValidator,(req,res)=>{
    const passInReq=req.body.password;
    const number=req.user.id;
    Admin.findOne({number})
    .then(admin=>{
        if(admin){
            validPass=admin.password;
            if(validPass===passInReq){
                const idForjwt=admin.id
                jwt.sign({id:idForjwt},"thehell",{expiresIn:'3h'},(err,token)=>{
                    if(err) throw err;
                    res.json({token ,"pass":true , "adminLogin" : true}) })
            }else{
                res.json({msg:'please enter a valid password', "pass":false })
            }
        }
        else {
            res.json({msg:'SOMETHIGNG MISCELLANEOUS HAS HAPPEND'})
        }
    })
         
})



module.exports=ROUTER