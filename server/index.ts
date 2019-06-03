import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import bodyParser from "body-parser";
import morgan from "morgan";

import User from "models/User";
import LocalStrategy from "config/authStrategy";

import authRoute from "routes/auth";
import catalogue from "fixtures/catalogue";
import slides from "fixtures/slides";
import categories from "fixtures/categories";

dotenv.config();

const { DB_URL, DB_PASSWORD, DB_USER, NODE_ENV, PORT } = process.env;

const app = express();

const mongoDB = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URL}`;
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

if (NODE_ENV === "development") {
    app.use(morgan("dev"));
}

passport.use(LocalStrategy);
passport.serializeUser((user: { id: string }, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
    User.findById(id, (err, user) => done(err, user))
);

app.use("/auth", authRoute);
app.get("/products", (req, res) => res.json(catalogue));
app.get("/carousel", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(PORT);
