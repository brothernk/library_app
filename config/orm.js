//Dependencies
const connection = require("../config/connection.js");

//SQL Syntax
function questionMarkToString(num){
	let arr = [];
	for (let i = 0; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
}

function objectToSql(ob){
	let arr = [];
	for (let key in ob){
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

//ORM Object
let orm = {
	selectAll: function(tableInput, cb){
		let queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},

	insertOne: function(table, cols, vals, cb){
		let queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += questionMarkToString(vals.length);
		queryString += ") ";

		console.log(queryString);
		connection.query(queryString, vals, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	},

	updateOne: function(table, objColVals, condition, cb){
		let queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objectToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			callback(result);
		});
	},

	delete: function(table, condition, cb){
		let queryString = "DELETE FROM " + table;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	}
};

//Export
module.exports = orm;