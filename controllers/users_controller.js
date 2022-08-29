const express = require("express");
const router = express.Router();

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
router.get("/:userId", (req, res) => {
    res.send('USER SHOW PAGE');
});

// user index page
router.get("/", (req, res) => {
    res.send('USER INDEX PAGE');
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