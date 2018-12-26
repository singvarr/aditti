const express = require("express");

const app = express();

const catalogue = require("./mockData/catalogue");
const slides = require("./mockData/slides");
const categories = require("./mockData/categories");

app.get("/products", (req, res) => res.json(catalogue));
app.get("/carousel", (req, res) => res.json(slides));
app.get("/categories", (req, res) => res.json(categories));

app.listen(4000, () => console.log("server is running on port 4000"));
