const dotenv = require("dotenv");
dotenv.config()
const userrouter = require("./routes/userRouter.js");
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const path = require('path');
app.use(cors())
const connectdb = require("./db/connection.js");
require("./Models/usertable");
const port = process.env.PORT;
const database = process.env.databasenew;
mongoose.set('strictQuery', false);
connectdb(database);
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/user", userrouter);

app.listen(port, () => {
  console.log(`server is runing at ${port}`);
});
