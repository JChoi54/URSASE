const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api')
const {isDevelopment, requireHTTPS} = require("./helper");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

if (isDevelopment()) {
    const cors = require('cors');
    app.use(cors());
}

app.use(requireHTTPS);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

module.exports = app;