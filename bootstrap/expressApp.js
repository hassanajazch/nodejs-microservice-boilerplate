const passport = require('passport');
const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const shortId = require('shortid');

const config = require('../config/config');
const app = express();
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// multipart data handling
const storage = multer.diskStorage({
    destination: config.filePath,
    filename: (req, file, cb) => {
        cb(null, shortId.generate());
    }
});

app.use(multer({storage: storage}).any());
app.use(logger('dev'));

module.exports = app;
