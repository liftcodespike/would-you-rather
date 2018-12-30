import * as questionActionTypes from './../action-types/questions';
import { INIT_STATE } from './../store';

export const questionReducer = (state = INIT_STATE, action) => {
    switch (action.type){

        case questionActionTypes.SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            }


        default:
            return state;
    }
};