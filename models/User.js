const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = mongoose.Schema({
   name: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: 'Please supply a name'
   },
   email: {
      type: String,
      trim: true,
      unique: true,
      required: 'Please supply an email'
   },
   password: {
      type: String,
      trim: true,
      required: 'Please supply a password'
   }
});

module.exports = mongoose.model('User', userSchema);