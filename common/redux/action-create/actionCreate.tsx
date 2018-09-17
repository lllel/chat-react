import constantsTypes from '../constants-types/constants-type';

export function addMessage(message) {
    return (dispatch) => {
        dispatch({
            type: constantsTypes.ADD_MESSAGE,
            payload: {
                message
            }
        });
    }
}

export function addLogin(data) {
    return (dispatch) => {
        dispatch({
            type: constantsTypes.ADD_LOGIN,
            payload: {
                login: data.login,
                password: data.password
            }
        });
    }
}
