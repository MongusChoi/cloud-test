const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users')
const mongoose = require('mongoose')
const global = require('./global')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect(global.MONGO_CONNECTION_STRING, { useNewUrlParser: true, autoReconnect: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 1000, dbName: 'cloudTest' })

const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('[system] mongodb connect')
})

module.exports = app;
