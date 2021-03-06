"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || '8080';
app.use(bodyParser.json());
app.listen(port, function () {
  console.log("Server listened on: " + port);
});
app.post('/notificate', function (req, res) {
  console.log(req.body);
  res.status(200).send(JSON.stringify({
    message: "Everything is OK"
  }));
});