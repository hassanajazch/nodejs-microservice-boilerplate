import users from './user';

module.exports = (router) => {
    users(router);
    return router;
};
