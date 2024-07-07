 const express=require("express");
 const app=express();
 const port=3000;


 //very imp ki ham ./ use kro jab path dena ho 
 //and use ./ to go forward and use ./../ to go backward


 const userRoutes=require("./routes/userRoutes");
 const bookRoutes=require("./routes/bookRoutes");

YHA PE HAMNE SBHI API JO ROUTING KE THROUGH CALLL HOGI UNKE LIYE BTA DIYA
KI DATA JSON FORMAT ME HOGA

//to un folders me express.Router() routing ko enable kr dega
 app.use(express.json()); 

//to jab localhost:3000/api/users call ho to ye uerRoutes vali file me jaye jo hmne pahle hi
//uper import kr li hai taki code neat rhe aor differnt files bna ke easily work kre

//TO BASICALLY YE HAMNE ROUTING KI HAI KI YE CALL HO TO ISSE PATH BTA DIYA KI IS FILE ME JANA HAI
the process of path selection in any network IS CALLED ROUTING

app.use("/api/users",userRoutes);
//ye userRoutes ye routes hona chahihe tbhi yha jayenge aor express.Router() btata hai
//ki file hm code routing ka hai okk

//very imp ham yha /users krke bhi kr skte the but for better understanding 
//ki which api then it's path to ese aor folder alag se bnaya vo bhi for clearity okk


//ye router hoga tabhi uspe jayega apna pointer okk

app.use("/api/books",bookRoutes);

 app.listen(port,()=>{
    console.log("SERVER IS RUNNING ON http://localhost:3000")
 })
