const EXPRESS=require('express');
const ROUTER=EXPRESS.Router();
const Razorpay=require('razorpay');
const DateTime=require('node-datetime')
const jwtValidator=require('../middleware/jwtValidator')
const Consumer=require('../dbmodels/customerdbmodel')
const jwt = require('jsonwebtoken')

ROUTER.post('/',jwtValidator,(req,res)=>{
    const _id=req.user.id;
    const PaymentId=req.body.PaymentId;
    const OrderId=req.body.OrderId;

    const   rpay = new Razorpay({
        key_id: 'rzp_test_Q3Mj0QJ5chbfpl',
        key_secret: 'e6mZvu7DnTR7hBYfnp57y7Ui'
      })
      rpay.payments.fetch(PaymentId).then(Res=>{
          console.log(Res)
          const plantype=Res.notes.planType
          const planprice=Res.notes.planPrice
          const planfeature=Res.notes.planFeature

          const ORDERID=Res.order_id
          const CreatedAt=Res.created_at
          if(ORDERID===OrderId){
            const subscriptionTime=CreatedAt*1000;
            const subscriptionTimeStamp=DateTime.create(subscriptionTime)
             const subscriptionDate=subscriptionTimeStamp.format('d/m/Y H:M')
             Consumer.findByIdAndUpdate(_id,
                {demo:false,isSubscribed:true,
                    subscribedAt:subscriptionDate,
                    planType:plantype,planPrice:planprice,planFeature:planfeature
                    ,
                    $push:{paymentsId:PaymentId}},
                {upsert:true,safe:true,returnOriginal:false})
                .then(consumer=>{
                    jwt.sign({id:consumer.id},'thehell',{expiresIn:'3h'},(err,token)=>{
                    if(err) throw err;
                    res.json({token,consumer,login : true})
                })})
                .catch(Err=>{res.json(Err)})
             
        }else{
            res.json({msg:"PAYMENT IS NOT VAFRIFIED FOR ORDER ID:"+OrderId +" and PAYMENT ID:"+PaymentId})
       
      }}).catch(err=>{
          res.json(err)
      })
    })

module.exports=ROUTER