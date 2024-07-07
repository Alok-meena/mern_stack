
const express=require("express");
const app=express();
//ye dono middleware hamne alag se file me likha because sabhi api me use krna hai

Node.js require: Uses relative paths (e.g., ./auth.js) to locate modules on the filesystem relative to the file doing the requiring

HTTP API calls: Use paths relative to the server's root directory (e.g., /a.html), not the filesystem.


const basicAuth=require("./auth.js");//basically this is middleware which we have written in 
//other file
const logger=require("./logger.js");//it is used to display which api is called
const port=3000;

app.use(express.json());//ye to hamne postman pe data post ya get krne ke liye json format aa rha iske liye bheja tha
app.use(logger);//to ye hamne yha diya to sbhi api pe work krega jo bhi call hogi
//but ager ham ise kisi specific api me dete to vhi work karta jaise dekho nich public me diya
//"/public",logger,(req,res)=> LIKE THIS

//it is to use logger in all api's

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
