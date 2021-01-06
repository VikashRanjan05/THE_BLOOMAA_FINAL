import {LOGIN , RELOAD , CLEARLAST , LOGOUT , REGISTER , FORGOT_PASS, REGISTER_OTP , UPDATE_ADD , UPDATE_NUMBER , UPDATE_NUMBER_OTP ,  UPDATE_PASS_OTP , UPDATE_NEWPASS , CHOOSE_PLAN , CONFIRMED_PLAN } from './Type'
import axios from 'axios';


export const Clearlast = () =>dispatch=>{
    dispatch({
        type :  CLEARLAST 
        
    })
}
// Choose Plan Action 

export const Choose_Plan = (data)=>dispatch => {
    dispatch({
        type : CHOOSE_PLAN , 
        payload : data
    })
}
// Confirmed Plan details Action

export const Confirmed_plan = (data) => dispatch =>{
    dispatch({
        type : CONFIRMED_PLAN ,
        payload : data
    })
}
//  LOGIN Action
export const Login_Action = (details)=>dispatch =>{

    axios.post(`http://localhost:5000/login`,{'number' : details.number , 'password' : details.password})
    .then(res =>{
        dispatch({
            type : LOGIN,
            payload : res.data
        })
    }) 
}


// Register Action 
export const Register_Action = (detail) =>dispatch =>{
    dispatch({
        type : REGISTER ,
        payload : detail
    })
}

// REGISTER_OTP Action 
export const Register_Otp = (data) => dispatch =>{
    
        dispatch({
            type: REGISTER_OTP , 
            payload : data
        })
    
}

// Forgot Password Action 

export const Forgot_pass = (data) =>dispatch =>{
    
        dispatch({
            type : FORGOT_PASS ,
            payload : data
        })
    
}

// Forgot pass OTP verification

export const Forgot_Pass_Otp = (data) =>dispatch=>{
    dispatch({
        type : UPDATE_PASS_OTP ,
        payload : data
    })
}

//  new password updation

export const Update_NewPass = (data) => dispatch =>{
    dispatch({
        type : UPDATE_NEWPASS ,
        payload : data
    })
}

//  Update Address Action 

export const Update_add =(data)=> dispatch =>{
   dispatch({
       type : UPDATE_ADD ,
       payload : data
   })
    
}

// Update Numnber  Action 
 
export const Update_Number = (data) =>dispatch=>{
    dispatch({
        type : UPDATE_NUMBER ,
        payload : data
    })
}

// Update Numnber Otp  Action 
 
export const Update_Number_Otp = (data) =>dispatch=>{
    dispatch({
        type : UPDATE_NUMBER_OTP ,
        payload : data
    })
}


// RELAOD Action
export const Reload_Action = (data) => dispatch =>{
    dispatch({
        type : RELOAD ,
        payload : data.data
    })
}


export const Logout_Action = () =>dispatch =>{
    dispatch({
        type: LOGOUT 
    })
}
