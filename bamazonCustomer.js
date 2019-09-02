const mysql = require('mysql');
require('dotenv').config();

// Make sure the MySQL server is set to use legacy password otherwise the mysql package will not work.
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : process.env.DB_PASSWORD,
    database : 'bamazon'
  });

// https://www.npmjs.com/package/mysql#performing-queries
connection.query('SELECT * FROM `Products`', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

