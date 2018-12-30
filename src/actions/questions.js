import * as questionActionTypes from './../action-types/questions';
import { _getQuestions } from './../_DATA';
export const setQuestions= (questions) => {
    return {
        type: questionActionTypes.SET_QUESTIONS,
        payload: questions,
    }
};

export const getQuestions= (dispatch, getState) => {
    return () => {
        _getQuestions()
            .then((questions)=>{
                dispatch(setQuestions(questions))
            })
    }
}