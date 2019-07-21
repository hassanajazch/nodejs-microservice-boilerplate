const expect = require('chai').expect;
const UserStore = require('../models/UserStore');
const User = require('../models/User');
const mongoose = require('../mongoose');


describe('User Store', () => {

    after(function () {

       mongoose.disconnect();
    });

    const email = 'test@text.com';

    it('should get user by email', async function () {

        const result = await UserStore.findByEmail(email);
        expect(result).to.be.an.instanceOf(User);

    });

    it('should add user in repositories', async function () {
        const user = User.generateUser(email);
        const result = await UserStore.add(user);
        expect(result).to.equal(true);

    });

    it('should remove user from repositories', async function () {
        const user = UserStore.findByEmail(email);
        const result = await UserStore.remove(user);
        expect(result).to.equal(true);

    });


});