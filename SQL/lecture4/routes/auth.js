const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const {User}=require("../models/db");//here we have to include db not user as we 
//are exporting user in the db.js not in user.js ok
const router=express.Router();

//api's for login and signup

router.post("/signup",async (req,res)=>{
    const {username,password}=req.body;
    const hashedPassword=await bcrypt.hash(password,10);
    try{
        //jisne signup kiya uska password hashed krke store kr liya
        const user=await User.create({username,password:hashedPassword});
        res.status(201).json(user);
    }
    catch(e){
        console.log(e);
        res.status(400).json({ error:e });
    }
})

//login api
router.post("/login",async (req,res)=>{
    const {username,password}=req.body;
    //this is similar to find any user using where
    const user=await User.findOne({where:{username:username}});//ager dono same hai to khali username bhi chl jayega
    if(user && (await bcrypt.compare(password,user.password))){
        const token=jwt.sign({id:user.id,username:user.username},"secret");
        res.json({token});
    }
    else{
        res.status(401).json({ error: "Invalid credentials" });
    }
})

module.exports=router;
