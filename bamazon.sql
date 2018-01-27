
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price FLOAT,
  stock_quantity INTEGER,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Little Fires Everywhere', 'Books',15.28,92);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Into the Water: A Novel', 'Books',7.00, 13);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Dairy Free Coconutmilk', 'Food',4.99, 31);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Red Garnet Yam - 2 lb', 'Food',4.51, 108);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Broccoli, 1 Bunch', 'Food',2.29, 10009);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Happy Belly Cage-Free, Large, White Eggs', 'Food',2.99, 546);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Hasbro Connect 4 Game', 'Game',8.77, 121);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Catan 5th Edition', 'Game',39.20, 54);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Monopoly Classic Game', 'Game',14.82, 13);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ('Yahtzee Game', 'Game',8.78, 986);