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
        case loginActionTypes.LOGOUT:
            return {
                ...state,
                loggedInUser: null,
            }
        case loginActionTypes.UPDATE_USER_ANSWERS:
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    answers:{
                        ...state.loggedInUser.answers,
                        [action.payload.qid] : [action.payload.answer]
                    }
                },
            }
            case loginActionTypes.UPDATE_USER_QUESTIONS:
            return {
                ...state,
                loggedInUser: {
                    ...state.loggedInUser,
                    questions:{
                        ...state.loggedInUser.answers,
                        [action.payload.qid] : [action.payload.answer]
                    }
                },
            }
        default:
            return state;
    }
}
