import constantsTypes from '../constants-types/constants-type';

const defaultState = {
    name: '',
    password: ''
};

export default function (state = defaultState, action){
    const {type, payload} = action;

    switch (type) {
        case constantsTypes.ADD_LOGIN:
            return Object.assign({}, {name: payload.login, password: payload.password});
    }

    return state;
}
