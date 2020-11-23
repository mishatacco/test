import React from 'react';
import {useSelector} from 'react-redux';

import ChatMessageComponent from './chat-message.component';

const ChatMessagesHistoryComponent = () => {
    const {messages} = useSelector(state => state.chatReducer);

    const chatMessagesComponent = messages.map((message) => {
        return <li className="list-group-item"><ChatMessageComponent key={message.id}
                                                                     username={message.username}
                                                                     message={message.message}
                                                                     timestamp={message.timestamp}/></li>
    });

    return (<ul className="list-group chat">{chatMessagesComponent}</ul>);
}

export default ChatMessagesHistoryComponent;
