import UserRepo from '../repositories/User';

export default class User {
    /**
     * Get User with all details
     * @param {Number} userId
     * @returns {Object} user
     */
    static async findUser(userId) {
        try {
            return await UserRepo.findUser(userId);
        } catch (error) {
            throw error;
        }
    }
}
