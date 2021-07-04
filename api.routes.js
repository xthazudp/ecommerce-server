const router = require('express').Router();
const AuthRouter = require('./modules/auth/auth.route');

router.use('/auth', AuthRouter);

module.exports = router;
