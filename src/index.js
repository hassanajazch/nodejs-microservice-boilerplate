require('dotenv').config();
import config from './config/config';
import server from './server';

server.listen(`${config.port}`, () => {
    console.log(`Server now listening at localhost:${config.port}`);
});
