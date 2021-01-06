import { LOGIN , CLEARLAST , RELOAD ,LOGOUT , REGISTER , FORGOT_PASS , REGISTER_OTP ,  UPDATE_ADD, UPDATE_NUMBER , UPDATE_NUMBER_OTP , UPDATE_PASS_OTP, UPDATE_NEWPASS , CHOOSE_PLAN , CONFIRMED_PLAN} from '../Actions/Type';

const initialState = {
    userData : {"login":false} ,
    userError : {} ,
    userOrder : {} ,
    userError2 : {}
}

const LoginReducer = (state=initialState , action) => {
    
    switch(action.type){
        case CLEARLAST : return {
            ...state ,
            userError : { }
        }
        case CHOOSE_PLAN : return {
            ...state ,
            userOrder : action.payload
        }
        case CONFIRMED_PLAN : return {
            ...state ,
            userData : action.payload
        }
        case LOGIN : return {
            ...state ,
            userData : action.payload
        }
        case RELOAD : return {
            ...state ,
            userData: action.payload
        }
        case REGISTER_OTP : return {
            
            ...state ,
            userData : action.payload
        }
        case REGISTER : return {
            ...state,
            userError :  action.payload  
        }
        
        case FORGOT_PASS : return {
            ...state ,
            userError : action.payload
        }
        case UPDATE_PASS_OTP : return {
            ...state ,
            userData : action.payload
        }
        case UPDATE_NEWPASS : return {
            ...state ,
            userError : action.payload
        }
        case UPDATE_NUMBER :
        return {
            ...state ,
            userError : action.payload
        }
        case UPDATE_NUMBER_OTP : return{
            ...state,
            userError2 : action.payload
        }
        case UPDATE_ADD : return {
            ...state ,
            userData : action.payload
        }
        case LOGOUT : return {
            ...state ,
            userData : {"login":false} ,
            userError : { } ,
            userOrder : { } ,
            userError2 : { }

        }
        default : return state
    }
}
export default LoginReducer ;

