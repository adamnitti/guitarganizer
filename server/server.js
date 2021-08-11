var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("../routes/indexRouter");
var guitar = require("../routes/guitarRouter");
var upload = require("../routes/uploadRouter");
var users = require("../users");

var app = express();

var port = 3000;

app.listen(port, () => {
    console.log("Server running on port", port);
});

//views

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", index);
app.use("/api", guitar);
app.use("/api", upload);
app.use("/api", user);
