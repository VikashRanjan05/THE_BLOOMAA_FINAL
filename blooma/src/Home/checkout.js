import{ React , useState , useEffect }from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Axios from 'axios'
import { useSelector , useDispatch } from 'react-redux';
import { Confirmed_plan } from './../Redux/index'
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import './checkout.css'

 function  LoadScript(src){
   return new Promise((resolve)=>{
    const script=document.createElement('script')
    
    script.src=src

    script.onload=()=>{
        resolve(true)
    }
    script.onerror=()=>{
        resolve(false)
    }
    document.body.appendChild(script)

   })
   
}


const Checkout= () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const userOrder = useSelector(state => state.Login.userOrder)
    const userData = useSelector(state => state.Login.userData)
    const [PaymentID,setPaymentID]=useState('')
    const [OrderID,setOrderID]=useState('')
    const paymentId= window.paymentId=PaymentID;
    const orderId= window.orderId=OrderID;
    const [terms , setTerms] = useState(false)


    const HandleUpdate =() =>{
      history.push('/Blooma/Address_Update')
    }
    const handleTerms = () =>{
      setTerms(!terms)
    }
    
    
    useEffect(()=>{
        // function sendRQtoSrvrAFSP(){
            if(PaymentID && OrderID) {
                const id= paymentId
                const oid= orderId
                Axios.post(`http://localhost:5000/pymntverifyandupdation`,{"PaymentId":id,"OrderId":oid},
                {
                    headers:{
                        'Content-Type':'application/json',
                        'x-auth-token':userData.token
                    }
                })
                .then(Res=>{
                    
                    dispatch(Confirmed_plan(Res.data))
                    history.push('/Blooma/');
                    history.go((history.length - 1))
                }).catch(Err=>{console.log(Err)})
            }
            
        
    },[PaymentID , OrderID ,dispatch , history ,orderId,paymentId ,userData.token])
   
   
 function DisplayRazorpay(){
   
    const res= LoadScript('https://checkout.razorpay.com/v1/checkout.js')
    if(!res){
        alert('Razorpay sdk failed to load!,CHECK FOR THE INTERNET CONNECTION')
        return
    }
    const options = {
        key_id: "rzp_test_Q3Mj0QJ5chbfpl", 
        key_secret:"e6mZvu7DnTR7hBYfnp57y7Ui",
        amount: "50000",
        currency: "INR",
        name: "THE BLOOOMAA",
        description: "Test Transaction",
        image: "",
        order_id: userOrder.order.id,
        handler: function (response){
            setPaymentID(response.razorpay_payment_id);
            setOrderID(response.razorpay_order_id);
        },
        notes: {
            "planType": userOrder.order.notes.planType,
            "planPrice": userOrder.order.notes.planPrice,
            "planFeature": userOrder.order.notes.planFeature
        }
    };
    const rzp1 = new window.Razorpay(options);
    
    rzp1.open();
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
}
return(
    <>
      <CssBaseline />
      {/*<Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
         ORDER DETAILS
        </Typography>
        <hr className="hr"/>
        
      </Container>*/}
     
      <Container maxWidth="md"  className="maincheck">
        <Grid container spacing={5} alignItems="flex-end">
         
            
            <Grid item xs={12} >
              <Card className="crd">
                <CardHeader
                title="ORDER DETAILS"
                subheader=""
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className="Orderheader"
                />
                <hr className="hrrr8"/>
                
                    <div className="cardDetails">
                      <div>
                        <span className="prop" >PLAN : </span>
                        <span className="att" >{userOrder.order.notes.planType}</span>
                      </div>
                      <div>
                        <span className="prop" >PRICE : </span>
                        <span className="att attp" >&#8377; {userOrder.order.notes.planPrice}</span>
                      </div>
                      <div>
                        <span className="prop" >FEATURE: </span>
                        <span className="att" >{userOrder.order.notes.planFeature}</span>
                      </div>
                      
                    </div>
                      <hr className=".hrrr"/>
                    <div className="cardDetails">
                      <div>
                        <span className="prop" >NAME : </span>
                        <span className="attN" >{userData.consumer.name.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="prop" >NUMBER : </span>
                        <span className="att " >{userData.consumer.number}</span>
                      </div>
                      <div>
                        <span className="propD" >DELIVERY ADDRESS : </span>
                        <div>
                        <span className="attA" >
                        {userData.consumer.flat_or_house_number} &nbsp;
                        {userData.consumer.appartment_or_building_name} &nbsp;
                        {userData.consumer.landmark}  &nbsp;
                        {userData.consumer.road_name_or_number}  &nbsp;
                        {userData.consumer.area}  &nbsp;
                        {userData.consumer.colony}  &nbsp;
                        {userData.consumer.city}  &nbsp;
                        {userData.consumer.state}  &nbsp;
                        {userData.consumer.district}  &nbsp;
                        {userData.consumer.pincode}  &nbsp;
                        
                        </span>
                        <Button  color="primary" onClick={HandleUpdate}>Change Address</Button>
                        </div>
                        
                      </div>
                      <div >
                      <Checkbox
                        checked={true}
                       required
                      /> <span className="attA" onClick={handleTerms}> Terms & Conditions</span>
                      </div>
                      {terms ? 
                      <div>
                        <span className='attA'>
                        1) PLAN TYPE : {userOrder.order.notes.planType} <br />
                        2) SUBSCRIPTION VALIDITY: {userOrder.order.notes.planFeature} <br />
                        3) ACTIVATION OF PLAN: After the subscription of our plan by the consumer, there is a offline address verification process by THE BLOOMAA officials. As soon as the offline address verification process is done the subscribed plan will be activated.<br />
                        4) OFFLINE ADDRESS VERIFICATION PROCESS: After the subscription of plan by consumer, our officials will be sent to the consumer`s door step to verify their delivery address. This process is  very important for the ease of regular delivery (This process will take maximum 48 hours after the day, when plan is subscribed).
                        </span>
                      </div>
                      : null
                      }
                    </div>
                
                <CardActions>
                <Button className="buttn" fullWidth variant='contained' color='primary' onClick={DisplayRazorpay}>PAY NOW</Button>
                </CardActions>
              </Card>
            </Grid>
           
            
        </Grid>
      </Container>
    
    
    </>
)
}

export default withRouter(Checkout);



