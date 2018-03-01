const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.loginForm = (req, res) => {
   res.render('login', {title: 'Login'});
}
exports.registerForm = (req, res) => {
   res.render('registerForm', {title: 'Register'});
}
exports.account = (req, res) => {
   res.render('account', {title: 'Account'});
}

exports.validateRegister = (req, res) => {
   req.sanitizeBody('name');
   req.checkBody('name', 'Please provide a name').notEmpty();
   req.checkBody('email', 'Please provide an email').isEmail();
   req.sanitizeBody('email').trim().normalizeEmail();

   req.checkBody('password', 'Please provide a password').notEmpty();
   req.checkBody('password_confirm', 'Please input your password again').notEmpty();
   req.checkBody('password_confirm', 'Passwords do not match').equals(req.body.password);

   const errors = req.validationErrors();
   if(errors) {
      console.log('errors:\n', errors);
   }
   console.log('all good!')

}

exports.register = (req, res) => {

}

exports.updateAccount = (req, res) => {

}
