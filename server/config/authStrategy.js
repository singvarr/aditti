import bcrypt from "bcryptjs";
import { Strategy } from "passport-local";
import User from "models/User";

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

export default LocalStrategy;
