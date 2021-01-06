import React , {useState , useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import {Flag , Userdb } from './../../Redux/index'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Alert  from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';

const AdminAccessOtp = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const Error2 = useSelector(state => state.Admin.Error2)
    const adminError = useSelector(state => state.Admin.adminError)
    
    const [otp , setOtp ] = useState("");
    const [flag ,setFlag] = useState(false);
    const [error , setError ] = useState(false);

    const HandleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post(`/adminAccess/accessotpvalidator`,{"otp" : otp},{
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': adminError.token
            }
        })
        .then(res=>{
            
            setFlag(res.data.accessotp)
            dispatch(Flag(res.data))
        })
        .catch(err=>{
            
        })
    }

    useEffect(()=>{
        if(Object.keys(Error2).length > 0){
        if(flag){
            axios.post(`/adminAccess/adminActualAccess`,{},{
                headers:{
                    'Content-Type' : 'application/json',
                    'x-auth-token': Error2.token
                }
            })
            .then(res=>{
                dispatch(Userdb(res.data))
                if(res.data.finallogin){
                    history.push('/Blooma/Main_Admin')
                    history.go((history.length - 1))
                }
                
            })
            .catch(err=>{
                console.log(err)
            })    
               }
        else{
                setError(true)
                
              }
      }},[Error2 ,history ,flag , dispatch])
  
      useEffect(()=>{
        return () => {
          setFlag(false)
        };
      },[])

      useEffect(()=>{
        setError(false)
      },[ ])

    return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
      
      
        <div className={classes.paper}>
        {error ? <Alert variant="filled" severity="error" className={classes.alrt}>{ Error2.msg }</Alert>:null}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>OTP</h1>
          
          <form className={classes.form} onSubmit={HandleSubmit} >
            <TextField
              inputProps={{
                maxLength: 10,
              }}
              margin="normal"
              type="number"
              required
              fullWidth
              id="number"
              label="Enter OTP"
              name="number"
              autoComplete="number"
              autoFocus
              onChange={(e)=>{
                setOtp(e.target.value)
                }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit OTP
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default AdminAccessOtp;


const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
        display : 'flex',
        justifyContent : 'center'
      },
      alrt :{
        marginTop : '-5vh'
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      
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
        letterSpacing:5
      },
    
}))