let User = require("../../shared/models/user"),
    TokenHandler = require('../../shared/handlers/token'),
    tokenHandler = new TokenHandler();


module.exports = class UserHandler {

    /**
     * Register a new user account
     * @param {*} request 
     * @param {*} response 
     */
    async register(request, response) {
        let userData = request.body;

        //find user
        let userCheck = await this.findUser({
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
    };
    async getUsers() {
      return await User.find({});
    };
    /**
     * checks database for given user
     * @param {*} filter 
     */
    async findUser(filter) {
      return await User.findOne(filter);
    };
};
