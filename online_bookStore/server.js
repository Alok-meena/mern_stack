 const express=require("express");
 const mongoose=require("mongoose");
 const bodyParser=require("body-parser");
 const path=require("path");


 const userRoutes=require("./routes/userRoutes");
 const bookRoutes=require("./routes/bookRoutes");
 const orderRoutes=require("./routes/orderRoutes");

 const app=express();

 
 //here we use express.json so following is similar to it
 app.use(bodyParser.json());
 //this is the another method to run the file on the server
 app.use(express.static(path.join(__dirname,"public")));//to use public

 const dbUri="mongodb://localhost:27017/online-bookstore";
 mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true})
         .then(()=>console.log("MongoDB connected"))
         .catch((err)=>console.log(err));

app.use("/api/users",userRoutes);
app.use("/api/books",bookRoutes);
app.use("/api/orders",orderRoutes);


//2nd method bhi likha hai dono likh diye taki ek na chle to doosra to chal hi jaye
//server homepage
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","signup.html"));
});

app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","login.html"));
});

const port=3000;
app.listen(port,()=>{
    console.log("server running on port http://localhost:3000/");
})



