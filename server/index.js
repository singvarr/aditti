const express = require("express");

const app = express();

const catalogue = require("./mockData/catalogue");
const headerLinks = require("./mockData/links");
const slides = require("./mockData/slides");
const categories = require("./mockData/categories");

app.get("/items", (req, res) => res.json(catalogue));
app.get("/headerLinks", (req, res) => res.json(headerLinks));
app.get("/slides", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.get("/", (req, res) => {
    res.json({
        slides,
        catalogue,
        categories
    });
});

app.listen(4000, () => console.log("server is running on port 4000"));
