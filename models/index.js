require('../config/db.connection');

module.exports = {
    Comment: require('./Comment'),
    Post: require('./Post'),
    User: require('./User')
};