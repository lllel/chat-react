import constantsTypes from '../constants-types/constants-type';
import {tools, saveLocalStorage, loadLocalStorage} from '../../core/tools';

const defaultState = [
    {
        id: tools.randomStr(5),
        name: 'Anna',
        message: 'Hi Andrea! How are you?',
        data: '5 minutes ago',
        me: false

    },
    {
        id: tools.randomStr(5),
        name: 'Andrey',
        message: 'Doing good, how do you feel about grabbing a coffee sometime?',
        data: '5 minutes ago',
        me: true
    }
];

export default function (state = loadLocalStorage() || defaultState, action){
    const {type, payload} = action;

    switch (type) {
        case constantsTypes.ADD_MESSAGE:
            const stateCopy = JSON.parse(JSON.stringify(state));

            stateCopy.push(payload.message);
            saveLocalStorage(stateCopy);

            return stateCopy;
    }

    return state;
}
