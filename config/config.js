require('dotenv').config();

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
};
