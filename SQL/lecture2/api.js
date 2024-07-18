const express=require("express");
const { createUser, createProduct, createOrder } = require("./functions");
const router=express.Router();


//api to add users to the db in user table
router.post("/users",async (req,res)=>{
    try{
        const {name,email}=req.body;
        const user=await createUser(name,email);
        res.json(user); //response me jo create hua json format me user ko bhej rhe hai 
    }
    catch(e){
        console.log("Error in creating user:",e);
    }
})

//api for products to fill the value
router.post("/products",async (req,res)=>{
    try{
        const {name,description,price}=req.body;
        const product=await createProduct(name,description,price);
        res.json(product);
    }
    catch(err){
        console.log("Error in creating Prodcuts:",err);
    }
})
 
//api for orders
router.post("/orders",async (req,res)=>{
    try{
        const {user_id,product_id,quantity}=req.body;
        const order=await createOrder(user_id,product_id,quantity);
        res.json(order);
    }
    catch(err){
        console.log("Error in creating orders:",err);
    }
})

//api to get users data
router.get("/users/:id",async (req,res)=>{
    try{
        const id=parseInt(req.body.id);
        const user=await getUserById(id);
    }
    catch(err){
        console.log("Error in fething Users:",err);
    }
})

router.put("/users/:id",async (req,res)=>{
    try{
        const updates=req.body;
        const user=await updateUser(req.params.id,updates);
    }
    catch(err){
        console.log("Error updating user:",err.stack);
        res.status(500).send("Error updating user");
    }
})

module.exports=router;

//ASYNC AND AWAIT KI HAR JAGAH NEED HAI 
//BECAUSE TIME LAG KE AAYEGA NA DATA FETCH HOKE AAYEGA DB SE
