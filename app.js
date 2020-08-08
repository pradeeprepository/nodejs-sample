var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var booksRouter = require("./routes/books.routes");
var productsRouter = require("./routes/products.routes");
var mongooseCon = require("./database-connection/mongoose-connection");
var app = express();
/* App use for CORS origin for Angular host */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === "OPTIONS") {
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    return res.status(200).json({});
  }
  next();                 
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));
app.use('/uploads',express.static(path.join(__dirname, 'public/images')));
// app.use(express.static(path.join(__dirname, 'views/dist')));
// console.log(__dirname);
app.use('/', indexRouter);
// books routes
app.use('/api', booksRouter);
// products routes
// app.use('/api', productsRouter);
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
