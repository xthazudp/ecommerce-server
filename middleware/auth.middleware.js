const admin = require('./../firebase');

async function authCheck(req, res, next) {
  let token;
  if (req.headers['authorization']) token = req.headers['authorization'];
  if (req.headers['x-access-token']) token = req.headers['x-access-token'];
  if (req.query['token']) token = req.query['token'];
  if (!token) {
    return next({
      msg: 'Authentication Failed,Token not provided',
      status: 401,
    });
  }
  console.log('token=>', token);
  const firebaseUser = await admin.auth().verifyIdToken(token);
  console.log('User is=>', firebaseUser);
  req.user = firebaseUser;
  next();
}

module.exports = { authCheck };
