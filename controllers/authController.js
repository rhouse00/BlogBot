const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');


exports.login = passport.authenticate('local', {
   failureRedirect: '/login',
   failureFlash: 'Login Failed',
   successRedirect: '/',
   successFlash: 'Login Successful'
});

exports.isLoggedIn = (req, res, next) => {
   if(req.isAuthenticated()) {
      next();
      return;
   }
   req.flash('error','Please login to access that page');
   res.redirect('/login');
}

exports.logout = (req, res) => {
   req.logout();
   req.flash('success', 'Successfully logged out');
   res.redirect('/')
}