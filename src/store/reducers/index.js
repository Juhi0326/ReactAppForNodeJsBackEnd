import loggedReducer from './loggedReducer';
import counterReducer from './counterReducer';
import toastReducer from './toastReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers( {
    counter: counterReducer,
    loggedIn: loggedReducer,
    toast: toastReducer,
    user: userReducer,
});

export default allReducers;