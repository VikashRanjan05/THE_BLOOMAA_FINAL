import React  from 'react'
import Pricing from './Pricing';
import {useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import './Home.css';
import Contactus from './contactus';
import favicon from "./../image/favicon.png"
import Slider from './Slider';
import {motion} from 'framer-motion'
import ServiceSlider from './ServiceSlider'
const Home = () => { 
  const userdata = useSelector(state => state.Login.userData);


      if(Object.keys(userdata).length >= 1){
        if(userdata.login){
          window.username = userdata.consumer.name.split(" ");
          // window.userlogin = userdata.login
       }}

  
  
  return (
    <div>
    <motion.div maxWidth="sm" 
          initial={{x: "-100vw"}}
          animate={{x : 10}}
          transition={{delay:1 ,  type : "spring" , stiffness : 80}}
          >
          {userdata.login ?
            <span className="name">HELLO  {window.username[0].toUpperCase()} </span>
            :null
          }
          </motion.div>
    
    <ServiceSlider/>
    <CssBaseline/>
      
      <div  className='heroContent'>
      
          
          <span className="offline"> </span>
          <div style={{ backgroundImage: `url(${favicon})` }} className="heroimg"></div><hr/>
        </div>
        
        <h3 className="boxslidertitle">ITEMS IN YOUR BOX</h3>
        <hr className="hrrrr"/>
        <Slider/>
      <Pricing/>
      <Contactus/>
      
    </div>
  )
}

export default Home


// CSS
