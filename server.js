// IMPORTS
const express = require('express');
const methodOverride = require('method-override');
require('dotenv').config();

// CONTROLLER IMPORTS
const controllers = require('./controllers')

// APP CONFIGURATION
const app = express();
const PORT = 4000;
app.set('view engine', 'ejs')

// MIDDLEWARE
app.use(express.static('public'));
app.use(methodOverride('_method'));

// ROUTERS
// app.use('/posts', controllers.posts)

// HOME ROUTE
app.get('/', (req, res) => {
    res.send('HOME PAGE');
})

// 404 WILDCARD ROUTE
app.get('/*', (req, res) => {
    res.send('404 PAGE');
});

// SERVER
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
});