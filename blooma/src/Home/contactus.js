import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './Home.css'

const Contactus = () => {
    return (
        <div className="mainn">
            <CssBaseline/>
            <Container maxWidth="xl" component="main" className="mainn">
                <span className="headcontact">CONTACT US</span>
                <hr className="hrr"/>
                <Grid container spacing={1} alignItems="flex-start">
                    <Grid item xs={6} sm={6} >
                        <span className="contactno">Contact Number :</span>
                    </Grid>
                    <Grid item xs={6} sm={6} >
                        <span className="contactno"> 9117501404 / 9117501405</span>
                    </Grid>
                    <Grid item xs={4} sm={6} >
                        <span className="contactmail">Email ID : </span>
                    </Grid>
                    <Grid item xs={8} sm={6} >
                        <span className="contactmail">officialthebloomaa@gmail.com</span>
                    </Grid>
                </Grid>
                
            </Container>
            <div className="cp">
            <span className="copy">Copyright  &#169; THE BLOOMA &nbsp;2020</span>
            </div>

        </div>
    )
}

export default Contactus
