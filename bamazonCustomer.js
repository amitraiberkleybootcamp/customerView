var mysql = require('mysql');
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'MyNewPass',
  database: 'bamazon'
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  connection.query("SELECT * FROM products", function(err, res) {

      console.log("Welcome to Bamazon!");
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + "\nName of Product: " + res[i].product_name + "\nNumber of Units available : " + res[i].stock_quantity + "\nPrice: " + "$" + res[i].price + "\n=======================");
      }
  });

  connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;

      inquirer.prompt([{
          name: "productList",
          list: function() {
              var productsArr = [];
              for (var i = 0; i < res.length; i++) {
                  productsArr.push(res[i].item_id);
              }
              return productsArr;
          },
          message: "What would you like to buy? (Please type in the Item ID).",
      }, {
          name: "unitNum",
          message: "How many would you like to buy?",

      }]).then(function(custAnswer) {

          var custChoiceID = custAnswer.productList.trim();

          var arrNum = custChoiceID - 1;

          var chosenProduct = res[arrNum];

          console.log("You chose:  " + custChoiceID + " | " + chosenProduct.product_name);

          //how many the customer would like to purchase 
          var unitNum = custAnswer.unitNum.trim();
          console.log("# of items you wanted to purchase: " + unitNum);

          //num of stocks available in store
          var itemStocks = chosenProduct.stock_quantity;

          if (unitNum < chosenProduct.stock_quantity) {
              var newQuantity = chosenProduct.stock_quantity - unitNum

              connection.query("UPDATE products SET ? WHERE ?", [{
                  stock_quantity: newQuantity
              }, {
                  item_id: chosenProduct.item_id
              }], function(err) {
                  if (err) throw err;
                  console.log("Your order has been placed!");
                  console.log("Total cost: $" + (unitNum * chosenProduct.price));
                  connection.end();
              })
          } else {
            console.log("Insufficient quantity. You tried....Maybe next time."); 
          };
      });
  });
}
