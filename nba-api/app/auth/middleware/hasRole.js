let  UserHandler = require('../../features/admin/handlers/user'),
     userHandler = new UserHandler(),
     TokenHandler = require('../handlers/token'),
     tokenHandler = new TokenHandler();

/**
 * middleware to verify if user has role
 */
module.exports = (role) => {

    return async (req, res, next) => {

        try {
            //if token found, verify it has basic permissions to enter app
            let tokenObject = tokenHandler.DecodeToken(req.header('X-Auth-Token'));

            //get user & permissiosn using token
            let user = await userHandler.findUser({ _id: tokenObject.user_id});
            
            //see if user has role
            let hasPermission = user.role === role;
            
            if (!hasPermission)
                res.json({
                    success: false,
                    message: 'User token is invalid'
                });
            else
                next();
        }catch(ex) {
            res.json({
                success: false,
                message: 'User token is invalid'
            });
        }


    };
};