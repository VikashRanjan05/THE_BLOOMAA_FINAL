import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist'
import RootReducer from './RootReducer'
// import logger from 'redux-logger'

export const store = createStore(RootReducer,applyMiddleware(thunk ));
export const persistor = persistStore(store);


export default (store , persistor);