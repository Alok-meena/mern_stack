
const express=require("express");
const app=express();
//ye dono middleware hamne alag se file me likha because sabhi api me use krna hai
const basicAuth=require("./auth.js");
const logger=require("./logger.js");//it is used to display which api is called
const port=3000;

app.use(express.json());//ye to hamne postman pe data post ya get krne ke liye json format aa rha iske liye bheja tha
app.use(logger);//it is to use logger in all api's

app.get("/public",(req,res)=>{
    res.send("THIS IS PUBLIC API");
})

//mtlb basicAuth middleware ko pass krne ke bad hi request access hogi
app.get("/protected",basicAuth,(req,res)=>{
    res.send("THIS IS PROTECTED API");
})

app.listen(port,()=>{
    console.log("SERVER STARTED AT port:",port);
})
