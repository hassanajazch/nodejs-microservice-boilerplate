// import db from '../../database/models';
import UserFactory from '../factories/User';

export default class User {
    /**
     * get user with details
     * @param {Number} userId
     * @return {Object} user
     */
    static async userId(userId) {
        try {
            // const user = await db.User.findOne({ where: { id: userId }});

           // sample object returned from db query
            const user =
                {
                    id: 2,
                    name: 'hassan',
                    email: 'hassanajaz11@gmail.com',
                };

            return UserFactory.createUserFromDb(user);
        } catch (error) {
            throw error;
        }
    }
}
