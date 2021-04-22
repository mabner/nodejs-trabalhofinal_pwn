const passport = require('passport');
//
// npm install passport-github
//
const GitHubStrategy = require('passport-github').Strategy;

passport.use(
	new GitHubStrategy(
		{
			//** Localhost for testing */
			// clientID: 'Iv1.62b6860a6ffe024f',
			// clientSecret: '',
			// callbackURL: 'http://localhost:3000/auth/github/callback',

			//** Online version - Change before final deploy */
			clientID: 'Iv1.eb54e1f5565b8535',
			clientSecret: '',
			callbackURL:
				'https://nodejs-trabalhofinal-pwn.herokuapp.com/auth/github/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			return done(undefined, profile);
		}
	)
);

passport.serializeUser(function (user, done) {
	done(undefined, user);
});

passport.deserializeUser(function (user, done) {
	done(undefined, user);
});
