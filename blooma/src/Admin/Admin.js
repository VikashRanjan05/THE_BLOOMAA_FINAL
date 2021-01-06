import React  ,{useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import axios from 'axios';
import {Check_Otp} from './../Redux/index';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Admin = () => {

    const admin = useSelector(state => state.Admin.admin);
    const adminError = useSelector(state => state.Admin.adminError);
    const dispatch = useDispatch();
    const history = useHistory();
    const [flag , setFlag] = useState(false)
    const [flag2 , setFlag2] = useState(false)
    
    const HandleAdminAccess = (e) =>{
        e.preventDefault();
        axios.post(`/adminAccess/access`,{},{
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': admin.token
            } 
        })
        .then(res=>{
            
            setFlag2(res.data.accessotp);
            dispatch(Check_Otp(res.data))
        })
        .catch(err=>{
           
        })
    }

    useEffect(()=>{
        if(Object.keys(adminError).length > 0){
        if(flag2){
                history.push('/Blooma/AdminAccessOtp')
               }
        else{
                // setToken(user.token);
                // alert(admin.msg)
                
              }
      }},[adminError ,history , flag2])

    const HandleNewAdmin = (e) =>{
        e.preventDefault();
        axios.post(`/newAdmin/ragister`,{},{
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token': admin.token
            } 
        })
        .then(res=>{
            
            setFlag(res.data.newAdd)
            dispatch(Check_Otp(res.data))

        })
        .catch(err => {
           
        })
    }

    useEffect(()=>{
        if(Object.keys(adminError).length > 0){
        if(flag){
                history.push('/Blooma/AddNewAdminOtp')
               }
        else{
                // setToken(user.token);
                // alert(admin.msg)
                
              }
      }},[adminError ,history , flag])
  
      useEffect(()=>{
        return () => {
          setFlag(false)
          setFlag2(false)
        };
      },[])
    
  
    //   useEffect(()=>{
    //     // setError(false)
        
    //   },[])


    return (
        <div>
            <h2>You are in admin Pannel</h2>
            <Button fullWidth variant="contained" color="primary" style={{marginTop : '20px'}} onClick={HandleAdminAccess}>Access Consumer Database</Button>
            <Button fullWidth variant="contained" color="primary" style={{marginTop : '20px'}} onClick={HandleNewAdmin}>Add New Admin</Button>
        </div>
    )
}

export default Admin
