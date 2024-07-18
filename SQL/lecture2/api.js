const express=require("express");
//so we also have to import the functions from the other file
const { createUser,
    createProduct, 
    createOrder,
    getUserById,
    getAllUsers,
    getAllProducts,
    getAllOrders,
    getOrderDetails,
    updateProduct,
    updateUser,
   } = require("./functions");
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
        // const id=parseInt(req.params.id);
        const user=await getUserById(req.params.id);
        res.json(user);
    }
    catch(err){
        console.log("Error in fething Users:",err);
    }
})

router.get("/users",async (req,res)=>{
    try{
        const users=await getAllUsers();
        res.json(users);
    }
    catch(error){
        console.log("Error fetching users:",error.stack);
        res.status(500).send("Error fetching users");
    }
})

router.get("/products",async (req,res)=>{
    try{
        const products=await getAllProducts();
        res.json(products);
    }
    catch(error){
        console.log("Error fetching users:",error.stack);
        res.status(500).send("Error fetching users");
    }
})

router.get("/orders",async (req,res)=>{
    try{
        const products=await getAllOrders();
        res.json(products);
    }
    catch(error){
        console.log("Error fetching users:",error.stack);
        res.status(500).send("Error fetching users");
    }
})


router.get("/orders/:id",async (req,res)=>{
    try{
        const user=await getOrderDetails(req.params.id);
        res.json(user);
    }
    catch(err){
        console.log("Error updating user:",err.stack);
        res.status(500).send("Error updating user");
    }
})



router.put("/users/:id", async (req, res) => {
  try {
    const updates = req.body;
    const user = await updateUser(req.params.id, updates);
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error.stack);
    res.status(500).send("Error updating user");
  }
});


router.put("/products/:id", async (req, res) => {
    try {
      const updates = req.body;
      const product = await updateProduct(req.params.id, updates);
      res.json(product);
    } catch (error) {
      console.error("Error updating product:", error.stack);
      res.status(500).send("Error updating product");
    }
  });





module.exports=router;

//ASYNC AND AWAIT KI HAR JAGAH NEED HAI 
//BECAUSE TIME LAG KE AAYEGA NA DATA FETCH HOKE AAYEGA DB SE
