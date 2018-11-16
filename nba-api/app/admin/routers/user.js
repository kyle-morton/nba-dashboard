let express = require('express'),
    router = express.Router(),
    UserHandler = require('../handlers/userHandler'),
    userHandler = new UserHandler();

router.get('/', 
    async (req, res)  => {
        res.json(await userHandler.getUsers());
    });

/**
 * Register new user
 */
router.post('/', 
    (req, res) => {
        userHandler.register(req, res);
    });

module.exports = router;