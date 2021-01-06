import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './WhyWe.css'
const OurServices = () => {
    return (
        <div>
        <Grid container component='main' className='main'>
        <CssBaseline/>
            <Grid item xs={11} sm={10} md={10} component={Paper} elevation={6}  className="MainContainer7">
            <Grid container alignItems="center" spacing={1} className='container'>
                <Grid container alignItems='center'>
                    <span className="Title2">Our Services</span>
                    <hr className='hrrr2' />
                    <span className="containt2">
                        We provide a box of fresh flower for the everyday pooja. <br /><br />
                        The box will be delievered before your praying hrs. <br /><br />
                        We also take bulk order for flowers on any occasion.<br />
                        For Bulk order contact us on our contact Details..
                    </span>
                </Grid>
            </Grid>    
            </Grid>
        </Grid>
        </div>
    )
}

export default OurServices
