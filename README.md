# Bamazon
Node.js and MySQL CLI application

The application starts by showing the user the items available for purchase. This data is retrieved from a MySQL database table.
![Screenshot1](/Img/Bamazon-Screen-1.png)

MySQL table
![Screenshot2](/Img/Bamazon-Screen-2.png)

The user is then prompted to enter the ID number of the item they would like to purchase, followed by the quantity. 
![Screenshot3](/Img/Bamazon-Screen-3.png)

Before this entry is fulfilled, however, the program makes sure there is enough inventory available to complete the purchase. If there is, the program prints the total amount of the purchase (quantity x price), and it reduces the inventory amount by the quantity purchased. If there isn't enough of the particular item, the program sends a message to the user, and it does not update the database.
![Screenshot4](/Img/Bamazon-Screen-4.png)
*Note the updated quantity in the database when a purchase is successful.*

