const express = require('express');
const UserModel = require('../models/userModel');
const UserController = require('../controllers/userController');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

const userModel = new UserModel(pool);
const userController = new UserController(userModel);
const router = express.Router();

router.post('/update-balance', (req, res) =>
    userController.updateBalance(req, res)
);

module.exports = router;
