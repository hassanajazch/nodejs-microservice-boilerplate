import UserService from '../app/services/User';
import config from '../config/config';

const UsersRest = {};

UsersRest.findUser = async (req, res) => {
    try {
        if(req.user.id) {
            console.log('**Hi I am test User API**');
            const users = await UserService.findUser(req.user.id);
            res.json(result);
        }
        res.status(500).json({message: 'Must add user if to find user'});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'Unable to test user'});
    }
};


export default UsersRest;
