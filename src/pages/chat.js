import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {addChatMessageAction} from '../actions/chat.action';
import ChatMessagesHistoryComponent from '../components/chat/chat-message-history.component';

const Chat = () => {
    const {user: currentUser} = useSelector((state) => state.authReducer);

    const [nextInputText, setNextInputText] = useState('');

    const dispatch = useDispatch();

    if (!currentUser) {
        return <Redirect to="/login"/>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setNextInputText('');
        dispatch(addChatMessageAction(nextInputText, currentUser.username));
    };

    const onChange = (event) => {
        setNextInputText(event.target.value);
    };

    return (
        <div className="card">
            <ChatMessagesHistoryComponent key={1}/>
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
