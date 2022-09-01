const db = require('./index');

const seedComments = [
    {
        content: 'test content for comment 1',
        user: "630f65b9d0cc20f68e9376cc", // need to update if users have been reloaded
        post: "630f660bb49a6f9e33a9973f" // need to update if posts have been reloaded
    },
    {
        content: 'test content for comment 2',
        user: "630f65b9d0cc20f68e9376cd", // need to update if users have been reloaded
        post: "630f660bb49a6f9e33a99740" // need to update if posts have been reloaded
    },
    {
        content: 'test content for comment 3',
        user: "630f65b9d0cc20f68e9376ce", // need to update if users have been reloaded
        post: "630f660bb49a6f9e33a99741" // need to update if posts have been reloaded
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