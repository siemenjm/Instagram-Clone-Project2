// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// new comment page
router.get("/new", (req, res) => {
  res.send('NEW COMMENT PAGE');
});

// edit comment page
router.get("/:commentId/edit", async (req, res) => {
    try {
        const foundComment = await db.Comment.findById(req.params.commentId).populate('user').populate('post').exec();
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

// comment index page
router.get("/", async (req, res) => {
    try {
        const allComments = await db.Comment.find();
        const context = {
            comments: allComments
        };

        res.send(allComments);
    } catch(err) {
        console.log(err);
    }
});

// POST ROUTE
// submitting new comment
router.post("/", (req, res) => {
    res.send('NEW COMMENT SUBMITTED');
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
    res.send('COMMENT DELETED');
});

// EXPORT ROUTER
module.exports = router;