const bcrypt = require("bcryptjs");
const { Strategy } = require("passport-local");

const User = require("../models/User");

const LocalStrategy = new Strategy((username, password, done) => {
    User.findOne({ login: username }, (error, user) => {
        if (error) return done(error);
        if (!user) return done(null, false);

        const hash = user.password;

        bcrypt.compare(password, hash, (error, isPasswordCorrect) => {
            if (error) return done(error);

            return isPasswordCorrect ? done(null, user) : done(null, false);
        });
    });
});

module.exports = LocalStrategy;
