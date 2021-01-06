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
const Number = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const admin = useSelector(state => state.Admin.admin)
    const [number , setNumber ] = useState("");
    const [num ,setNum] = useState(false);
    const [error , setError ] = useState(false);

    const HandleSubmit = (e)=>{
        e.preventDefault();
        
        axios.post(`/admin/login`,{"number" : number})
        .then(res=>{
           
            setNum(res.data.num)
            dispatch(Check_Number(res.data))
        })
        .catch(err=>{
            
        })
    }

    useEffect(()=>{
        if(Object.keys(admin).length > 0){
        if(num){
                history.push('/Blooma/Check_Otp')
               }
        else{
                setError(true)
              }
      }},[admin ,history , num])
  
      useEffect(()=>{
        return () => {
          setNum(false)
        };
      },[])
    
  
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
                }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
    )
}

export default Number;

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
