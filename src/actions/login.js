import * as loginActionTypes from './../action-types/login';
import { _getUsers, _saveQuestion } from './../_DATA';

export const login = (user) => {
    return { 
        type: loginActionTypes.LOGIN,
        payload: user,
    }
};

export const setUsers = (users) => {
    return {
        type: loginActionTypes.SET_USERS,
        payload: users,
    }
};

export const logout = (users) => {
    return {
        type: loginActionTypes.LOGOUT,
    }
};

export const  updateLoggedinUserAnswers = (qid, answer)=> {
    return {
        type: loginActionTypes.UPDATE_USER_ANSWERS,
        payload:{qid, answer}
    }

}
export const  updateLoggedinUserQuestions = (qid, option1, option2)=> {
    return {
        type: loginActionTypes.UPDATE_USER_ANSWERS,
        payload:{qid, option1, option2}
    }
}
export const getUsers = (dispatch, getState) => {
    return () => {
        _getUsers()
            .then((users)=>{
                dispatch(setUsers(users))
        })
    }
};

export const saveQuestion = (dispatch, getState) => {
    return () => {
        _saveQuestion()
            .then((users)=>{
                dispatch(setUsers(users))
        })
    }
};