const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.json({
    data: 'At user route.',
  });
});

module.exports = router;
