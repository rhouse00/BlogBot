const passport = require('passport');
// const crypto = require('crypto');
const mongoose = require('mongoose');
const User = mongoose.model ('User');
const promisify = require('es6-promisify');
// const mail = require('../handlers/mail'); 

exports.login = passport.authenticate('local', {
   failureRedirect: '/login',
   failureFlash: 'Login Failed',
   successRedirect: '/',
   successFlash: 'Login Successful'
});
