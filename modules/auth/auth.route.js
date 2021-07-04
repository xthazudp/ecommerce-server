const express = require('express');
const router = express.Router();

// controller
const { createOrUpdateUser } = require('./auth.controller');

// middleware
const { authCheck } = require('../../middleware/auth.middleware');

router.post('/create-or-update-user', authCheck, createOrUpdateUser);

module.exports = router;
