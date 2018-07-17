//Dependencies
const express = require("express");
const bodyParser = require("body-parser");

//PORT
const PORT = process.env.PORT || 3000;

//Express
const app = express();

//Static Files
app.use(express.static("public"));

//Parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//Routing
const routes = require("./controllers/booksController.js");
app.use(routes);

//Listening
app.listen(PORT, function(){
	console.log("Now listening at: http//:localhost:" + PORT);
});