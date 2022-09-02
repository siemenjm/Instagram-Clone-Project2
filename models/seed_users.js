const bcrypt = require('bcryptjs');
const db = require('./index');

const seedUsers = [
    {
        username: 'testUser1',
        email: 'user1@test.com',
    },
    {
        username: 'testUser2',
        email: 'user2@test.com',
    },
    {
        username: 'testUser3',
        email: 'user3@test.com',
    }
];

async function encryptPasswords() {
    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash('test', salt); // every seedUser's password is 'test'

        seedUsers.forEach((user) => {
            user.password = hash;
        });
    } catch(err) {
        console.log(err);
    }
}

async function reloadUsers() {
    try {
        const deletedUsers = await db.User.deleteMany({});

        await encryptPasswords();
        const reloadedUsers = await db.User.insertMany(seedUsers);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    reloadUsers: reloadUsers
}