import { CHECK_NUMBER , EXPDATE ,CHECK_OTP ,FLAG , CLEAR , BYDATE, DATA ,USERDB, LOGOUT ,SUBDATE } from './../Actions/Type'

const initialState = {
    admin : { "adminLogin" : false } ,
    userdb : { } ,
    adminError : { } ,
    Error2 : { },
    Data : [],
    subdate : [],
    Expdate : []
}

const AdminReducer = (state=initialState , action) =>{

    switch(action.type){
        case SUBDATE : return {
            ...state,
            subdate : action.payload
        }
        case EXPDATE : return {
            ...state,
            Expdate : action.payload
        }
        case DATA : return{
            ...state ,
            Data : { }
        }
        case USERDB : return {
            ...state,
            userdb : action.payload
        }
        case LOGOUT : return {
            ...state , 
            admin : { "adminLogin" : false } ,
            adminError : { } ,
            Error2 : { },
            Data : [] ,
            subdate : [],
            Expdate : []
        }
        case CHECK_NUMBER : return {
            ...state ,
            admin : action.payload
        }
        case CHECK_OTP : return {
            ...state ,
            adminError : action.payload
        }
        case FLAG : return {
            ...state ,
            Error2 : action.payload
        }
        case BYDATE : return {
            ...state,
            Data : action.payload
        }
        case CLEAR : return {
            ...state ,
            adminError : { },
            Error2 : { }
        }
        default : return state
    }

}

export default AdminReducer;