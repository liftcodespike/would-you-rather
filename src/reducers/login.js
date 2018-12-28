import * as loginActionTypes from './../action-types/login';
import { INIT_STATE } from './../store';

export const loginReducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case loginActionTypes.LOGIN:
            return {
                ...state,
                loggedInUser: action.payload,
            }
        case loginActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    }
}