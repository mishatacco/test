import React from 'react';

const ChatMessageComponent = (props) => {

    return (
        <div>
            <h6>{props.username} {props.timestamp}</h6>
            <p>{props.message}</p>
        </div>
    );
}

export default ChatMessageComponent;
