var express = require('express');
var router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const passport = require('passport');

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Member Login' });
});

/* GET Sign Up page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'New Member Sign Up' });
});

// Sign Up Handle
router.post('/signup', (req, res) => {
  const { firstName, lastName, email, password, password2, admin } = req.body;
  let errors = [];

  // Check required fields
  if(!firstName || !lastName || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields'});
  }

  // Check Passwords match
  if(password != password2) {
    errors.push({ msg: 'Passwords do not match'});
  }

  // Check Pass Length
  if(password.length < 6 ) {
    errors.push({ msg: 'Password must be at least 6 characters'});
  }


  if(errors.length > 0) {
  //  window.alert(errors);
    console.log(errors);
  } else {
    // Validation passed
    User.findOne({ email: email})
      .then(user => {
        if(user) {
          errors.push({msg: 'There is an account with this Email already'})
          // window.alert(errors);
          console.log(errors);
        } else {
            // Check Admin Status
            let adminCheck;
            if(admin === 'Admin123') {
              adminCheck = true;
            } else {
              adminCheck = false;
            }

          const newUser = new User({
            first_name: firstName,
            last_name: lastName,
            email: email,
            admin: adminCheck,
            member: true,
            password: password
          });

          // Hash Password
          bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              // Set password to hashed
              newUser.password = hash;
              // Save User
              newUser.save()
                .then(user => {
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
          }))
        
        }
      })
  }
});

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
})

// Logout Handle
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
})




module.exports = router;
