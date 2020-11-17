import React from 'react';

import UserComponent from './user.component';
import {getAllUsers} from '../../services/users.service';

const UserListComponent = () => {
    const users = getAllUsers();

    const chatMessagesComponent = users.map((user, index) => {
        return <li className="list-group-item"><UserComponent id={index}
                                                              username={user.username}
                                                              firstName={user.firstName}
                                                              lastName={user.lastName}
                                                              email={user.email}/></li>
    });

    return (<ul className="list-group justify-content-center user-list">{chatMessagesComponent}</ul>);
}

export default UserListComponent;
