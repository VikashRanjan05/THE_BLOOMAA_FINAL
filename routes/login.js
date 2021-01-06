const EXPRESS=require('express');
const ROUTER=EXPRESS.Router();
const Consumer=require('../dbmodels/customerdbmodel');
const jwt=require('jsonwebtoken')

ROUTER.post('/',(req,res)=>{
    const {number,password}=req.body;
    Consumer.findOne({number}).then(consumer=>{
if(!consumer){
    res.json({msg :"NUMBER NOT REGISTERED", login : false })
}
else{
    if(consumer.password===password){
        
        
        jwt.sign({id:consumer.id},'thehell',{expiresIn:'3h'},(err,token)=>{
            if(err) throw err;
            res.json({token,consumer,login : true})
        })

    }
    else{
        res.json({msg :"INVALID PASSWORD", login : false })
    }
    
}

    }).catch(err=>{res.json(err)})



})

module.exports=ROUTER;