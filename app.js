var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();//追加20250805

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//  helloRouter 追加 【5-2】
var helloRouter = require('./routes/hello');
//  notesRouter 追加 【6-3】
var notesRouter = require('./routes/notes');
//  catRouter 追加 【8-4】
var catRouter = require('./routes/cat');
//   第8回レポート 追加 【8-4】
var yesnoRouter = require('./routes/yesno');
//   notes_from_b 追加 【14-4】
var notes_from_bRouter = require('./routes/notes_from_b');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//  helloRouter 追加 【5-2】
app.use('/hello', helloRouter);
//  notesRouter 追加 【6-3】
app.use('/notes', notesRouter);
//  catRouter 追加 【8-4】
app.use('/cat', catRouter);
//  第8回レポート 追加 【8-4】
app.use('/yesno', yesnoRouter);
//  notes_from_b 追加 【14-4】
app.use('/notes_from_b', notes_from_bRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
