import express from 'express';
import session from 'express-session';
import logger from 'morgan';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import shortId from 'shortid';
import config from '../config/config';

const app = express();
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {},
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// multipart data handling
const storage = multer.diskStorage({
    destination: config.filePath,
    filename: (req, file, cb) => {
        cb(null, shortId.generate());
    },
});

app.use(multer({ storage }).any());
app.use(logger('dev'));

export default app;
