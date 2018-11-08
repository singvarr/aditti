const express = require("express");

const app = express();

const developmentMode = "development";
const mode = process.env.NODE_ENV || developmentMode;

const catalogue = require("./mockData/catalogue");
const headerLinks = require("./mockData/links");
const slides = require("./mockData/slides");
const categories = require("./mockData/categories");

app.get("/items", (req, res) => res.json(catalogue));
app.get("/headerLinks", (req, res) => res.json(headerLinks));
app.get("/slides", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(3000, () => console.log("server is running on port 3000"));
