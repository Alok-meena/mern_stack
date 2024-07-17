IN LECTURE 1 BASIC SQL IS DONE

THIS IS LECTURE 2

FOLLOWING TABLES AND DATA IN THEM IS INSERTED ON SQL WORKBENCH



CREATE TABLE blocks.users (
    id INT AUTO_INCREMENT PRIMARY KEY, //on newinsertion the id will be automatically incremented
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    //The line created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP in your SQL table definition specifies that the created_at column will store the 
    //date and time when a record is created.
  );

//TIMESTAMP: This data type is used to store date and time values. It can represent both date and time in a single field.

//DEFAULT CURRENT_TIMESTAMP: This sets a default value for the created_at column to the current date and time when a new record is inserted. 
//So, whenever you insert a new user into the users table, this column will automatically be filled with the time of the insertion, 
//without needing to specify it explicitly.
//When you insert a new user like this:

// sql
// Copy code
// INSERT INTO blocks.users (name, email) VALUES ('John Doe', 'john@example.com');
// The created_at column will automatically be set to the current date and time, such as 2024-07-17 12:34:56.
  
  CREATE TABLE blocks.products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE blocks.orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );



INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (1,'Tom Taylor','tom.taylor@example.com','2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (2,'Lisa White','lisa.white@example.com','2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (3,'George Brown','george.brown@example.com','2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (4,'Hannah Black','hannah.black@example.com','2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (5,'Jack Green','jack.green@example.com','2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (6,'Mia Young','mia.young@example.com','2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`email`,`created_at`) VALUES (7,'Noah Scott','noah.scott@example.com','2024-07-06 23:15:06');




INSERT INTO `` (`id`,`name`,`description`,`price`,`created_at`) VALUES (1,'Desktop','High performance desktop',1500.00,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`description`,`price`,`created_at`) VALUES (2,'Smart Glasses','AR enabled smart glasses',900.00,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`description`,`price`,`created_at`) VALUES (3,'Smart Speaker','Voice-controlled smart speaker',250.00,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`description`,`price`,`created_at`) VALUES (4,'E-Reader','Lightweight e-reader',180.00,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`name`,`description`,`price`,`created_at`) VALUES (5,'Gaming Console','Next-gen gaming console',500.00,'2024-07-06 23:15:06');


INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (1,1,1,1,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (2,2,2,2,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (3,3,3,1,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (4,4,4,3,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (5,5,5,1,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (6,6,6,2,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (7,7,7,1,'2024-07-06 23:15:06');
INSERT INTO `` (`id`,`user_id`,`product_id`,`quantity`,`order_date`) VALUES (8,8,8,1,'2024-07-06 23:15:06');
