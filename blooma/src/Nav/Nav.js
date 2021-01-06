import React ,{ useEffect } from 'react';
import { Navbar , Nav , Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Nav.css';
import {useSelector , useDispatch } from 'react-redux';
import { Logout_Action } from './../Redux/index';
import { LogoutAdmin } from './../Redux/index';
import { useHistory } from 'react-router';
import {Reload_Action} from './../Redux/index'
import Axios from 'axios';
import {motion} from 'framer-motion'

const Navigation = () => {
    const userData = useSelector(state => state.Login.userData)
    const Admin = useSelector(state => state.Admin.admin)
    const dispatch = useDispatch();
    const history = useHistory();
    const token = userData.token;
   
    const logout = () =>{
     
        dispatch(Logout_Action());
        history.push('/Blooma/');
        history.go((history.length - 1))
    }

    const Logout_Admin = () =>{
        dispatch(LogoutAdmin());
        history.push('/Blooma/number');
        history.go((history.length - 1))
    }

    // const config =
    // console.log(config)
    
    useEffect(()=>{
        Axios.post("http://localhost:5000/gettingUserSession",{}, { 
            headers:{
              'Content-Type' : 'application/json',
              'x-auth-token': token
            }})
    .then(res=>{
        
        dispatch(Reload_Action({"data" : res.data}))
    })
    .catch(err=>{
        
    })
    },[dispatch,token])

    if(Object.keys(userData).length >= 1){
        window.login = userData.login
    }
    if(Object.keys(Admin).length >= 1){
        window.adminlogin = Admin.adminLogin
    }
    

    return (
        <motion.div
            initial={{y:"-50vw"}}
            animate={{y:0}}
            transition={{delay:0.2 ,  duration : 0.6}}
        >
            <Navbar sticky="top" collapseOnSelect expand="lg" className="navbr " variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="togglebtn"/>
                <Navbar.Brand as={Link} className="brand " to='/Blooma/'>
                   <span className="brand_Name">THE BLOOMAA</span>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav  className="ml-auto navdown" >
                    <Nav.Item  className="navlin" ><Nav.Link eventKey='6' as={Link} to="/Blooma/whywe">About Us</Nav.Link></Nav.Item>
                    <Nav.Item className="navlin" ><Nav.Link eventKey='5' as={Link} to="/Blooma/ourservices">Our Services</Nav.Link></Nav.Item>
                    {
                        window.login ?<>
                    <Nav.Item className="navlin" ><Nav.Link eventKey='1' as={Link} to="/Blooma/My_Plan">My Plan</Nav.Link></Nav.Item>
                    <Nav.Item className="navlin" ><Nav.Link eventKey='2' as={Link} to="/Blooma/my_profile">My Profile</Nav.Link></Nav.Item>
                    <Button  variant="danger" size="sm" className='btn' onClick={logout}>LOGOUT</Button></>
                    : <>
                    <Nav.Item className="navlin" ><Nav.Link eventKey='3' as={Link} to="/Blooma/Login">Login</Nav.Link></Nav.Item>
                    <Nav.Item className="navlin" ><Nav.Link eventKey='4' as={Link} to="/Blooma/Register">Register</Nav.Link></Nav.Item>
                    </>    
                    }
                    {
                        window.adminlogin  ?
                        <>
                        <Nav.Item className="navlin" ><Nav.Link eventKey='10' as={Link} to="/Blooma/Admin_Sir_Blooma">Admin Home</Nav.Link></Nav.Item>
                        <Button  variant="danger" size="sm" className='btn' onClick={Logout_Admin}>Admin Logout</Button>
                        </> : null
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </motion.div>
    )
}

export default Navigation;
