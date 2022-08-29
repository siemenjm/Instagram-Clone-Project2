// IMPORTS
const express = require("express");
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');

// MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// GET ROUTES
// register page
router.get("/register", (req, res) => {
  res.render('auth/register');
});

// login page
router.get("/login", (req, res) => {
    res.render('auth/login');
  });

// EXPORT ROUTER
module.exports = router;