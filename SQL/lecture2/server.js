(npm install express axios mysql2 sequelize) ----> requirements



const express=require("express");
const app=express();
//to bs ham multiple api's bna rhe hai so that code looks good
const apiRoutes=require("./api");
// const { getAllOrders } = require("./functions");

//these are used here to check whether server connects or not we w'll not use them here
//this will be called inside modeljs to check if the connection is there
//sequelize tell nodejs how our table will look like
  
//to bs ye niche db.js ki tarah sequelize ke sare functions import kiya and db.js file ko bhi
// const { Datatypes }=require("sequelize");
// const sequelize=require("./db.js");

// getAllOrders();

app.use(express.json());
app.use("/api",apiRoutes);//ye to vo hai ki /api aaya path me to apiRoutes pe chle jao

const port=3000;
app.listen(port,()=>{
    console.log("server running at http://localhost:3000/");
})

//to basically models me ham sbhi tables ka schema likhenege
//to fir bar bar insert into jaise long commands nhi likhni hogi hame  
