import {combineReducers} from "redux";
import chatMessages from './ChatMessages';
import currentUser from './CurrentUser';

export default combineReducers({
    chatMessages, currentUser
});
