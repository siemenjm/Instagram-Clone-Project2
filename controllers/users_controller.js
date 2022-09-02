// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// user show page
router.get("/:userId", async (req, res) => {
    try {
        const user = await db.User.findById(req.params.userId);
        const allPost = await db.Post.find({user: req.params.userId}).sort({ createdAt: -1});
        const allComments = await db.Comment.find().populate('post').exec();
        const context = {
            user: user,
            posts: allPost,
            comments: allComments
        };

        res.render('users/show', context);
    } catch(err) {
        console.log(err);
    }
});

// EXPORT ROUTER
module.exports = router;