import React , {useState ,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Home.css';
import axios from 'axios'
import { useSelector , useDispatch } from 'react-redux';
import { Choose_Plan } from './../Redux/index'
import { useHistory } from 'react-router';



export default function Pricing() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [demo , setDemo] = useState(true)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const [choosedplan , setChoosedplan] = useState(false)
  const userData= useSelector(state => state.Login.userData)
 

  if(userData.login){
     window.tiers = userData.consumer.isSubscribed  ? [
    
      {
        title: 'Basic',
        price: '251',
        description: ['4 Types Flowers 3 Types Leaves','Regular Floural Wastage Collection','15 days delivery of flower box','Delievery Timing : 6am-9am'],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : true
      },
      {
        title: 'Best',
        subheader: '',
        price: '551',
        description: [
          '5 Types Flowers 4 Types Leaves','Regular Floural Wastage Collection','35 days delivery of flower box','Delievery Timing : 6am-9am'
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : true
      },
      {
        title: 'Premium',
        price: '777',
        description: [
          '1 Mala per week','5 Types Flowers 4 Types Leaves','Regular Floural Wastage Collection','51 days delivery of flower box','Delievery Timing : 6am-9am'
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : true
      }] : [
      {
        title: 'Demo',
        price : '51',
        description:['Full package Box','One Time Demo plan','Delievery Timing : 6am-9am','2 days delivery of flower box'],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      },
      {
        title: 'Basic',
        price: '251',
        description: ['4 Types Flowers 3 Types Leaves','Regular Floural Wastage Collection','15 days delivery of flower box','Delievery Timing : 6am-9am'],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      },
      {
        title: 'Best',
        subheader: '',
        price: '551',
        description: [
          '5 Types Flowers 4 Types Leaves','Regular Floural Wastage Collection','35 days delivery of flower box','Delievery Timing : 6am-9am'
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      },
      {
        title: 'Premium',
        price: '777',
        description: [
          '1 Mala per week','5 Types Flowers 4 Types Leaves','Regular Floural Wastage Collection','51 days delivery of flower box','Delievery Timing : 6am-9am'
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      }]
     
  }
  else{
    window.tiers = [
      {
        title: 'Demo',
        price : '51',
        description: ['Full package Box','One Time Demo plan','Delievery Timing : 6am-9am','2 days delivery of flower box'],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      },
      {
        title: 'Basic',
        price: '251',
        description: ['4 Types Flowers 3 Types Leaves','Regular Floural Wastage Collection','15 days delivery of flower box','Delievery Timing : 6am-9am'],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      },
      {
        title: 'Best',
        subheader: '',
        price: '551',
        description: [
          '5 Types Flowers 4 Types Leaves','Regular Floural Wastage Collection','35 days delivery of flower box','Delievery Timing : 6am-9am', ' '
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      },
      {
        title: 'Premium',
        price: '777',
        description: [
          '1 Mala per week 5 Types Flowers 4 Types Leaves','Regular Floural Wastage Collection','51 days delivery of flower box','Delievery Timing : 6am-9am'
        ],
        buttonText: 'Enroll Now',
        buttonVariant: 'contained',
        sub : false
      }]
  }
    

  // For user 
  useEffect(()=>{
    if(userData.login){
      setDemo(userData.consumer.demo)
    }
    else{
      setDemo(true)
    }
  },[userData])

 
  
  

  const handleSubmit = (price) =>{

    if(userData.login){
      if(!userData.consumer.isSubscribed){
      switch(price){
        case '51': return (
          axios.post('http://localhost:5000/orders/demo')
          .then(res=>{
         
            dispatch(Choose_Plan(res.data))
            history.push('/Blooma/checkout');
          })
          .catch(err=>{
            console.log(err)
          })
        )
        case '251': return(
          axios.post('http://localhost:5000/orders/basic')
          .then(res=>{
           
            dispatch(Choose_Plan(res.data))
            history.push('/Blooma/checkout');
          })
          .catch(err=>{
            console.log(err)
          })
        )
        case '551': return(
          axios.post('http://localhost:5000/orders/best')
          .then(res=>{
           
            dispatch(Choose_Plan(res.data))
            history.push('/Blooma/checkout');
          })
          .catch(err=>{
            console.log(err)
          })
        )
        case '777': return(
          axios.post('http://localhost:5000/orders/premium')
          .then(res=>{
            
            dispatch(Choose_Plan(res.data))
            history.push('/Blooma/checkout');
          })
          .catch(err=>{
            console.log(err)
          })
        )
        default : return price
      }
    }
    else{
      setOpen(true);
      setChoosedplan(!choosedplan);
    }
  }
    else{
      history.push('/Blooma/Login');
    }
  }

  return (
    <>
      <CssBaseline />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="filled" severity="error">
          You have already choosed a plan !
        </Alert>
      </Snackbar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Choose your plan according to your preference.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          { window.tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={demo ? 6 : 4}>
              <Card className="card">
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Demo' ? <StarIcon /> : null}
                  className="header"
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                    &#8377;{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}  onClick={() => handleSubmit(tier.price)} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
   
  );
}




// pricing css

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
  }));