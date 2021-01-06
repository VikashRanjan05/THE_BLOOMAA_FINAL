import React , {useState , useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {Link , withRouter } from "react-router-dom";
import Alert  from '@material-ui/lab/Alert';
import { useHistory } from "react-router";
import { useDispatch , useSelector } from 'react-redux';
import {Login_Action} from './../../Redux/index'


const Login = () =>{
    const classes = useStyles();
    const history = useHistory();
    const [Passwordicon,setPasswordicon] = useState(false);
    const [ number , setNumber ] = useState('');
    const [password , setPassword] = useState('');
    const [flagnumber , setFlagnumber ] = useState(true); // checking if it is 10 digit number
    const [error , setError ] = useState(false);

    const dispatch = useDispatch()
    const user = useSelector(state => state.Login.userData)
    
      // Handle submit 
    
      const HandleSubmit = (e) =>{
      e.preventDefault();
      if(!flagnumber){
        dispatch(Login_Action({"number" : number,"password" : password}))
        
      }}
      
      

      useEffect(()=>{
        if(Object.keys(user).length > 1){
          if(user.login){
            // localStorage.setItem('Sessiontoken',user.token);
            history.push('/Blooma/');
            history.go((history.length - 1))
            // window.location.reload(true);
          }
          else{
            setError(true)
          }
          
        }
        },[user,history])
        
        useEffect(()=>{
          setError(false)
         
        },[])
       

      
  //     Axios.post(`http://localhost:5000/login`,{"number" : number,"password" : password})
  //     .then(resp=>{
  //       console.log(resp);
  //       setLogindetails(resp.data)
  //       if(resp.data.consumer){
  //         localStorage.setItem('Sessiontoken',resp.data.token);
  //         history.push('/Blooma/');
  //         history.go(-(history.length - 1))
  //         window.location.reload(true);
  //         // history.replace('/Blooma/Register', '/Blooma/Login')
  //       }else{
  //         alert(resp.data)
  //       }
  //       // 
  //     })
  //     .catch(err=>{
        
  //       console.log(err)
  //       // console.log(res)
  //       // console.log(res.data)
  //       // if(res.data === "THIS NUMBER IS NOT RAGISTERED "){
  //       //   console.log("errorrrrrr")
  //       //   setLogindetails(res.data)
  //       //   setLoginflag(true)
  //       // }
  //       // else{
  //       //   setLogindetails(res.data)
  //       //   setLoginflag(true)
  //       // }
  //     })
  //     console.log( number , password,loginflag)
     
    // show Password
    const ShowPassword = () => {
        setPasswordicon(!Passwordicon)
    }

    
    
    return(
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
      
      
        <div className={classes.paper}>
        {error ? <Alert variant="filled" severity="error" className={classes.alrt}>{ user.msg }</Alert>:null}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Sign In</h1>
          
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
              label="Number"
              name="number"
              autoComplete="number"
              autoFocus
              onChange={(e)=>{
                setNumber(e.target.value)
                if(number.toString().length === 9){
                  setFlagnumber(false)
                  
                }
               
                else{
                  setFlagnumber(true)
                }
                
              }}
            />
            {flagnumber?<Alert severity="error">Enter 10 digit mobile number</Alert>:null}
            <FormControl fullWidth className={clsx(classes.textField)} >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
          required
            id="outlined-adornment-password"
            type={Passwordicon ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={ShowPassword}
                  edge="end"
                >
                  {Passwordicon ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"required/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
              className={classes.submit}
            >
              SIGN In
            </Button>
            <Grid container spacing={4} >
              <Grid item xs >
                <Link  to="/Blooma/Forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/Blooma/Register" variant="body2">
                  {"Don't have an account?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}
export default withRouter(Login);



// Css 
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    alrt :{
      marginTop : '-5vh'
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
  }));



