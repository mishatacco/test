import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

import UserListComponent from '../components/user/user-list.component';

const Home = () => {
    const { user: currentUser } = useSelector((state) => state.authReducer);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <UserListComponent className="user-list"/>
    );
};

export default Home;
