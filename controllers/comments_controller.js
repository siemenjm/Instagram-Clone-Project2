const express = require("express");
const router = express.Router();

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// new comment page
router.get("/new", (req, res) => {
  res.send('NEW COMMENT PAGE');
});

// edit comment page
router.get("/:commentId/edit", (req, res) => {
    res.send('EDIT COMMENT PAGE');
});

// comment show page
router.get("/:commentId", (req, res) => {
    res.send('COMMENT SHOW PAGE');
});

// comment index page
router.get("/", (req, res) => {
    res.send('COMMENT INDEX PAGE');
});

// POST ROUTE
// submitting new comment
router.post("/", (req, res) => {
    res.send('NEW COMMENT SUBMITTED');
});

// PUT ROUTE
// update comment
router.put("/:commentId", (req, res) => {
    res.send('COMMENT UPDATED');
});

// DELETE ROUTE
// destroy comment
router.delete("/:commentId", async (req, res) => {
    res.send('COMMENT DELETED');
});

// EXPORT ROUTER
module.exports = router;