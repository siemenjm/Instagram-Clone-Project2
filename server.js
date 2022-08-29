// IMPORTS
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();

// CONTROLLER IMPORTS
const controllers = require('./controllers')

// APP CONFIGURATION
const app = express();
const PORT = 4000;
app.set('view engine', 'ejs')

// MIDDLEWARE
app.use(
    session({
        store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
        secret: 'super secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2
        }
    })
);
app.use(express.static('public'));
app.use(methodOverride('_method'));

// ROUTERS
app.use('/comments', controllers.comments);
app.use('/posts', controllers.posts);
app.use('/users', controllers.users);
app.use('/', controllers.auth);

// HOME ROUTE
app.get('/', (req, res) => {
    res.render('home.ejs');
})

// 404 WILDCARD ROUTE
app.get('/*', (req, res) => {
    res.send('404 PAGE');
});

// SERVER
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
});