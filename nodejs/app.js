const express = require('express');
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const filesRoutes = require("./router/file");
const userRoutes = require("./router/user");
const config = require("./config/mongodb");

require('dotenv').config()

mongoose.connect(config.database)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use("/user", userRoutes);
app.use(filesRoutes);

app.listen(process.env.APPLICATION_PORT, () => console.log(`application on port : ${process.env.APPLICATION_PORT}`));
