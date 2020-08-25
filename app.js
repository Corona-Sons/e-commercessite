// npm module imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bcrypt = require('bcrypt');
var session = require("express-session");
//var passport = require("passport");
var User = require('./models/Users.js');
//var bodyParser= require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const InitiateMongoServer = require('./config/db');
const setupDefaultData = require('./config/defaultData');
const create_dumb_product = require('./middleware/create');

// application module imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const delete_extra_data = require('./middleware/delete');
const update_user_info = require('./middleware/update');

// database setup
InitiateMongoServer().then(setupDefaultData);

// Testing CRUD Operations
// InitiateMongoServer().then(create_dumb_product);
// InitiateMongoServer().then(delete_extra_data);
// InitiateMongoServer().then(update_user_info);


// setting up express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make user ID available in templates
//app.use(function (req, res, next) {
//  res.locals.currentUser = req.session.userID;
 // next();
//});



// Router Middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

///signup///
app.get('/signup', (req, res) => {
  res.render('signup.pug')
})

app.post('/signup', async(req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    User.create({
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      last_name: req.body.last_name,
      email: req.body.email,
      user_name: req.body.user_name,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect.signup

  }
});
  //confirm passwords match
  //if (req.body.password !== req.body.confirmPassword) {
    //var err = new Error("Passwords do not match.");
      //err.status = 400;
      //return next(err);
  // }
  //});

   
   //use create to insert doc into mongo
   //User.create(function(error, user) {
     // if (error) {
     //return next(error);
     // } else {
       // req.session.User_id = User_id;
       // return res.redirect("/profile");
     // }
   //});
  
//})

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
