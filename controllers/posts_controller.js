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
    const context = {
        currentUser: req.session.currentUser
    };
    res.render('new.ejs', context);
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
        const allPosts = await db.Post.find().populate('user').exec();
        const context = {
            posts: allPosts,
        };

        res.render('index.ejs', context);
    } catch(err) {
        console.log(err);
        res.redirect('404');
    }
});

// POST ROUTE
// submitting new post
router.post("/", async (req, res) => {
    const createdPost = req.body;
    try{
        const newPost = await db.Post.create(createdPost);
        console.log(newPost);
        res.redirect('/posts');
    }
    catch (err) {
        console.log(err)
        res.redirect('/404')
    }
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