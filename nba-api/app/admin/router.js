let router = require('express').Router(),
    userRouter = require('./routers/user');

router.use('/users', userRouter);

module.exports = router;