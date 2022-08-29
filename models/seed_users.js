const db = require('./index');

const seedUsers = [
    {
        username: 'testUser1',
        email: 'user1@test.com'
    },
    {
        username: 'testUser2',
        email: 'user2@test.com'
    },
    {
        username: 'testUser3',
        email: 'user3@test.com'
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