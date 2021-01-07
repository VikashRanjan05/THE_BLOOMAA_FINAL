import React ,{useState , useEffect }from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory  } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Axios  from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { Update_NewPass , Logout_Action } from './../../Redux/index';
import {withRouter} from 'react-router-dom'



const ChangePass = () => {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [newpassword , setNewpassword] = useState('');
    const [newpassword1, setNewpassword1] = useState('');
    const [errorpass , Seterrorpass ] = useState(false);
    const [error , setError ] = useState(false);
    const userData = useSelector(state => state.Login.userData) ;
    const userError = useSelector(state => state.Login.userError);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        //  password match
         if(newpassword === newpassword1 ){
            Axios.post(`http://localhost:5000/passrcvry/updator`,{"newPassword" : newpassword},{
              headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': userData.token
            } })
            .then(res=>{
              
              dispatch(Update_NewPass(res.data))
            })
            Seterrorpass(false);
          }
        else{
         Seterrorpass(true);
        }
        
        
     }
     useEffect(()=>{
       if(Object.keys(userError).length > 1){
         if(userError.passchng){
           
           history.push('/Blooma/Login')
           history.go(-(history.length - 1))
           dispatch(Logout_Action());
         }else{
           setError(true)
         }
       }
     },[userError,history,dispatch])
 
      //  useEffect(()=>{
      //     return () => {
      //       dispatch(Clearlast());
      //     };
      //   },[dispatch])
        

     useEffect(()=>{
       setError(false)
       
     },[])
    
     
    return (
       
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
          {error ? <Alert variant="filled" severity="success" className={classes.alrt}>{ userError.msg }</Alert>:null}
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>Password</h1>
            <form className={classes.form} onSubmit={handleSubmit}>
             
              <TextField
              
              margin="normal"
              type="text"
              required
              fullWidth
              id="New Password"
              label="New Password"
              name="New Password"
              
              color="secondary"
              onChange={(e)=>setNewpassword(e.target.value)}
              />
              <TextField
              margin="normal"
              type="text"
              required
              fullWidth
              id="Confirm Password"
              label="Confirm Password"
              name="Confirm Password"
              
              color="secondary"
              onChange={(e)=>setNewpassword1(e.target.value)}
              />
              {errorpass ?<Alert severity="error">Both password not matching!</Alert>:null}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Change Password
              </Button>
              
            </form>
          </div>
        </Grid>
      </Grid>
    )
}

export default  withRouter(ChangePass);


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