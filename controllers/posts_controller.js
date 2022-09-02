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
    res.render('posts/new.ejs', context);
});

// post show page
router.get("/:postId", async (req, res) => {
    try {
        const post = await db.Post.findById(req.params.postId).populate('user').exec();
        const allComments = await db.Comment.find({post: post._id}).sort({createdAt: -1}).populate('user').exec();
        const context = {
            post: post,
            comments: allComments,
            currentUser: req.session.currentUser
        };

        res.render('posts/show.ejs', context);
    } catch(err) {
        console.log(err);
    }
});

// post index page
router.get("/", async (req, res) => {
    try {
        const allPosts = await db.Post.find().sort({createdAt: -1}).populate('user').exec();
        const allComments = await db.Comment.find().sort({createdAt: -1}).populate('post').populate('user').exec();
        const context = {
            posts: allPosts,
            comments: allComments,
            currentUser: req.session.currentUser
        };

        res.render('posts/index.ejs', context);
    } catch(err) {
        console.log(err);
        res.redirect('/404');
    }
});

// POST ROUTE
// submitting new post
router.post("/", async (req, res) => {
    const createdPost = req.body;
    try{
        const newPost = await db.Post.create(createdPost);

        res.redirect('/posts');
    }
    catch (err) {
        console.log(err)
        res.redirect('/404')
    }
});

// POST ROUTE
// submitting new comment
router.post('/:postId', async (req, res) => {
    const createdComment = req.body;
    try{
        const newComment = await db.Comment.create(createdComment);

        res.redirect(`/posts/${req.params.postId}`);
    }
    catch (err){
        console.log(err)
    }
})


// PUT ROUTE
// update post
router.put("/:postId", async (req, res) => { 
    try {
        const post = await db.Post.findById(req.params.postId);
        
        if (post.likedBy.includes(req.body.currentUserId)) {
            return res.redirect(`/posts/${req.params.postId}`);
        } else {
            const updatedPost = await db.Post.findByIdAndUpdate(req.params.postId, {
                likes: req.body.likes,
                $push: {
                    likedBy: req.body.currentUserId
                }
            });

            res.redirect(`/posts/${req.params.postId}`);
        }
    }
    catch (err) {
        console.log(err);
    }
});

// DELETE ROUTE
// destroy post
router.delete("/:postId", async (req, res) => {
    try {
        const deletedPost = await db.Post.findByIdAndDelete(req.params.postId);
        const deletedComments = await db.Comment.deleteMany({ post: req.params.postId });

        return res.redirect('/posts');
    } catch(err) {
        console.log(err);
    }
});

// EXPORT ROUTER
module.exports = router;