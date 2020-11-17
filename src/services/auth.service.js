import {getUserByEmail, isUserRegistered} from './users.service';

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const user = getUserByEmail(username);

        if (user && isUserRegistered(username, password)) {
            const response = {
                data: user
            }
            localStorage.setItem('user', JSON.stringify(response.data));
            resolve(response);
        } else {
            reject('The user is not registered');
        }
    });
};

export const logout = () => {
    localStorage.removeItem('user');
}
