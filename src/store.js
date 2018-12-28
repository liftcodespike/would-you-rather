import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import { loginReducer } from './reducers/login';

export const INIT_STATE = {
    loggedInUser: null,
}

export const store = createStore(
    loginReducer,
    applyMiddleware(thunk)
);


