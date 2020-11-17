export const users = [
    {
        username: 'matt@mail.com',
        firstName: 'Matt',
        lastName: 'Damon',
        email: 'matt@mail.com',
        password: 'Qwqfgfreere44'
    },
    {
        username: 'bob@mail.com',
        firstName: 'Bob',
        lastName: 'Salter',
        email: 'bob@mail.com',
        password: 'Qfdfdfreere44'
    },
    {
        username: 'john@mail.com',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@mail.com',
        password: 'Qwqrereeere44'
    }
];


export const getUserByEmail = (username) => {
    return users.find((user) => user.username === username)
};

export const isUserRegistered = (username, password) => {
    const user = getUserByEmail(username);
    return user? user.password === password : false;
};

export const getAllUsers = () => {
    return users;
};
