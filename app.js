const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const uploadFile = require('./routes/uploadFile');
const downloadFile = require('./routes/downloadFile');
const createTextRecord = require('./routes/createTextRecord');
const retrieveTextRecord = require('./routes/retrieveTextRecord');

const options = {
  allowedHeaders: ["Origin", "Content-Type", "Accept", "Authorization"],
  origin: "*",
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('This is a home!!');
});

app.use("/uploadFile", uploadFile);
app.use("/downloadFile", downloadFile);
app.use("/createTextRecord", createTextRecord);
app.use("/retrieveTextRecord", retrieveTextRecord);

module.exports = app;