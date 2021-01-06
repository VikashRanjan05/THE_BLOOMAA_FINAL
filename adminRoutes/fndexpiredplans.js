const EXPRESS=require('express')
const ROUTER=EXPRESS.Router()
const jwtValidator=require('../middleware/jwtValidator')
const Admin=require('../dbmodels/admindbmodel')
const Consumer=require('../dbmodels/customerdbmodel')
const jwt=require('jsonwebtoken')


// ROUTER.post('/',jwtValidator,(req,res)=>{
// const id=req.user.id
// Admin.findById(id)
// .then(admin=>{
//     if(admin){
//         const id1=admin.id
//         console.log(id1)
//         jwt.sign({id:id1},'thehell',{expiresIn:'3h'},(err,token)=>{
//             if(err) throw err;
//             res.json({token,msg:"YOU ARE AUTHORIZED TO ACCESS THIS FACILITY"})
//         })

//     }else{
//         res.json({msg:"YOU ARE NOT AUTHORUIZED TO ACCESS THIS FACILITY"})
//     } }).catch(Err=>{
//     res.json({msg:"SOMETHING MISCELLANEOUS HAS HAPPEND"})
// })})
ROUTER.post('/',jwtValidator,(req,res)=>{
   const DATE=req.body.date
    const id=req.user.id;
    Admin.findById(id)
    .then(admin=>{
        if(admin){
             Consumer.find({'validityDate':DATE})
             .then(consumer=>{
                 if(consumer){
                     res.json(consumer)
                 }else{
                     res.json({msg:"No consumer found at this date"})
                 }
             }).catch(Err=>{console.log(Err)})
        }else{
            res.json({msg:"You are not a authorized ADMIN, just go and fuck off!,YOU CANT BREAK IT"})
        }
    }).catch(Err=>{
        console.log(Err)
    })
})
module.exports=ROUTER