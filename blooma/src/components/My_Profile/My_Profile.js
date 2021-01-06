import React from 'react'
import { withRouter , useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Style/My_Profile.css'
import {  useSelector } from 'react-redux';

const MyProfile = () => {

    
    const history = useHistory();
    const user = useSelector(state=> state.Login.userData)
    const handleClick = () =>{
        
        history.push('/Blooma/Address_Update')
    }

    const handleNumber = () =>{
        history.push('/Blooma/Update_Number')
    }


    return (
        <div>
        <Grid container component='main' className='main'>
        <CssBaseline/>
            <Grid item xs={11} sm={10} md={10} component={Paper} elevation={6}  className="MainContainer">
            <Grid container alignItems="flex-start" spacing={1} className='container'>
         
                <Grid container alignItems='center'>
                
                    <Grid container item xs={12} md={8} className='container'>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Name : </span><span className='detail'>{user.consumer.name}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Number : </span><span className='detail'> {user.consumer.number}</span>
                        </Grid>
                        

                        
                    </Grid>
                    
                    <Grid item xs={12} md={4} className='container'>
                        <Button
                        type="submit"
                        size ='small'
                        variant="contained"
                        onClick={handleNumber}
                        className='button'
                        >
                        Update Number
                        </Button>
                    </Grid>
                </Grid>
                <hr className="hr"/>
                <Grid container alignItems='center'>
               
                    <Grid container item xs={12} md={8} className='container2'>
                        
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Building Name : </span><span className='detail'> {user.consumer.appartment_or_building_name}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>House Number : </span><span className='detail'> {user.consumer.flat_or_house_number}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Landmark : </span><span className='detail'>{user.consumer.landmark}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Road Name : </span><span className='detail'> {user.consumer.road_name_or_number}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Colony : </span><span className='detail'> {user.consumer.colony}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Area : </span><span className='detail'> {user.consumer.area}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>City : </span><span className='detail'> {user.consumer.city}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>District : </span><span className='detail'> {user.consumer.district}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>State : </span><span className='detail'> {user.consumer.state}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Pincode : </span><span className='detail'> {user.consumer.pincode}</span>
                        </Grid>
                        <Grid item xs={12} md={12} className='item'>
                            <span className='title'>Address : </span><span className='detail'>{user.consumer.address}</span>
                        </Grid>

                    
                    </Grid>
                        
                        <Grid item xs={12} md={3} className='container2'>
                        <Button
                        type="submit"
                        size='small'
                        variant="contained"
                        className='submit'
                        onClick={handleClick}
                        >
                        Update Address
                        </Button>
                    
                    </Grid>
                </Grid>
            </Grid>
            
                
            
            </Grid>
        </Grid>
        </div>
    )
}

export default withRouter(MyProfile)



