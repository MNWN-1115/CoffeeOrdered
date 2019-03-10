const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { findOrder, saveOrder } = require("./database");

const app = express();
const router = express.Router();

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());

router.get("/getOrders", (req, res) => {
    findOrder(req, res);
})