const mysql = require('mysql');
const inquirer = require('inquirer')
require('dotenv').config();

// Make sure the MySQL server is set to use legacy password otherwise the mysql package will not work.
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : process.env.DB_PASSWORD,
    database : 'bamazon'
  });

// Query the database to see the items available for purchase
// https://www.npmjs.com/package/mysql#performing-queries

connection.query('SELECT item_id, product_name, price FROM Products', function (error, results) {
    if (error) throw error;

    for (item of results)
    {
      console.log(item.item_id, item.product_name, item.price);
    };

    inquirer
      .prompt([
        {
          type: "input",
          name: "itemID",
          message: "Please enter the id of the item you would like to buy: "
        },
        {
          type: "input",
          name: "quantityRequested",
          message: "How many do you want to buy?"
        }
      ]).then(function(user) {

        connection.query({
          sql: 'SELECT item_id, product_name, price, stock_quantity FROM Products where item_id = ?',
          values: [user.itemID]}, 
          function (error, results) {
            if (error) throw error;
            
            for (item of results) 
            {
              let newQuantity = parseFloat(item.stock_quantity - user.quantityRequested);
              if (newQuantity >= 0) 
              {
                connection.query({
                  sql: 'UPDATE Products SET stock_quantity = ? WHERE item_id = ?',
                  values: [newQuantity, user.itemID]}, 
                  function(error, results) {
                    if (error) throw error;
                    console.log('Thank you for your purchase. Your total is $' + (item.price * user.quantityRequested).toFixed(2));
                });
              }
              else
              {
                console.log('Insufficient quantity!')
              }
            }
            connection.end();
          });
      });
  });