import moment from 'moment';

import db from '../db';

export const getAllChatMessages = () => {
    return db.table('chatMessages').toArray();
};

export const addChatMessage = (message, username) => {
    const timestamp = moment().format('LLLL');
    return db.table('chatMessages').add({username, message, timestamp})
        .then((id) => {
            return db.table('chatMessages').get(id);
        });
}
