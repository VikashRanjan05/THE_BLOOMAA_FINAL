import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from'redux-persist/lib/storage'
import  LoginReducer  from './Reducers/LoginReducer';
import AdminReducer from './admin/Reducers/AdminReducer'

const persistConfig = {
    key : 'root',
    storage ,
    whitelist : ['Login' , 'Admin']
}

const RootReducer = combineReducers({
    Login : LoginReducer ,
    Admin : AdminReducer
})

export default persistReducer(persistConfig,RootReducer);