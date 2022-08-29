const db = require('./index');

const seedComments = [
    {
        content: 'test content for comment 1',
        user: "630cd89b7b7f603762f43fcf", // need to update if users have been reloaded
        post: "630cd9d9d594e68060239439" // need to update if posts have been reloaded
    },
    {
        content: 'test content for comment 2',
        user: "630cd89b7b7f603762f43fd0", // need to update if users have been reloaded
        post: "630cd9d9d594e6806023943a" // need to update if posts have been reloaded
    },
    {
        content: 'test content for comment 3',
        user: "630cd89b7b7f603762f43fd1", // need to update if users have been reloaded
        post: "630cd9d9d594e6806023943b" // need to update if posts have been reloaded
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

reloadComments();