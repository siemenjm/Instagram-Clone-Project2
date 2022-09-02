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
    },
    {
        content: 'test content for comment 4',
    },
    {
        content: 'test content for comment 5',
    },
    {
        content: 'test content for comment 6',
    },
    {
        content: 'test content for comment 7',
    },
    {
        content: 'test content for comment 8',
    },
    {
        content: 'test content for comment 9',
    },
    {
        content: 'test content for comment 10',
    },
];

async function getUserIds() {
    try {
        const userIds = await db.User.find({}).select('_id');
        
        seedComments[0].user = userIds[0]._id.toString();
        seedComments[1].user = userIds[0]._id.toString();
        seedComments[2].user = userIds[0]._id.toString();
        seedComments[3].user = userIds[1]._id.toString();
        seedComments[4].user = userIds[1]._id.toString();
        seedComments[5].user = userIds[1]._id.toString();
        seedComments[6].user = userIds[2]._id.toString();
        seedComments[7].user = userIds[2]._id.toString();
        seedComments[8].user = userIds[2]._id.toString();
        seedComments[9].user = userIds[2]._id.toString();
    } catch(err) {
        console.log(err);
    }
}

async function getPostIds() {
    try {
        const postIds = await db.Post.find({}).select('_id');
        
        seedComments[0].post = postIds[0]._id.toString();
        seedComments[1].post = postIds[1]._id.toString();
        seedComments[2].post = postIds[1]._id.toString();
        seedComments[3].post = postIds[1]._id.toString();
        seedComments[4].post = postIds[2]._id.toString();
        seedComments[5].post = postIds[2]._id.toString();
        seedComments[6].post = postIds[2]._id.toString();
        seedComments[7].post = postIds[2]._id.toString();
        seedComments[8].post = postIds[2]._id.toString();
        seedComments[9].post = postIds[2]._id.toString();
    } catch(err) {
        console.log(err);
    }
}

async function reloadComments() {
    try {
        const deletedComments = await db.Comment.deleteMany({});

        await getUserIds();
        await getPostIds();
        const reloadedComments = await db.Comment.insertMany(seedComments);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    reloadComments: reloadComments
}