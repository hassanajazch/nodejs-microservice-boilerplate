const app = require('./expressApp');
require('./routes');
const server = require('http').Server(app);

module.exports = server;
