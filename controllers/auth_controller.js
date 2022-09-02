// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// register page
router.get('/register', (req, res) => {
    context = {
        message: req.query.message
    };

    res.render('auth/register', context);
});

// login page
router.get('/login', (req, res) => {
    context = {
        message: req.query.message
    };

    res.render('auth/login', context);
});

// logout
router.get('/logout', async (req, res) => {
    try {
        await req.session.destroy();
        const message = 'You have been logged out.';
        return res.redirect(`/login?message=${message}`);
    } catch(err) {
        console.log(err);
    }
});

// POST ROUTES
// create new user
router.post('/register', async (req, res) => {
    try {
        const foundEmail = await db.User.exists({ email: req.body.email});
        if (foundEmail) {
            const message = 'An account with the username or email already exists. Log in below.';
            return res.redirect(`/login?message=${message}`);
        }

        const foundUsername = await db.User.exists({ username: req.body.username});
        if (foundUsername) {
            const message = 'An account with the username or email already exists. Log in below.';
            return res.redirect(`/login?message=${message}`);
        }

        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;

        const newUser = await db.User.create(req.body);
        res.redirect('/login');
    } catch(err) {
        console.log(err);
    }
});

// login user
router.post('/login', async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });
        if (!foundUser) {
            const message = 'The account you tried to log in with does not exist. Create a new account below.';
            return res.redirect(`/register?message=${message}`);
        }

        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) {
            const message = 'The email or password you entered is incorrect. Try again.';
            return res.redirect(`/login?message=${message}`);
        }

        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username
        };

        return res.redirect('/posts');
    } catch(err) {
        console.log(err);
    }
});

// EXPORT ROUTER
module.exports = router;