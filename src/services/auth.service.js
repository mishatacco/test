import {getUserByEmail, getRegisteredUser} from './users.service';
import db from '../db';

export const register = (username, email, password, firstName, lastName) => {
    return getUserByEmail(email)
        .then((result) => {
            if (!result) {
                return db.table('users').add({username, email, password, firstName, lastName});
            } else {
                throw new Error('The user with this email is registered');
            }
        });
};

export const login = (username, password) => {
    return getRegisteredUser(username, password)
        .then((result) => {
            if (result) {
                const response = {
                    data: result
                }
                localStorage.setItem('user', JSON.stringify(response.data));
                return response;
            } else {
                throw new Error('The user is not registered');
            }
        });
};

export const logout = () => {
    localStorage.removeItem('user');
}
