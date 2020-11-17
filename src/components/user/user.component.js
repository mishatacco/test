import React from 'react';

const UserComponent = ({username, firstName, lastName, email}) => {

    return (
        <div className="card user">
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="user-img-card"
            />
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{firstName}</p>
                    <p className="card-text">{lastName}</p>
                    <p className="card-text">{email}</p>
                </div>
        </div>
    );
}

export default UserComponent;
