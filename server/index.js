import express from "express";
import mongoose from "mongoose";

import session from "express-session";
import bodyParser from "body-parser";
import passport from "passport";

import User from "models/User";
import LocalStrategy from "config/authStrategy";

require("dotenv").config();

const { DB_USER, DB_PASSWORD, PORT } = process.env;

const app = express();

const mongoDB = `mongodb://${DB_USER}:${DB_PASSWORD}@ds213615.mlab.com:13615/aditti`;
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB, { useNewUrlParser: true }, () =>
    console.log("connected to MongoDB")
);

const db = mongoose.connection;
db.on("error", error => console.error("MongoDB connection error", error));

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "my precious"
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(LocalStrategy);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
    User.findById(id, (err, user) => done(err, user))
);

import authRoute from "routes/auth";
import catalogue from "fixtures/catalogue";
import slides from "fixtures/slides";
import categories from "fixtures/categories";

app.use("/auth", authRoute);
app.get("/products", (req, res) => res.json(catalogue));
app.get("/carousel", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(PORT);
