import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './WhyWe.css'
const WhyWe = () => {
    return (
        <div>
        <Grid container component='main' className='main'>
        <CssBaseline/>
            <Grid item xs={11} sm={10} md={10} component={Paper} elevation={6}  className="MainContainer6">
            <Grid container alignItems="center" spacing={1} className='container'>
                <Grid container alignItems='center'>
                    <span className="Title">About Us</span>
                    <hr className='hrrr' />
                    <span className="containt">
                        THE BLOOMAA is started with a clear vision to provide our consumer the best services 
                        and a support to the backbone of our country(Farmers).<br /><br />
                        From a ground level research we found that after spending fair amount of effort and money
                        consumers are not getting good quality of product and services while on the other side farmers are not getting 
                        currect amount of their work.The prime aim of THE BLOOMAA is to provide best services at consumers door-step and also helping the farmers to get real value of their work.<br /><br />
                        We THE BLOOMAA wants to start your every day in a positive way by providing you a fresh flower box.<br />
                        Our services at THE BLOOMAA is ecofriendly,farmer supportive and consumer oriented.<br />
                        So, choose us wisely and enjoy our services..<br /><br />
                        <span className="thank">!-- Thank You --!</span> 
                    </span>
                </Grid>
            </Grid>    
            </Grid>
        </Grid>
        </div>
    )
}

export default WhyWe
