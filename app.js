const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const logger = require('morgan');
const { promisify } = require('es6-promisify');
const path = require('path');
const passport = require('passport');
const expressValidator = require('express-validator');

require('./handlers/passport');

const app = express();

const routes = require('./routes/routes');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');

require('dotenv').config({ path: 'variables.env'});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use( (req, res, next) => {
    res.locals.h = helpers;
    res.locals.user = req.user || null;
    res.locals.flashes = req.flash();
    next();
});

app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

app.use(errorHandlers.flashValidationErrors);

if(app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors);
}

app.use('/', routes);
module.exports = app;