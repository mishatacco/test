import {combineReducers} from 'redux';

import {authReducer} from './auth.reducer';
import {chatReducer} from './chat.reducer';
import {messageReducer} from './message.reducer';

export default combineReducers({
    authReducer,
    chatReducer,
    messageReducer,
});
