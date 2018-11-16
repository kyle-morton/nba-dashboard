let express = require('express'),
    router = express.Router(),
    RegistrationHandler = require('../../../auth/handlers/registration'),
    regHandler = new RegistrationHandler(),
    UserHandler = require('../../admin/handlers/user'),
    userHandler = new UserHandler(),
    roleConstants = require('../../../shared/constants/role'),
    isRole = require('../../../auth/middleware/hasRole');

router.get('/', 
    isRole(roleConstants.ADMIN),
    async (req, res)  => {
        res.json(await userHandler.getUsers());
    });

/**
 * Register new user
 */
router.post('/', 
    isRole(roleConstants.ADMIN),
    (req, res) => {
        regHandler.register(req, res);
    });

module.exports = router;