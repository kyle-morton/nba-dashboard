let  TokenHandler = require('../handlers/token'),
     tokenHandler = new TokenHandler();

/**
 * middleware to verify token is valid
 */
module.exports = (req, res, next) => {
    
    try {
        
        let token = req.header('X-Auth-Token');
        
        if (token) {
    
            //if token found, verify it has basic permissions to enter app
            let tokenObject = tokenHandler.DecodeToken(token);
            if (!tokenObject.user_id || tokenObject.user_id <= 0) {
                res.json({
                    success: false,
                    message: 'User token is invalid'
                });
            } else
                next();
    
        } else {
    
            //handle no token
            return res.status(403).send({
                success: false,
                message: 'No token provided in request'
            });
        }
    }catch(exception) {
        //handle no token
        return res.status(403).send({
            success: false,
            message: 'Unable to decode token provided in request'
        });
    }
    

};