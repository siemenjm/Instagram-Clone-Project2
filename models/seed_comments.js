const db = require('./index');

const seedComments = [
    {
        content: 'test content for comment 1',
        user: "630e0fc81206dd62cd1e45cd", // need to update if users have been reloaded
        post: "630e108786530defc7bfce1c" // need to update if posts have been reloaded
    },
    {
        content: 'test content for comment 2',
        user: "630e0fc81206dd62cd1e45ce", // need to update if users have been reloaded
        post: "630e108786530defc7bfce1d" // need to update if posts have been reloaded
    },
    {
        content: 'test content for comment 3',
        user: "630e0fc81206dd62cd1e45cf", // need to update if users have been reloaded
        post: "630e108786530defc7bfce1e" // need to update if posts have been reloaded
    }
];

async function reloadComments() {
    try {
        const deletedComments = await db.Comment.deleteMany({});
        console.log(deletedComments);

        const reloadedComments = await db.Comment.insertMany(seedComments);
        console.log(reloadedComments);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    reloadComments: reloadComments
}