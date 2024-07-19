create table Messages(
   id int auto_increment primary key,
   text varchar(255) not null,
   createdAt datetime not null,
   updatedAt datetime not null,
   UserId int,
   foreign key (userid) references Users(id) on delete set null on update cascade
);
  



CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);
