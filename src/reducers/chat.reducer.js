import {ADD_CHAT_MESSAGE} from '../actions/types';
import {chatMessages} from '../services/chat.service';

const messages = chatMessages;

const initialState = messages
    ? {messages}
    : {messages: null};

export function chatReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case ADD_CHAT_MESSAGE:
            return {messages: payload};
        default:
            return state;
    }
}
