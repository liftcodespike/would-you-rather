import { createStore } from 'redux';
import { LoginReducer, loginReducer } from './reducers/login';

export const INIT_STATE = {
    isLoggedIn: false,
}

export const store = createStore(loginReducer);


