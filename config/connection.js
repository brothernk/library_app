//MySQL Connection
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 

else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "bookclub_db",
    });
};

connection.connect(function(err){
	if (err){
		console.error("Error connecting: " + err.stack);
		return;
	}
	console.log("Connected as id " + connection.threadId);
});

//Export
module.exports = connection;