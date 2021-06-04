var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'EmployeeDB',

});

module.exports = mysqlConnection;