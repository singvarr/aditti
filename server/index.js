const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const { login, password } = require("./config/db");

const mongoDB = `mongodb://${login}:${password}@ds213615.mlab.com:13615/aditti`;
mongoose.Promise = global.Promise;

mongoose.connect(
    mongoDB,
    { useNewUrlParser: true },
    () => console.log("connected to MongoDB")
);

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error", error));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoute = require("./routes/auth");

app.use("/auth", authRoute);

const catalogue = require("./mockData/catalogue");
const slides = require("./mockData/slides");
const categories = require("./mockData/categories");

app.get("/products", (req, res) => res.json(catalogue));
app.get("/carousel", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(4000);
