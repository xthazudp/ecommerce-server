const express = require('express');
const router = express.Router();
const { createOrUpdateUser } = require('./auth.controller');

router.get('/create-or-update-user', createOrUpdateUser);

module.exports = router;
