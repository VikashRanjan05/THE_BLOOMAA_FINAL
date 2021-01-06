const EXPRESS=require('express')
const ROUTER=EXPRESS.Router();
const Razorpay=require('razorpay')
const DateTime=require('node-datetime')

ROUTER.post('/demo',(req,res)=>{
   const   rpay = new Razorpay({
           key_id: 'rzp_test_Q3Mj0QJ5chbfpl',
           key_secret: 'e6mZvu7DnTR7hBYfnp57y7Ui'
         })
         rpay.orders.create({amount:'5100',currency:'INR',receipt:'receipt#1',notes:{
           'planType':'DEMO',
           'planPrice':'51',
           'planFeature':'Delivery of flower box for 2 days after the activation of plan'
        
        }})
         .then(order=>{
           const createdTime=order.created_at*1000;
          const createdTimeStamp=DateTime.create(createdTime)
           const createdDate=createdTimeStamp.format('d/m/y H:M')
           res.json({createdDate,order })
         })
         .catch(err=>{console.log(err)})
   
   })
   ROUTER.post('/basic',(req,res)=>{
       const   rpay = new Razorpay({
               key_id: 'rzp_test_Q3Mj0QJ5chbfpl',
               key_secret: 'e6mZvu7DnTR7hBYfnp57y7Ui'
             })
             rpay.orders.create({amount:'25100',currency:'INR',receipt:'receipt#1',notes:{
              'planType':'BASIC',
              'planPrice':'251',
              'planFeature':'Delivery of flower box for 15 days after the activation of plan'

             }})
             .then(order=>{const createdTime=order.created_at*1000;
               const createdTimeStamp=DateTime.create(createdTime)
                const createdDate=createdTimeStamp.format('d/m/y H:M')
                res.json({createdDate,order})})
             .catch(err=>{console.log(err)})
       
       })
       
   ROUTER.post('/best',(req,res)=>{
       const   rpay = new Razorpay({
               key_id: 'rzp_test_Q3Mj0QJ5chbfpl',
               key_secret: 'e6mZvu7DnTR7hBYfnp57y7Ui'
             })
             rpay.orders.create({amount:'55100',currency:'INR',receipt:'receipt#1',notes:{
              'planType':'BEST',
           'planPrice':'551',
           'planFeature':'Delivery of flower box for 35 days after the activation of plan'

             }})
             .then(order=>{const createdTime=order.created_at*1000;
               const createdTimeStamp=DateTime.create(createdTime)
                const createdDate=createdTimeStamp.format('d/m/y H:M')
                res.json({createdDate,order})})
             .catch(err=>{console.log(err)})
       
       })
       
   ROUTER.post('/premium',(req,res)=>{
       const   rpay = new Razorpay({
               key_id: 'rzp_test_Q3Mj0QJ5chbfpl',
               key_secret: 'e6mZvu7DnTR7hBYfnp57y7Ui'
             })
             rpay.orders.create({amount:'77700',currency:'INR',receipt:'receipt#1',notes:{
              'planType':'PREMIUM',
              'planPrice':'777',
              'planFeature':'Delivery of flower box for 51 days after the activation of plan'

             }})
             .then(order=>{const createdTime=order.created_at*1000;
               const createdTimeStamp=DateTime.create(createdTime)
                const createdDate=createdTimeStamp.format('d/m/y H:M')
                res.json({createdDate,order})})
             .catch(err=>{console.log(err)})
       
       })
       
module.exports=ROUTER

