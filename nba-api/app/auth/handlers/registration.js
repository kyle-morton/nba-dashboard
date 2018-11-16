let User = require("../../shared/models/user"),
    UserHandler = require('../../features/admin/handlers/user'),
    userHandler = new UserHandler();


module.exports = class RegistrationHandler {

    /**
     * Register a new user account
     * @param {*} request 
     * @param {*} response 
     */
    async register(request, response) {

      try {
        let userData = request.body;

        //find user
        let userCheck = await userHandler.findUser({
          email: userData.email
        });

        //if email found, return error
        if (userCheck) {
          response.status(200).send({
            message: 'Email is already registered',
            result: '0'
          });
        } else {

          //otherwise, create new user and return result
          var user = new User(userData);

          user.save((error, result) => {
            if (error) {
              console.error(error.message);
            } else {
              response.status(200).send({
                message: "OK",
                result: '1'
              });
            }
          });
        }
      }catch(ex) {
        response.status(200).send({
          message: 'Error occurred: ' + ex,
          result: '0'
        });
      }

    };
};
