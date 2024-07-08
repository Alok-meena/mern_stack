const express = require("express"); // Importing the Express module
const fs = require("fs"); // Importing the File System module
const path = require("path"); // Importing the Path module
const jwt = require("jsonwebtoken"); // Importing the JSON Web Token module
const bcrypt = require("bcrypt"); // Importing the bcrypt module

const app=express();
const port=3000;
const secret_key="kese_ho_bhai_jonney";

app.use(express.json());

const userfilePath=path.join(__dirname,"users.json");

const writeJsonFile=(filepath,data)=>{
    fs.writeFileSync(filepath,JSON.stringify(data,null,2));//null and 2 to give proper format
}

const readJsonFile=(filepath)=>{
    const data=fs.readFileSync(filepath,"utf8");
    return JSON.parse(data);//yha json.parse kiya becaue data ko karna tha
    //string fomat me tha to fir se parse kr diya hai
}

//api to register

const authMiddleware=(req,res,next)=>{
    const token=req.headers["authorization"];
    if(!token){
        res.status(401).json({ message: "Access denied" });
    }
    try{
        const decode = jwt.verify(token.split(" ")[1],secret_key);
        console.log(decode);  
        req.user=decode;
        next();
    }
    catch (err){
        res.status(400).json({message:"Invalid token"});
    }
}

app.post("/api/auth/register", async (req,res)=>{
    const { username,password }=req.body;
    // const users=[];
    const users=readJsonFile(userfilePath);//tp uper jab code tha to hmara data save nhi ho rha tha 
    //because hm hr bar ek nya array bna ke usme data save kr rhe the

    if(users.find((user)=>user.username===username)){
        res.status(404).json({error:"user already exists"});
    }

    const hashedPassword=await bcrypt.hash(password,10);//to 2 power 10 time encrypt krega
    //so hashing is used to save data

    users.push({username,password:hashedPassword});//to ye apna jo password hai use BCRYPT alag hi format me hash krke dedega
    writeJsonFile(userfilePath,users);
    res.status(200).json({message:"user registered sucessfully"});
})

app.post("/api/auth/login", async (req,res)=>{
    const { username,password }=req.body;
    const users=readJsonFile(userfilePath);
    const user=users.find((user)=>user.username===username);

    //to yha tk to hmane sara data utha liye hai  and
    //if user does not exist or our and saved password doesn't match return error

    // Check if user exists and if the password is correct
    if(!user || !(await bcrypt.compare(password,user.password))){
       return res.status(404).json({error:"Invalid Cred"});
    }

  // Create a JWT token
    const token=jwt.sign({username},secret_key,{expiresIn:"1h"});
    res.json({token});
})

app.get("/api/protected",authMiddleware,(req,res)=>{
    res.json({message:"This is a protected route",user:req.user});
})
app.listen(port,()=>{
    console.log("SERVER RUNNING AT http://localhost:3000/");
})


//to starting me npm start then apna nodemon start ho jayega and after updating the code
//no need to run the server again and again
