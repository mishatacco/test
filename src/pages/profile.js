import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import UserComponent from '../components/user/user.component';

const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.authReducer);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <UserComponent className="user"
                       username={currentUser.username}
                       firstName={currentUser.firstName}
                       lastName={currentUser.lastName}
                       email={currentUser.email}
        />
    );
};

export default Profile;
