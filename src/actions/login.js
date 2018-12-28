import * as loginActionTypes from './../action-types/login';
import { _getUsers } from './../_DATA';

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
}


export const getUsers = (dispatch, getState) => {
    console.log(dispatch)
    return () => {
        _getUsers()
            .then((users)=>{
                dispatch(setUsers(users))
            })
    }
};