use bamazon;

drop table if exists Products;

create table if not exists Products (
	item_id int auto_increment primary key,
    product_name varchar(100),
    department_name varchar(100),
    price decimal(10,2),
    stock_quantity int
);