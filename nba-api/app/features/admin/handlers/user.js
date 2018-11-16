let User = require("../../../shared/models/user");


module.exports = class UserHandler {

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
