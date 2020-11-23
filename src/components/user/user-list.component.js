import React, {useEffect, useState} from 'react';

import UserComponent from './user.component';
import {getAllUsers} from '../../services/users.service';

const UserListComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(
            (response) => {
                setUsers(response);
            },
            (_error) => {
                setUsers([]);
            }
        );
    }, []);

    const userComponent = users.map((user) => {
        return <li className="list-group-item"><UserComponent key={user.email}
                                                              username={user.username}
                                                              firstName={user.firstName}
                                                              lastName={user.lastName}
                                                              email={user.email} /></li>
    });

    return (<ul className="list-group justify-content-center user-list">{userComponent}</ul>);
}

export default UserListComponent;
