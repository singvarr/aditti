import { Router } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import User from "models/User";

const router = Router();

router.post("/signin", passport.authenticate("local"), (req, res) => {
    res.json({ error: false, data: "ok!" });
});

router.post("/signout", (req, res) => {
    req.logout();
    res.json({ error: false, data: "ok!" });
});

router.post("/signup", (req, res) => {
    const { username, password } = req.body;

    User.findOne({ login: username }, (error, user) => {
        if (error) {
            res.sendStatus(500);
        } else if (user) {
            res.json({
                error: true,
                data: {
                    username: "This nickname is already registered"
                }
            });
        } else {
            bcrypt.genSalt(10, (error, salt) => {
                if (error) {
                    res.sendStatus(500);
                }

                bcrypt.hash(password, salt, (error, hash) => {
                    if (error) {
                        res.sendStatus(500);
                    }

                    new User({
                        login: username,
                        password: hash
                    })
                        .save()
                        .then(() => res.json({ error: false, data: "ok" }));
                });
            });
        }
    });
});

export default router;
