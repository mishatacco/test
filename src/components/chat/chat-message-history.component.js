import React from 'react';

import ChatMessageComponent from './chat-message.component';

const ChatMessagesHistoryComponent = ({messages}) => {
    const chatMessagesComponent = messages.map((message, index) => {
        return <li className="list-group-item"><ChatMessageComponent id={index} username={message.username} message={message.message} timestamp={message.timestamp} /></li>
    });

    return (<ul className="list-group chat">{chatMessagesComponent}</ul>);
}

export default ChatMessagesHistoryComponent;
