var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var SoundCloudStrategy = require('passport-soundcloud').Strategy;
var User = require('../models/user');

// Session serialization
passport.serializeUser(function(user, next){
	next(null, user._id);
});
passport.deserializeUser(function(userId, next){
	User.findById(userId, function(err, user){
		next(err, user);
	});
});


// Strategies
var fbStrategy = new FacebookStrategy({
	clientID: '864202350304702',
	clientSecret: 'a1a519ae0ed5c1ac0470236480075c64',
	callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(accessToken, refreshToken, profile, next) {
	User.findOne({fbId: profile.id}, function(err, user) {
		if(user){
			next(null, user);
		} else {
			// User was not found
			var newUser = new User({
				fbId: profile.id,
				name: profile.displayName,
				email: profile.emails[0].value
			});
			newUser.save(function(err, newUser) {
				if(err){
					throw err;
				}
				next(null, user);
			});
		}
	});
});

passport.use(fbStrategy);

var scStrategy = new SoundCloudStrategy({
	clientID: 'c0118464034c2e20de2a2e7875718321',
	clientSecret: '1610975f049e07e4dde89a6ef05d0773',
	callbackURL: 'http://localhost:3000/auth/soundcloud/callback'
}, function(accessToken, refreshToken, profile, next) {
	User.findOne({soundcloudId: profile.id}, function(err, user) {
		if(user){
			next(null, user);
		} else {
			// User was not found
			var newUser = new User({
				soundcloudId: profile.id,
				name: profile.displayName,
				// email: profile.emails[0].value
			});
			newUser.save(function(err, newUser) {
				if(err){
					throw err;
				}
				next(null, user);
			});
		}
	});
});

passport.use(scStrategy);

// passport.use(new SoundCloudStrategy({
//     clientID: 'd64ca3b367b0b75aa9bb5b5167399d23',
// 		clientSecret: 'be036ce5404e43ebe1ae644b7a0e1c7d',
//     callbackURL: "http://127.0.0.1:3000/auth/soundcloud/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ soundcloudId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

module.exports = {
	ensureAuthenticated: function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	}
};