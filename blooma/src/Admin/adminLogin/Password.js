import React , {useState , useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import {Check_Number} from './../../Redux/index'
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

const Password = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.Admin.admin)
    const adminError = useSelector(state => state.Admin.adminError)
    const [password , setPassword] = useState("");
    const [error , setError ] = useState(false);

    const HandleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post(`/admin/gettingpassword`,{"password" : password},{
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': adminError.token
            }
        })
        .then(res=>{
            dispatch(Check_Number(res.data))
        })
        .catch(err=>{
            
        })
    }

    useEffect(()=>{
        if(Object.keys(admin).length > 0){
        if(admin.pass){
                history.push('/Blooma/Admin_Sir_Blooma')
                history.go((history.length - (history.length - 1)))
               }
        else{
                setError(true)
                
              }
      }},[admin ,history ])
  
    //   useEffect(()=>{
    //     return () => {
    //       setFlag(false)
    //     };
    //   },[])
    useEffect(()=>{
        setError(false)
        
      },[])

    return (
        <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
      
      
        <div className={classes.paper}>
        {error ? <Alert variant="filled" severity="error" className={classes.alrt}>{ admin.msg }</Alert>:null}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Enter Password</h1>
          
          <form className={classes.form} onSubmit={HandleSubmit} >
            <TextField
              margin="normal"
              type="text"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              onChange={(e)=>{
                setPassword(e.target.value)
                }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit Password
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default Password


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
