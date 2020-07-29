const passport = require("passport");
//
// npm install passport-github
//
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
    new GitHubStrategy(
        {
            clientID: "Iv1.eb54e1f5565b8535",
            clientSecret: "71c0f02f1c3220b60a6a145a545370af608c1eba",
            callbackURL: "/auth/github/callback"
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
