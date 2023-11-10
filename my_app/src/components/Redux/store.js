import {combineReducers,applyMiddleware,createStore} from 'redux'
import Userreducer from "./Reducers/userreducer";
import thunk from 'redux-thunk'
import Productreducer from './Reducers/productreducer';
const RootReducer = combineReducers({
    User: Userreducer,
    Product : Productreducer
});

export const store = createStore(RootReducer, applyMiddleware(thunk))
    
