const db = require('./index');

const seedUsers = [
    {
        username: 'testUser1',
        email: 'user1@test.com',
        password: 'testUser1'
    },
    {
        username: 'testUser2',
        email: 'user2@test.com',
        password: 'testUser2'
    },
    {
        username: 'testUser3',
        email: 'user3@test.com',
        password: 'testUser3'
    }
];

async function reloadUsers() {
    try {
        const deletedUsers = await db.User.deleteMany({});
        console.log(deletedUsers);

        const reloadedUsers = await db.User.insertMany(seedUsers);
        console.log(reloadedUsers);
    } catch(err) {
        console.log(err);
    }
}

reloadUsers();