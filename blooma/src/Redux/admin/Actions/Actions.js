import {INCREMENT , CHECK_NUMBER , CHECK_OTP , FLAG , CLEAR , BYDATE , DATA , USERDB , SUBDATE , EXPDATE , LOGOUT} from './Type'

export const Increment = () => dispatch =>{
    dispatch({
        type :INCREMENT
    })
}
export const Expdate = (data) => dispatch =>{
    dispatch({
        type : EXPDATE ,
        payload : data
    })
}
export const Subdate = (data) => dispatch =>{
    dispatch({
        type : SUBDATE,
        payload : data
    })
}

export const Userdb = (data) => dispatch =>{
    dispatch({
        type : USERDB ,
        payload : data
    })
}
//  LOGOT ADMIN 
export const LogoutAdmin = () => dispatch =>{
    dispatch({
        type : LOGOUT
    })
}
export const ClearData = ()=>dispatch =>{
    dispatch({
        type : DATA
    })
}
// Check Number

export const Check_Number = (data) => dispatch =>{
    dispatch({
        type : CHECK_NUMBER ,
        payload : data
    })
}

export const Check_Otp = (data) => dispatch =>{
    dispatch({
        type : CHECK_OTP ,
        payload : data
    })
}

export const Flag = (data) =>dispatch =>{
    dispatch({
        type : FLAG ,
        payload : data
    })
}

export const Clear = () => dispatch =>{
    dispatch({
        type: CLEAR 
    })
}

export const ByDate = (data) =>dispatch =>{
    dispatch({
        type : BYDATE ,
        payload : data
    })
}
