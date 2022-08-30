const db = require('./index');

const seedPosts = [
    {
        title: 'test title 1',
        image: 'https://picsum.photos/200',
        user: "630e0fc81206dd62cd1e45cd" // need to update if users have been reloaded
    },
    {
        title: 'test title 2',
        image: 'https://picsum.photos/200',
        user: "630e0fc81206dd62cd1e45ce" // need to update if users have been reloaded
    },
    {
        title: 'test title 3',
        image: 'https://picsum.photos/200',
        user: "630e0fc81206dd62cd1e45cf" // need to update if users have been reloaded
    }
];

async function reloadPosts() {
    try {
        const deletedPosts = await db.Post.deleteMany({});
        console.log(deletedPosts);

        const reloadedPosts = await db.Post.insertMany(seedPosts);
        console.log(reloadedPosts);
    } catch(err) {
        console.log(err);
    }
}

reloadPosts();