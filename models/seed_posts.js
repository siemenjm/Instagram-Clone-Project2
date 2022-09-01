const db = require('./index');

const seedPosts = [
    {
        title: 'test title 1',
        image: 'https://picsum.photos/200',
        user: "630f65b9d0cc20f68e9376cc" // need to update if users have been reloaded
    },
    {
        title: 'test title 2',
        image: 'https://picsum.photos/200',
        user: "630f65b9d0cc20f68e9376cd" // need to update if users have been reloaded
    },
    {
        title: 'test title 3',
        image: 'https://picsum.photos/200',
        user: "630f65b9d0cc20f68e9376ce" // need to update if users have been reloaded
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