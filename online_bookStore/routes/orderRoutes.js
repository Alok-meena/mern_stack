const express=require("express");
const {createOrder,getOrdersByUser}=require("../controllers/orderController.js");
const router=express.Router();

router.post("/",createOrder);
router.get("/:userId",getOrdersByUser);

module.exports=router;


//TO YE CONTROLLERS ME HAM HMARI SARI API'S KA LOGIC LIKHENGE YHA TO BAS HAMNE API'S KO DEFINE KIYA HAI


//Controllers are responsible for processing incoming requests, performing operations based on the request data, interacting with the database or other services,
// and sending responses back to the client.

// Controllers help in organizing the codebase by separating the request handling 
//logic from the routing logic, making the code more modular, readable, and maintainable.
