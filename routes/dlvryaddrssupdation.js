const EXPRESS= require('express');
const jwtValidator = require('../middleware/jwtValidator');
const ROUTER=EXPRESS.Router();
const Consumer=require('../dbmodels/customerdbmodel')
const jwt=require('jsonwebtoken')


ROUTER.post('/',jwtValidator,(req,res)=>{

const id=req.user.id
Consumer.findByIdAndUpdate(id,{
    address:req.body.newAddress,
    appartment_or_building_name:req.body.newAppartment_or_building_name,
    flat_or_house_number:req.body.newFlat_or_house_number,
    landmark:req.body.newLandmark,
    road_name_or_number:req.body.newRoad_name_or_number,
    area:req.body.newArea,
    colony:req.body.newColony,
    state:req.body.newState,
    city:req.body.newCity,
    district:req.body.newDistrict,
    pincode:req.body.newPincode
},{returnOriginal:false}).then(consumer=>{
    const login=true;
    jwt.sign({id:id},'thehell',{expiresIn:'3h'},(err,token)=>{
        if(err) throw err;
         
         res.json({token,consumer,login})
    })}).catch(err=>{console.log(err)})
    
})

module.exports=ROUTER