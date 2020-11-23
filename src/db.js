import Dexie from 'dexie';

const db = new Dexie('TestDB');

db.version(1).stores({
    users: '&email, &username, password',
    chatMessages: '++id'
});

export default db;
