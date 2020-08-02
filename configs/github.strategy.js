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
			// clientSecret: '0179e821aad5c2d51926d83e28bc69ab02a22090',
			// callbackURL: 'http://localhost:3000/auth/github/callback',

			//** Online version - Change before final deploy */
			clientID: 'Iv1.eb54e1f5565b8535',
			clientSecret: '71c0f02f1c3220b60a6a145a545370af608c1eba',
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
