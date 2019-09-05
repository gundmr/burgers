var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

//serve static content for app
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Import routes and give the server access to them 
var routes = require('./controllers/burger_controller');

app.use(routes);

app.listen(PORT, function(){
    console.log("app now listening att localhost: ", + PORT);
});