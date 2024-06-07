const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("데이터 베이스 연결 ㅇㅋ")
});

module.exports = app;