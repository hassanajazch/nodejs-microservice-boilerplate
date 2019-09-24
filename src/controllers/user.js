import UserService from '../app/services/User';
import config from '../config/config';

const UsersRest = {};

UsersRest.test = async (req, res) => {
    try {
        console.log('**Hi I am test User**');
        res.json(result);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'Unable to test user'});
    }
};


export default UsersRest;
