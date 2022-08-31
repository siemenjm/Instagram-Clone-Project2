// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// new user page
router.get("/new", (req, res) => {
  res.send('NEW USER PAGE');
});

// edit user page
router.get("/:userId/edit", (req, res) => {
    res.send('EDIT USER PAGE');
});

// user show page
router.get("/:userId", async (req, res) => {
    try {
        const user = await db.User.findById(req.params.userId);
        const allPost = await db.Post.find({user: req.params.userId}).sort({ createdAt: -1});
        const context = {
            user: user,
            posts: allPost,
        };

        res.render('users/show', context);
    } catch(err) {
        console.log(err);
    }
});

// user index page
router.get("/", async (req, res) => {
    try {
        const allUsers = await db.User.find();
        const context = {
            users: allUsers
        };

        res.send(allUsers);
    } catch(err) {
        console.log(err);
    }
});

// POST ROUTE
// creating new user
router.post("/", (req, res) => {
    res.send('NEW USER CREATED');
});

// PUT ROUTE
// update user
router.put("/:userId", (req, res) => {
    res.send('USER UPDATED');
});

// DELETE ROUTE
// destroy user
router.delete("/:userId", async (req, res) => {
    res.send('USER DELETED');
});

// EXPORT ROUTER
module.exports = router;