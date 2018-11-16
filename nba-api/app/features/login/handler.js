let User = require('../../shared/models/user'),
    bcrypt = require('bcrypt'),
    TokenHandler = require('../../auth/handlers/token'),
    tokenHandler = new TokenHandler();

module.exports = class LoginHandler {
    /**
     * Authenticate an existing account, return token if valid
     * @param {*} request 
     * @param {*} response 
     */
    async login(request, response) {

        let loginData = request.body;

        //get user logging in via email
        let user = await User.findOne({
          email: loginData.email
        });
    
        //return error if user not found
        if (!user) {
          return response
            .status(401)
            .send({
              message: "Email or Password Invalid"
            });
        }
    
        //encrypt password and compare to existing password in DB
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
          if (!isMatch) {
            console.error("Invalid Login Attempt: " + loginData.email);
            return response
              .status(401)
              .send({
                message: "Email or Password Invalid"
              });
          }
          
          //if passed validation, return a JWT
          let userToken = tokenHandler.EncodeToken({
            user_id: user._id, //id of user in db
            role: user.role
          });

          response.status(200).send({
            userInfo: {
                email: user.email,
                role: user.role
            },
            userToken: userToken
          });
        });
    };
};