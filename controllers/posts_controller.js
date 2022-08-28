const express = require("express");
const router = express.Router();

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
router.get("/:postId", (req, res) => {
    res.send('POST SHOW PAGE');
});

// post index page
router.get("/", (req, res) => {
    res.send('POST INDEX PAGE');
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