const db = require('./index');

const seedPosts = [
    {
        title: 'test title 1',
        image: 'https://picsum.photos/500',
    },
    {
        title: 'test title 2',
        image: 'https://picsum.photos/501',
    },
    {
        title: 'test title 3',
        image: 'https://picsum.photos/502',
    },
    {
        title: 'test title 4',
        image: 'https://picsum.photos/503',
    },
    {
        title: 'test title 5',
        image: 'https://picsum.photos/504',
    },
    {
        title: 'test title 6',
        image: 'https://picsum.photos/505',
    },
    {
        title: 'test title 7',
        image: 'https://picsum.photos/506',
    },
    {
        title: 'test title 8',
        image: 'https://picsum.photos/507',
    },
    {
        title: 'test title 9',
        image: 'https://picsum.photos/508',
    },
    {
        title: 'test title 10',
        image: 'https://picsum.photos/509',
    },
];
                
async function getUserIds() {
    try {
        const userIds = await db.User.find({}).select('_id');
        
        seedPosts[0].user = userIds[0]._id.toString();
        seedPosts[1].user = userIds[1]._id.toString();
        seedPosts[2].user = userIds[1]._id.toString();
        seedPosts[3].user = userIds[1]._id.toString();
        seedPosts[4].user = userIds[2]._id.toString();
        seedPosts[5].user = userIds[2]._id.toString();
        seedPosts[6].user = userIds[2]._id.toString();
        seedPosts[7].user = userIds[2]._id.toString();
        seedPosts[8].user = userIds[2]._id.toString();
        seedPosts[9].user = userIds[2]._id.toString();
    } catch(err) {
        console.log(err);
    }
}

async function reloadPosts() {
    try {
        const deletedPosts = await db.Post.deleteMany({});

        await getUserIds();
        const reloadedPosts = await db.Post.insertMany(seedPosts);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    reloadPosts: reloadPosts
}