const {Sequelize,DataTypes}=require("sequelize");

const sequelize=new Sequelize("chatproject","root","Alok@6450#ok",{  //db,username,password
    host:"localhost", //this is the host
    dialect:"mysql", //and this is the type
})

//he require("./user")(sequelize, DataTypes) pattern is used to initialize the model with the Sequelize instance and the DataTypes object
const User=require("./user")(sequelize,DataTypes);
const Message=require("./message")(sequelize,DataTypes);

//so we have foreign key so this means that more than one user can have many messages
//relation b/w user and message
User.hasMany(Message);//optional
Message.belongsTo(User);//optional

// sequelize.authenticate().then(()=>{
//     console.log("CONNECTED TO database");
// }).catch((err)=>{
//     console.log("Unable to connect to the database:",err);
// })

//optional
//if table aor yha hmara khuch mismatch hota hai to ye sync kr dega
sequelize.sync();//if table nhi bni hui hai to ye bna dega

module.exports={sequelize,User,Message};



// CREATE TABLE `Users` (
//     `id` INT AUTO_INCREMENT PRIMARY KEY,
//     `username` VARCHAR(255) NOT NULL UNIQUE,
//     `password` VARCHAR(255) NOT NULL,
//     `createdAt` DATETIME NOT NULL,
//     `updatedAt` DATETIME NOT NULL
//   );

//   CREATE TABLE `Messages` (
//     `id` INT AUTO_INCREMENT PRIMARY KEY,
//     `text` VARCHAR(255) NOT NULL,
//     `createdAt` DATETIME NOT NULL,
//     `updatedAt` DATETIME NOT NULL,
//     `UserId` INT,
//     FOREIGN KEY (`UserId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
//   );
