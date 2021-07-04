const express = require('express');

const router = express.Router();

router.get('/create-or-update-user', function (req, res) {
  res.json({
    data: 'You can create or update user.',
  });
});

module.exports = router;
