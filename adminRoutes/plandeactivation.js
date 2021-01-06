const EXPRESS=require('express');
const ROUTER=EXPRESS.Router();
const jwtValidator=require('../middleware/jwtValidator')
const Admin=require('../dbmodels/admindbmodel')
const Consumer=require('../dbmodels/customerdbmodel')


ROUTER.post('/',jwtValidator,(req,res)=>{
    const id=req.user.id;
    console.log(id)
    const number=req.body.number
    Admin.findById(id)
    .then(admin=>{
        if(admin){
            Consumer.findOneAndUpdate({number},
                {isActivated:false,
                    isSubscribed:false
                },{returnOriginal:false}).then(Res=>{res.json(Res)}).catch(Err=>{res.json(Err)})

        }
        else{
            res.json({msg:"You are not authorized to perform this task"})
        }
    }).catch(Err=>{console.log(Err)})

})
module.exports=ROUTER