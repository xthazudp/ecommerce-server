const admin = require('./../firebase');

function authCheck(req, res, next) {
  console.log(req.headers);
  next();
}

module.exports = { authCheck };
