const db = require('./index');

const seedPosts = [
    {
        title: 'test title 1',
        image: 'https://picsum.photos/200',
    },
    {
        title: 'test title 2',
        image: 'https://picsum.photos/200',
    },
    {
        title: 'test title 3',
        image: 'https://picsum.photos/200',
    }
];
                
async function getUserIds() {
    try {
        const userIds = await db.User.find({}).select('_id');
        
        seedPosts[0].user = userIds[0]._id.toString();
        seedPosts[1].user = userIds[1]._id.toString();
        seedPosts[2].user = userIds[2]._id.toString();
    } catch(err) {
        console.log(err);
    }
}

async function reloadPosts() {
    try {
        const deletedPosts = await db.Post.deleteMany({});
        console.log('Deleted Posts: ', deletedPosts);

        await getUserIds();
        const reloadedPosts = await db.Post.insertMany(seedPosts);
        console.log('Reloaded Posts: ', reloadedPosts);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    reloadPosts: reloadPosts
}