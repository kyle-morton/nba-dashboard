let router = require('express').Router(),
    LoginHandler = require('./handler'),
    loginHandler = new LoginHandler();

router.post('/', (req, res) => {
    loginHandler.login(req, res);
});

module.exports = router;