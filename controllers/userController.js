const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.loginForm = (req, res) => {
   res.render('login', {title: 'Login'});
}

exports.registerForm = (req, res) => {
   res.render('register', {title: 'Register'});
}

exports.validateRegister = (req, res, next) => {

}

exports.register = (req, res) => {

}

exports.account = (req, res) => {
   res.render('account', {title: 'Account'});
}

exports.updateAccount = (req, res) => {

}
