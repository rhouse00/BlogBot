const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');

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
   }
});

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);