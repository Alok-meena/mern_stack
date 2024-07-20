HERE JUST ONE EXTRA  npm i mongoose

const express=require("express");
const mongoose=require("mongoose");
const User=require("./models/User");
const Order=require("./models/Order");

const app=express();//to start the app;
app.use(express.json());

const dbURI="mongodb://localhost:27017/blocks";//just for connection 
//no password needed on local

mongoose
   .connect(dbURI)//does not require to include this ,{useNewUrlParser:true,useUnifiedTopology:true}
   //bydefault made by mongodb required for connection
   .then(()=> console.log("MongoDB connected")) 
   .catch((error)=> console.log(error));

app.get("/users/:email",async (req,res)=>{
    const email=req.params.email;
    //no where condition requried 
    //all of the queries we do write in mongo db will be written here inside find()

    const user=await User.find({email:email});//yha easily search ho jata hai
    //just make sure to give correct  name here what u are searching
    return res.json(user);
})

app.get("/orders/:email",async (req,res)=>{
    const email=req.params.email;
    const order=await Order.find({customer_email:email});
    return res.json(order);
})

app.get("/orders",async (req,res)=>{
    const email=req.params.email;
    const order=await Order.find();
    return res.json(order);
})

//to save any data  (TO INSERT) 
app.post("/users",async (req,res)=>{
    const user=new User(req.body);
    user.save();//to save the new user data
    return res.json(user);
})

//to update
app.post("/users/update",async(req,res)=>{
    const {email,name}=req.body;
    const user=await User.findOneAndUpdate(
        {email:email},//this is working as a where condition like go where email is this
        {$set:{name:name}}
    );
    res.send(user);//updated data return kr diya
})

//to delete
app.post("/users/delete",async(req,res)=>{
    const {email}=req.body;
    const user=await User.findOneAndDelete({email:email});
    res.send("User deleted successfully");//updated data return kr diya
})

//example

//but if u will give incorrect field names then it will not be saved

// {
//     "name": "Dj bravo",
//     "age": 30,
//     "email": "bravo@example.com",
//     "address": {
//         "street": "123 Elm westindies",
//         "city": "delhi",
//         "state": "IL",
//         "zip": "110023"
//     }
// }

const port=3000;
app.listen(port,()=>{
    console.log("Server running on port 3000");
})
