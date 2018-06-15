
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var htmlRoutes = require("./routing/htmlRoutes");
var apiRoutes = require("./routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//data
var friendsList = [
    {
        name: "Person1",
        scores: ["3","4","2","1","4","5","3","4","5","2"]
    },
    {
        name: "Person2",
        scores: ["5","2","3","3","5","2","1","4","5","2"]
    },
    {
        name: "Person3",
        scores: ["2","4","5","2","3","4","5","3","2","5"]
    },
    {
        name: "Person4",
        scores: ["4","3","4","1","4","5","2","1","2","3"]
    }
]

//Routes
//Html Routes

//go home
htmlRoutes.htmlRoutes.goHome(app,path);
//go to survey
htmlRoutes.htmlRoutes.goSurvey(app,path);

//Api Routes




//start server
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})