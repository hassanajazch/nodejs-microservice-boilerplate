const UserService = require('../app/services/User');
const config = require('../config/config');

const UsersRest = {};

UsersRest.signup = async (req, res) => {
    try {
        const result = await UserService.createNewUser(req.body);
        res.json(result);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'Unable to add new user'});
    }
};


module.exports = UsersRest;
