const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const jwtValidator=require('../middleware/jwtValidator')
const Consumer=require('../dbmodels/customerdbmodel')
const Admin=require('../dbmodels/admindbmodel')
ROUTER.post('/',jwtValidator,(req,res)=>{ 
       const _id=req.user.id;
       const date=req.body.date;
       Admin.findById(_id).then(admin=>{
           if(admin){
            Consumer.find({'subscribedAt':date})
            .then(consumers=>{
                res.json({consumers})
            }).catch(Err=>{
                res.json(Err)
            })
           }else{
               res.json({msg:"You are not a authorized ADMIN, just go and fuck off!,YOU CANT BREAK IT"})
           }
       }).catch(Err=>{
           res.json({msg:'SOMETHING MISCELLANEOUS HAS HAPPEND'})
       })
  


})
module.exports=ROUTER