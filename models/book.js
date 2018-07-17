//Dependencies
const orm = require("../config/orm.js");

//Book Object
let book = {
	selectAll: function(cb){
		orm.selectAll("books", function(res){
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb){
		orm.insertOne("books", cols, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb){
		orm.updateOne("books", objColVals, condition, function(res){
			cb(res);
		});
	},

	delete: function(condition, cb){
		orm.delete("books", condition, function(res){
			cb(res);
		});
	}
};

//Export
module.exports = book;