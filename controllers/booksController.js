//Dependencies
const express = require("express");
const router = express.Router();
const book = require("../models/book.js");

//GET Route
router.get("/", function(req, res){
	book.selectAll(function(data){
		let handlebarsObject = {
			books: data
		};
		res.render("index", handlebarsObject);
	});
});

//POST Route			
router.post("/api/books", function(req, res){
	book.insertOne(["name", "readbook"],
		[req.body.name, req.body.readbook],
	 	function(result){
			res.json({id: result.insertId});
	});
});

//PUT Route  
router.put("/api/books/:id", function(req, res){
	let condition = "id = " + req.params.id;

	book.updateOne({readbook:req.body.readbook}, 
		condition, function(result){
			if (result.changedRows == 0){
				return res.status(404).end();
			} else{
				res.status(200).end();
			}
	});
});

//DELETE Route
router.delete("/api/books/:id", function(req, res){
	let condition = "id = " + req.params.id;

	book.delete(condition, function(result){
		if (result.affectedRows == 0){
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

//Export
module.exports = router;