const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const authRoute = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", authRoute);

const catalogue = require("./mockData/catalogue");
const slides = require("./mockData/slides");
const categories = require("./mockData/categories");

app.get("/products", (req, res) => res.json(catalogue));
app.get("/carousel", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(4000);
