import {ADD_CHAT_MESSAGE, LOAD_CHAT_MESSAGE} from '../actions/types';

const initialState = {messages: []};

export function chatReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case LOAD_CHAT_MESSAGE:
            return {messages: payload};
        case ADD_CHAT_MESSAGE:
            return Object.assign({}, state, {
                messages: state.messages.concat([payload])
            });
        default:
            return state;
    }
}
