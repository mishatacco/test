import moment from 'moment';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {addChatMessage} from '../actions/chat.action';
import ChatMessagesHistoryComponent from '../components/chat/chat-message-history.component';

const Chat = () => {
    const {user: currentUser} = useSelector((state) => state.authReducer);
    const {messages} = useSelector(state => state.chatReducer);

    const [nextInputText, setNextInputText] = useState('');

    const dispatch = useDispatch();

    if (!currentUser) {
        return <Redirect to="/login"/>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const timestamp = moment().format('LLLL')
        const updatedMessages = messages.concat([{username: currentUser.username, message: nextInputText, timestamp}]);
        setNextInputText('');
        dispatch(addChatMessage(updatedMessages))
    };

    const onChange = (event) => {
        setNextInputText(event.target.value);
    };

    return (
        <div className="card">
            <ChatMessagesHistoryComponent messages={messages}/>
            <div className="card-footer">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            name="chat"
                            onChange={onChange}
                            value={nextInputText}
                        />
                        <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-primary btn-block">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;
