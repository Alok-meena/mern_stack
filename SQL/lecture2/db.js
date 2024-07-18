//The express module uses a default export. This means
// it exports a single entity (in this case, a function) that you can import without using curly brackets.

//The sequelize module uses named exports. This means it exports multiple 
//entities, and you need to specify which one you want to import by using curly brackets.

//aor kisi bhi name se import kr skte the but should look good 
//capitla s so that below can use same with small s


const {Sequelize}=require("sequelize");

//here use the above Sequelize and the above n
const sequelize=new Sequelize("alok","root","Alok@6450#ok",{  //db,username,password
    host:"localhost", //this is the host
    dialect:"mysql", //and this is the type
})

//means ager authenticate ho gya means uper ki info shi hai then do this o/w error
sequelize.authenticate().then(()=>{
    console.log("CONNECTED TO database");
}).catch((err)=>{
    console.log("Unable to connect to the database:",err);
})

module.exports=sequelize;

//this is the boilder plate to connect to database


//Executing (default): SELECT 1+1 AS result to check connection b/w server and db


//Yes, you’re correct! In this code, the sequelize.authenticate() method is used to check
// if the connection to the database can be established with the provided credentials (database name, username, and password). 
