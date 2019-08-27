# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName 
FROM Products 
JOIN Categories 
ON Products.CategoryID = Categories.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName 
FROM Orders AS o
JOIN Shippers AS s
ON o.ShipperID = s.ShipperID
WHERE OrderDate < "1997-01-09"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity
FROM OrderDetails AS o
JOIN Products AS p
ON o.ProductID = p.ProductID
WHERE OrderID = 10251
ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderID AS "Order Number", 
  CustomerName AS "Customer Name", 
  LastName As "Employee's Last Name"
FROM Orders AS o
JOIN Customers AS c
ON o.CustomerID = c.CustomerID
JOIN Employees AS e
ON o.EmployeeID = e.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 