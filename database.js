const mysql = require("mysql");

var connect = mysql.createConnection({
    "host": "localhost",
    "database": "eindwerkDB", 
    "user": "root", 
    "password": ""
});

module.exports = connect;