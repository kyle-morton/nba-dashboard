let Player = require('./models/player');

module.exports = class PlayerHandler {

    async create(playerData) {
        let player = new Player(playerData);
        return await player.save();
    }

    async getByID(id) {
        return await this.getSingle({_id: id});
    }

    async get(filter) {
        return await Player.find(filter);
    }

    async getSingle(filter) {
        return await Player.findOne(filter);
    }

};