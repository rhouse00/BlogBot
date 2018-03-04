const mongoose = require('mongoose');
const User = mongoose.model('User');
const { promisify } = require('es6-promisify');

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
   req.sanitizeBody('email').normalizeEmail({
      remove_dots: false,
      remove_extension: false,
      gmail_remove_subaddress: false
   });
   req.checkBody('password', 'Please provide a password').notEmpty();
   req.checkBody('password-confirm', 'Please input your password again').notEmpty();
   req.checkBody('password-confirm', 'Passwords do not match').equals(req.body.password);

   const errors = req.validationErrors();
   if(errors) {
      req.flash('error', errors.map(err => err.msg));
      res.render('register', {title: 'Register', body: req.body });
      return;
   }
   next();

}

exports.register = async (req, res, next) => {
   const user = new User({email: req.body.email, name: req.body.name });
   const registerWithPromise = promisify(User.register.bind(User));
   await registerWithPromise(user, req.body.password);
   next();
}

exports.updateAccount = (req, res) => {

}
