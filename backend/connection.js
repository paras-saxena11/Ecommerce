require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const DB_url = "mongodb://localhost:27017/ecom";
mongoose.connect(DB_url, { useNewUrlParser: true }).then(() => console.log("Db connected")).catch(err => console.log(err));
