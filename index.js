require('dotenv').config();
const config = require("./config/config");
const server = require("./bootstrap");

server.listen(`${config.port}`, () => {
    console.log(`Server now listening at localhost:${config.port}`);
});
