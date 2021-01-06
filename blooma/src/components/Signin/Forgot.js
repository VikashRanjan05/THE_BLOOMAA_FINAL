import React ,{useState , useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { withRouter} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import Axios  from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { Forgot_pass  } from './../../Redux/index';
const Forgot = () =>{

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [number , setNumber ] = useState('');
    const [newnum ,setNum ] = useState();
    const [flagnumber , setFlagnumber ] = useState(true);
    const [error , setError ] = useState(false);
    const userError = useSelector(state => state.Login.userError);
    
    // Handle Submit
  const handleSubmit = (e) => {
       e.preventDefault();
       Axios.post(`http://localhost:5000/passrcvry`,{'number' : number})
      .then(res=>{
        setNum(res.data.num)
        dispatch(Forgot_pass(res.data))

      })
    }
    useEffect(()=>{
      if(Object.keys(userError).length > 1){
        if(newnum){
          
          history.push('/Blooma/otppass')
         
        }else{
          setError(true)
        }
      }
      
    },[userError ,history , newnum])

    useEffect(()=>{
      return () => {
       setNum(false)
      };
    },[])


    useEffect(()=>{
      setError(false)
    },[])
    

    return(
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        {error ? <Alert variant="filled" severity="error" className={classes.alrt}>{ userError.msg }</Alert>:null}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Reset Password</h1>
          <form className={classes.form} onSubmit={handleSubmit}>
            
            <TextField
              margin="normal"
              type="number"
              required
              fullWidth
              id="Phone Number"
              label="Phone Number"
              name="Phone Number"
              autoComplete="Phone Number"
              autoFocus
              color="secondary"
              onChange={(e)=>{
                setNumber(e.target.value)
                if(number.toString().length === 9 ){
                  setFlagnumber(false)
                }
                else if(number.toString().length === 10){
                  setFlagnumber(true)
                }
                else{
                  setFlagnumber(false)
                }
              }}
              />
            {flagnumber ?<Alert severity="error">Number should be of 10 digit!</Alert>:null}
            
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Reset Password
            </Button>
            
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default withRouter(Forgot);


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