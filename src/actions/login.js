import * as loginActionTypes from './../action-types/login';

export const login = (userName) => {
    return { 
        type: loginActionTypes.LOGIN,
        payload: userName,
    }
};
