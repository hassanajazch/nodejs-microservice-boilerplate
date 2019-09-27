import app from './expressApp';
import './routes';
const server = require('http').Server(app);

export default server;
