// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// new post page
router.get("/new", (req, res) => {
  res.send('NEW POST PAGE');
});

// edit post page
router.get("/:postId/edit", (req, res) => {
    res.send('EDIT POST PAGE');
});

// post show page
router.get("/:postId", async (req, res) => {
    try {
        const post = await db.Post.findById(req.params.postId);
        const postComments = await db.Comment.find({post: post._id});
        
        let commentUsers = [];
        for (let i = 0; i < postComments.length; i++) {
            let commentUser = await db.User.findById(postComments[i].user);
            commentUsers.push(commentUser);
        }

        const postUser = await db.User.findById(post.user._id);
        
        const context = {
            post: post,
            comments: postComments,
            commentUsers: commentUsers,
            user: postUser
        };

        res.render('show.ejs', context);
    } catch(err) {
        console.log(err);
    }
});

// post index page
router.get("/", async (req, res) => {
    try {
        const allPosts = await db.Post.find();
        const context = {
            posts: allPosts
        };

        res.send(allPosts);
    } catch(err) {
        console.log(err);
    }
});

// POST ROUTE
// submitting new post
router.post("/", (req, res) => {
    res.send('NEW POST SUBMITTED');
});

// PUT ROUTE
// update post
router.put("/:postId", (req, res) => {
    res.send('POST UPDATED');
});

// DELETE ROUTE
// destroy post
router.delete("/:postId", async (req, res) => {
    res.send('POST DELETED');
});

// EXPORT ROUTER
module.exports = router;