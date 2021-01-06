import React , { useState , useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Alert  from '@material-ui/lab/Alert';
import {Link , withRouter} from "react-router-dom";
import { useHistory } from "react-router";
import  axios  from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import {Register_Action} from './../../Redux/index';

const Register = () =>{
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [name , setName ] = useState('');
    const [ number , setNumber ] = useState('');
    const [ password , setPassword ] = useState('');
    const [error , setError ] = useState(false);
    const [register, setRegister ] = useState();
    const userError = useSelector(state=>state.Login.userError)
    //  Handle Submit for registration 
    const handleSubmit = (e) => {
       e.preventDefault();
       
      axios.post(`http://localhost:5000/ragister`,{"name":name, "number" : number , "password" : password })
      .then(res=>{
        setRegister(res.data.register)
        dispatch(Register_Action(res.data))
      })
      .catch(err=>{
        console.log(err)
      })
    }
    useEffect(()=>{
      if(Object.keys(userError).length > 1){
      if(register){
              history.push('/Blooma/OTP')
             }
      else{
              // setToken(user.token);
              setError(true)
            }
    }},[userError ,history,register])

    useEffect(()=>{
      return () => {
        setRegister(false)
      };
    },[])
  

    useEffect(()=>{
      setError(false)
      
    },[])

    return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        {error ? <Alert variant="filled" severity="error">{userError.msg}</Alert>:null}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Join Our Family</h1>
          <form className={classes.form}  onSubmit={handleSubmit}>
            <TextField
            margin="normal"
            type="text"
            required
            fullWidth
            id="Name"
            label="Name"
            name="Name"
            autoComplete="Name"
            autoFocus
            color="secondary"
            onChange={e=>setName(e.target.value)}
            />
            <TextField
              margin="normal"
              type="number"
              required
              fullWidth
              id="Phone Number"
              label="Phone Number"
              name="Phone Number"
              autoComplete="Phone Number"
              color="secondary" 
              onChange={e=>setNumber(e.target.value)}
            />
           
            <TextField
              color="secondary"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="text"
              id="password"
              autoComplete="current-password"
              onChange={e=>setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}

            >
              Register
            </Button>
            <Grid container direction="row" justify="center">
              <Grid item>
                <Link to="/Blooma/Login" variant="body2">
                  {"Sign In to your account"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default withRouter(Register);


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