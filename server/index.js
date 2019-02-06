const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

const User = require("./models/User");
const LocalStrategy = require("./config/authStrategy");
const { login, password } = require("./config/db");

const app = express();

const mongoDB = `mongodb://${login}:${password}@ds213615.mlab.com:13615/aditti`;
mongoose.Promise = global.Promise;

mongoose.connect(
    mongoDB,
    { useNewUrlParser: true },
    () => console.log("connected to MongoDB")
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

const authRoute = require("./routes/auth");
const catalogue = require("./mockData/catalogue");
const slides = require("./mockData/slides");
const categories = require("./mockData/categories");

app.use("/auth", authRoute);
app.get("/products", (req, res) => res.json(catalogue));
app.get("/carousel", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(4000);
