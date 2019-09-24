import app from './expressApp';
require('./routes');
const server = require('http').Server(app);

export default server;
