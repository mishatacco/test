import {ADD_CHAT_MESSAGE, LOAD_CHAT_MESSAGE} from './types';

import {addChatMessage, getAllChatMessages} from '../services/chat.service';

export const addChatMessageAction = (message, username) => (dispatch) => {
    return addChatMessage(message, username)
        .then((result) => {
            dispatch({
                type: ADD_CHAT_MESSAGE,
                payload: result,
            });
            return Promise.resolve();
        })
};


export const loadChatMessageAction = () => (dispatch) => {
    return getAllChatMessages()
        .then((result) => {
            dispatch({
                type: LOAD_CHAT_MESSAGE,
                payload: result,
            });
            return Promise.resolve();
        })
};
