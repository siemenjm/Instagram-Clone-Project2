const express = require("express");
const router = express.Router();

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// new post page
router.get("/new", (req, res) => {
  res.send('NEW USER PAGE');
});

// edit post page
router.get("/:userId/edit", (req, res) => {
    res.send('EDIT USER PAGE');
});

// post show page
router.get("/:userId", (req, res) => {
    res.send('USER SHOW PAGE');
});

// post index page
router.get("/", (req, res) => {
    res.send('USER INDEX PAGE');
});

// POST ROUTE
// submitting new post
router.post("/", (req, res) => {
    res.send('NEW USER CREATED');
});

// PUT ROUTE
// update post
router.put("/:userId", (req, res) => {
    res.send('USER UPDATED');
});

// DELETE ROUTE
// destroy post
router.delete("/:userId", async (req, res) => {
    res.send('USER DELETED');
});

// EXPORT ROUTER
module.exports = router;