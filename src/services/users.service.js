import db from '../db';

export const getUserByEmail = (email) => {
    return db.table('users')
        .where('email').equals(email)
        .first();
};

export const getRegisteredUser = (username, password) => {
    return db.table('users')
        .filter((user) => {
            return user.username === username && user.password === password
        })
        .first();
};

export const getAllUsers = () => {
    return db.table('users').toArray();
};
