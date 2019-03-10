const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Data = require("./database");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = 'mongodb://localhost/27017/coffeeOrder';
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
  );
let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/getOrders", (req, res) => {
    Data.find((err, data) => {
        console.log('data', data)
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
      });
})

app.use("/", router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));