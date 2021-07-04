const router = require('express').Router();
const AuthRouter = require('./modules/auth/auth.route');
const UserRouter = require('./modules/user/user.route');

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);

module.exports = router;
