import * as questionActionTypes from './../action-types/questions';
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from './../_DATA';
import { getUsers, updateLoggedinUserAnswers } from './login'
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
                 dispatch(updateLoggedinUserAnswers(qid, answer));
            })
    }
}

export const saveQuestion = (dispatch, authedUser, optionOneText, optionTwoText, getState) => {
    return () => {
        _saveQuestion({author: authedUser, optionOneText, optionTwoText})
            .then((question)=>{
                console.log(question)

            })
    }
}