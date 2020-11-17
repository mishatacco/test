import {ADD_CHAT_MESSAGE} from './types';

export const addChatMessage = (message) => ({
    type: ADD_CHAT_MESSAGE,
    payload: message,
});
