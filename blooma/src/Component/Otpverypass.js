import React , {useState , useEffect } from 'react';  
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory , Link  } from "react-router-dom";
import Axios  from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import {Forgot_Pass_Otp  } from './../Redux/index'

const Otpverypass = () =>{
    const classes = useStyles();
    const history = useHistory();
    const [otp , setOtp ] = useState('')
    const [error , setError ] = useState(false);
    const userData = useSelector(state=>state.Login.userData)
    const userError = useSelector(state => state.Login.userError)
    const dispatch = useDispatch();
    const [otpp , setOtpp] = useState()
  // Handle submit 
  const HandleSubmit = (e)=>{
    
    e.preventDefault();
    Axios.post(`http://localhost:5000/passrcvry/passrcvryOtpValidator`,{"otp":otp },{
      headers:{
        'Content-Type' : 'application/json',
        'x-auth-token': userError.token
    } } )
    .then(res=>{
      setOtpp(res.data.otp)
      dispatch(Forgot_Pass_Otp(res.data))
     
    })
    .catch(err=>{
      
      console.log("error",err)
      }
    )
    
  }

  useEffect(()=>{
    if(Object.keys(userData).length > 1){
      if(otpp){
        
        history.push('/Blooma/ChangePass');
      
        window.location.reload();

      }else{
        setError(true)
      }
    }
  },[userData , history , otpp])

  useEffect(()=>{
    return () => {
      setOtpp(false)
    };
  },[])

  useEffect(()=>{
    setError(false)
  },[])


  // 
    return(
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        {error ? <Alert variant="filled" severity="error" className={classes.alrt}>{ userData.msg }</Alert>:null}
          <Avatar className={classes.avatar}>
            <VpnKeyIcon />
          </Avatar>
          <h1>Enter OTP</h1>
          <form className={classes.form} onSubmit={HandleSubmit} >
            <TextField
              
              margin="normal"
              type="number"
              required
              fullWidth
              id="OTP"
              label="OTP"
              name="OTP"
              autoComplete="OTP"
              autoFocus
              color="secondary"
              onChange= {(e)=>setOtp(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Submit OTP
            </Button>
            <Grid container direction="row" justify="flex-end">
            <Grid item>
              <Link to="#"variant="body2">
                {"Resend OTP"}
              </Link>
            </Grid>
          </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default Otpverypass;


// Css 
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1606293926075-69a00dbfde81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      
        backgroundSize:'690px 665px',
        backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));