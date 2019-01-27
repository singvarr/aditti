const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../models/User");

router.post("/signup", (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username }, (error, user) => {
        if (error) {
            res.sendStatus(500);
        } else if (user) {
            res.send({
                error: true,
                data: "User has already registered with this nickname"
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

                    User({
                        username,
                        password: hash
                    })
                        .save()
                        .then(() => res.send({ error: false, data: "ok" }));
                });
            });
        }
    });
});

module.exports = router;
