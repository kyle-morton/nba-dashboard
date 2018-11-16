let jwt = require('jwt-simple'),
    config = require('../../../config');

module.exports = class TokenHander {
    /**
     * Encodes a JWT token
     * @param {*} object 
     */
    EncodeToken (object) {
        return jwt.encode(object, config.token_secret);
    };
    /**
     * Decodes a JWT token
     * @param {*} token 
     */
    DecodeToken(token) {
        return jwt.decode(token, config.token_secret);
    };
};