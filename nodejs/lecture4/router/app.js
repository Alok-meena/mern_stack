 const express=require("express");
 const app=express();
 const port=3000;


 //very imp ki ham ./ use kro jab path dena ho 
 //and use ./ to go forward and use ./../ to go backward
 const userRoutes=require("./routes/userRoutes");
 const bookRoutes=require("./routes/bookRoutes");

 app.use(express.json());

app.use("/api/users",userRoutes);//ye router hoga tabhi uspe jayega apna pointer okk

app.use("/api/books",bookRoutes);

 app.listen(port,()=>{
    console.log("SERVER IS RUNNING ON http://localhost:3000")
 })
