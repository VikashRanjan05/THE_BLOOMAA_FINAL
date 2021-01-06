import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router";
import './Style/Address.css'
import { useDispatch , useSelector} from 'react-redux';
import { Update_add } from './../../Redux/index';

const AddressUpdate = () =>{
    const user = useSelector(state => state.Login.userData.consumer)
    const token = useSelector(state => state.Login.userData.token)
    const [add , setAdd] = useState(user.address)
    const [building , setBuilding] = useState(user.appartment_or_building_name)
    const [houseNo , setHouseNo] = useState(user.flat_or_house_number)
    const [landmark , setLandmark] = useState(user.landmark)
    const [road , setRoad] = useState(user.road_name_or_number)
    const [colony , setColony] = useState(user.colony)
    const [area , setArea] = useState(user.area);
    const [city , setCity ] = useState(user.city)
    const [district , setDistrict] = useState(user.district)
    const [state , setState] = useState(user.state)
    const [pin , setPin] = useState(user.pincode) 
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) =>{
      
      const data =  {"newAddress" : add , "newAppartment_or_building_name" : building , "newFlat_or_house_number" : houseNo , "newLandmark" : landmark , "newRoad_name_or_number" : road ,  "newArea" : area, "newColony" : colony ,  "newState" : state, "newCity" : city,  "newPincode" :pin , "newDistrict" : district }
      e.preventDefault();
      axios.post("http://localhost:5000/dlvryaddrssupdation",
       data
      ,{ 
        headers:{
          'Content-Type' : 'application/json',
          'x-auth-token': token
        }})
      .then(res=>{
      
          dispatch(Update_add(res.data))
      })
      .catch(err=>{
          console.log("err hai",err)
      })
      // dispatch(Update_add({'token' : token , 'add' : add , 'building' : building , 'houseNo' : houseNo , 'landmark' : landmark , 'road' : road , 'colony' : colony , 'area' : area , 'city' : city , 'district' : district , 'state' : state , 'pin' : pin }))
      history.goBack()
      console.log('token',token)
    }
    
    return(
        <Grid container component="main" className='root'>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
       
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h1>Update Address</h1>
          <form className={classes.form} >
          <Grid container alignItems="flex-start" spacing={1}>

            <TextField
              margin="normal"
              type="text"
              required
              fullWidth
              id="Address"
              label="Address"
              name="Address"
              autoComplete="Address"
              value={add}
              autoFocus
              onChange={(e)=> setAdd(e.target.value)}
            />
          
          <Grid item xs={6}>
            <TextField
              margin="normal"
              type="text"
              fullWidth
              id="Building Name"
              label="Building Name"
              name="Building Name"
              autoComplete="Building Name"
              value={building}
              onChange={e=>setBuilding(e.target.value)}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
            margin="normal"
            type="text"
            fullWidth
            id="House Number"
            label="House Number"
            name="House Number"
            autoComplete="House Number"
            value={houseNo}
            onChange={e=>setHouseNo(e.target.value)}
            /></Grid>
            <TextField
            
            margin="normal"
            type="text"
            fullWidth
            id="Landmark"
            label="Landmark"
            name="Landmark"
            autoComplete="Landmark"
            value={landmark}
            onChange={e=>setLandmark(e.target.value)}
          />
          
          <TextField
          margin="normal"
          type="text"
          fullWidth
          id="Road Name or Number"
          label="Road Name or Number"
          name="Road Name or Number"
          autoComplete="Road Name or Number"
          value= {road}
          onChange={e=>setRoad(e.target.value)}
          
          />
          <Grid item xs={6}>
          <TextField
            margin="normal"
            type="text"
            fullWidth
            id="Colony"
            label="Colony"
            name="Colony"
            autoComplete="Colony"
            value={colony}
            onChange={e=>setColony(e.target.value)}
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
          margin="normal"
          type="text"
          fullWidth
          id="Area"
          label="Area"
          name="Area"
          autoComplete="Area"
          value={area }
          onChange={e=>setArea(e.target.value)}
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            margin="normal"
            type="text"
            fullWidth
            id="City"
            label="City"
            name="City"
            autoComplete="City"
            value={city}
            onChange={e=>setCity(e.target.value)}
            />
            </Grid>
          <Grid item xs={6}>

          <TextField
            margin="normal"
            type="text"
            fullWidth
            id="District"
            label="District"
            name="District"
            autoComplete="District"
            value={district}
            onChange={e=>setDistrict(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
            margin="normal"
            type="text"
            fullWidth
            id="State"
            label="State"
            name="State"
            autoComplete="State"
            value={state}
            onChange={e=>setState(e.target.value)}
          />
          </Grid>
          <Grid item xs={6}>
            <TextField
            margin="normal"
            type="text"
            fullWidth
            id="Pincode"
            label="Pincode"
            name="Pincode"
            autoComplete="Pincode"
            value={pin}
            onChange={e=>setPin(e.target.value)}
            />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Update 
            </Button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    
    )
}

export default withRouter(AddressUpdate);


// Css 
const useStyles = makeStyles((theme) => ({
    root: {
      display :'flex',
      justifyContent : 'center',
      // backgroundImage: 'url(https://images.unsplash.com/photo-1606293926075-69a00dbfde81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)',
      // backgroundRepeat: 'no-repeat',
      // backgroundSize:'100% 100%',
      
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent : 'center',
      background : 'transpaent',
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





  // e.target.elements.term.value