// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// edit comment page
router.get("/:commentId/edit", async (req, res) => {
    try {
        
        const foundComment = await db.Comment.findById(req.params.commentId).populate('user').populate('post').exec();

        if (req.session.currentUser.id != foundComment.user._id) {
            return res.redirect(`/posts/${foundComment.post._id}`);
        }

        context = {
            comment: foundComment
        }
        
        res.render('comments/edit.ejs', context);
    } catch(err) {
        console.log(err);
    }
});

// comment show page
router.get("/:commentId", async (req, res) => {
    try {
        const comment = await db.Comment.findById(req.params.commentId);
        const context = {
            comment: comment
        };

        res.send(comment);
    } catch(err) {
        console.log(err);
    }
});

// PUT ROUTE
// update comment
router.put("/:commentId", async (req, res) => {
    try {
        req.body.content = `${req.body.content} (comment edited)`;
        const updatedComment = await db.Comment.findByIdAndUpdate(req.params.commentId, req.body).populate('post').exec();
        const commentPost = updatedComment.post._id

        res.redirect(`/posts/${commentPost}`);
    } catch(err) {
        console.log(err);
    }
});

// DELETE ROUTE
// destroy comment
router.delete("/:commentId", async (req, res) => {
    try {
        const deletedComment = await db.Comment.findByIdAndDelete(req.params.commentId).populate('post').exec();
        console.log(deletedComment);

        return res.redirect(`/posts/${deletedComment.post._id}`);
    } catch(err) {
        console.log(err);
    }
});

// EXPORT ROUTER
module.exports = router;