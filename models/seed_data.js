const seedUsers = require('./seed_users');
const seedPosts = require('./seed_posts');
const seedComments = require('./seed_comments');

async function reloadData() {
    try {
        await seedUsers.reloadUsers();
        await seedPosts.reloadPosts();
        await seedComments.reloadComments();
    } catch(err) {
        console.log(err);
    }
}

reloadData();