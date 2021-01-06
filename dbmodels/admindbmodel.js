const MONGOOSE=require('mongoose')
const admindbSchema=MONGOOSE.Schema

const adminSchema=new admindbSchema({
    name:{
        type:String,
        required:true,
        unique:true 
    },
    number:{
        type:String,            
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }


})

module.exports=admindbmodel=MONGOOSE.model('AdminDB',adminSchema)