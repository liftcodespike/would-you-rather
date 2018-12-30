import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from './reducers/login';
import { questionReducer } from './reducers/questions';

export const INIT_STATE = {
    loggedInUser: null,
}

const rootReducer = combineReducers({
    login: loginReducer,
    questions: questionReducer,
  })

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);


