import * as questionActionTypes from './../action-types/questions';
import { _getQuestions, _saveQuestionAnswer } from './../_DATA';
import { getUsers } from './login'
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
export const saveQuestionAnswer= (dispatch, authedUser, qid, answer, getState) => {
    return () => {
        _saveQuestionAnswer({authedUser, qid, answer})
            .then((questions)=>{
                console.log(questions)
                 dispatch(getQuestions(dispatch));
                 dispatch(getUsers(dispatch));
            })
    }
}