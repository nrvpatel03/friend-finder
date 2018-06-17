
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//get data
var data = require("./app/data/friends.js");

//Routes
//Html and api routes
require("./routing/apiRoutes")(app, data);
require("./routing/htmlRoutes")(app, path);





//start server
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})