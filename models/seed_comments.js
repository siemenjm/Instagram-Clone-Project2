const db = require('./index');

const seedComments = [
    {
        content: 'test content for comment 1',
    },
    {
        content: 'test content for comment 2',
    },
    {
        content: 'test content for comment 3',
    }
];

async function getUserIds() {
    try {
        const userIds = await db.User.find({}).select('_id');
        
        seedComments[0].user = userIds[0]._id.toString();
        seedComments[1].user = userIds[1]._id.toString();
        seedComments[2].user = userIds[2]._id.toString();
    } catch(err) {
        console.log(err);
    }
}

async function getPostIds() {
    try {
        const postIds = await db.Post.find({}).select('_id');
        
        seedComments[0].post = postIds[0]._id.toString();
        seedComments[1].post = postIds[1]._id.toString();
        seedComments[2].post = postIds[2]._id.toString();
    } catch(err) {
        console.log(err);
    }
}

async function reloadComments() {
    try {
        const deletedComments = await db.Comment.deleteMany({});
        console.log('Deleted Comments: ', deletedComments);

        await getUserIds();
        await getPostIds();
        const reloadedComments = await db.Comment.insertMany(seedComments);
        console.log('Reloaded Comments: ', reloadedComments);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    reloadComments: reloadComments
}