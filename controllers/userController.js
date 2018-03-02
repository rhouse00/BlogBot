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

exports.validateRegister = (req, res, next) => {
   req.sanitizeBody('name');
   req.checkBody('name', 'Please provide a name').notEmpty();
   req.checkBody('email', 'Please provide an email').isEmail();
   req.sanitizeBody('email').normalizeEmail();

   req.checkBody('password', 'Please provide a password').notEmpty();
   req.checkBody('password_confirm', 'Please input your password again').notEmpty();
   req.checkBody('password_confirm', 'Passwords do not match').equals(req.body.password);

   const errors = req.validationErrors();
   if(errors) {
      res.render('register', {title: 'Register', body: req.body });
      console.log(errors);
      return;
   }
   next();

}

exports.register = async (req, res, next) => {
   const user = new User({email: req.body.email, name: req.body.name });
   const register = promisify(User.register, User);
   await register(user, req.body.password);
   next();
}

exports.updateAccount = (req, res) => {

}
