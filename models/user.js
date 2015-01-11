var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	fbId: String,
	soundcloudId: String,
	name: String,
	email: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;