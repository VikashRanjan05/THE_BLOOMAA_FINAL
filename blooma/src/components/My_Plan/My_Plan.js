import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  useSelector } from 'react-redux';
import './My_Plan.css'

// import {Card} from 'react-bootstrap'

const MyPlan = () => {

    const classes = useStyles();
   
    const userData = useSelector(state => state.Login.userData)

    return (
        <>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          {userData.consumer.isSubscribed ? "MY PLAN" : "You Did't Subscribed any plan please choose a plan"}
        </Typography>
        <hr className="hr"/>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          
        </Typography>
      </Container>
      {/* End hero unit */}
    {userData.consumer.isSubscribed ? 
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
         
            
            <Grid item xs={12} sm={ 6} md={ 6}>
              <Card className="card">
                <CardHeader
                  title= "SUBSCRIPTION"
                  subheader=""
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className="header"
                />
                <CardContent>
                  <div className="cardDetail">
                    <Typography className="data" color="textPrimary">
                    PLAN : { userData.consumer.planType}
                    </Typography>
                    
                    <Typography className="data2" color="textPrimary">
                    PRICE : &#8377; { userData.consumer.planPrice}
                    </Typography>
                    <Typography className="data4" color="textPrimary">
                    DATE : { userData.consumer.subscribedAt}
                    </Typography>
                    <Typography className="data3" color="textPrimary">
                     FEATURE : { userData.consumer.planFeature}.
                    </Typography>
                    
                    </div>
                </CardContent>
                
              </Card>
            </Grid>
            {/*activated plan*/}
            <Grid item xs={12} sm={ 6} md={ 6}>
              <Card className="card">
                <CardHeader
                  title= "ACTIVATION DETAILS"
                  subheader=""
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className="header"
                />
                <CardContent>
                   {userData.consumer.isActivated ? 
                    <div className="cardDetail2">
                    
                    <Typography className="data10" color="textPrimary">
                    ACTIVE FROM : { userData.consumer.activationDate}
                    </Typography>
                    <Typography className="data10" color="textPrimary">
                    ACTIVE Till : { userData.consumer.validityDate}
                    </Typography>
                    
                    
                    </div> 
                    :
                    <div className="cardDetail2">
                    <Typography className="data7" color="textPrimary">
                        ACTIVATION PROCESS 
                        
                    </Typography>
                    <Typography className="data5" color="textPrimary">
                    (It is a offline address verification process for the ease of regular delivery during the plan duration. It will take maximum 48hrs .)
                    </Typography>
                    <Typography className="data6" color="textPrimary">
                    Thank You For Choosing Us.
                    </Typography>
                    </div>

                }
                </CardContent>
                
              </Card>
            </Grid>
          
        </Grid>
      </Container>
      : null
    }
    </>
    )
}

export default MyPlan;




const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    heroContent: {
      padding: theme.spacing(2, 0, 6),
    },
    cardPricing: {
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(5),
      
    },
  }));

//   Your plan is in activation process it will take maximum 48hrs .