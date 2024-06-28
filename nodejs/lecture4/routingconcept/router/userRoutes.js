const express=require("express");
const router=express.Router();

const users=[
    {id:1,name:"Alok"},
    {id:2,name:"Aman"},
]


//this api will get all the users
router.get("/",(req,res)=>{
    res.json(users);
})

//use this api to get user by ID
router.get("/:id",(req,res)=>{
    const user=users.find((u)=>u.id===parseInt(req.params.id));
    if(!user){
        res.status(404).json({message:"User NOt Found"});
    }
    res.status(200).json(user);
})

//get user by name
router.get("/name/:name",(req,res)=>{
    const user=users.find((u)=>u.name===req.params.name);
    if(!user){
        res.status(404).json({message:"User Not Found"});
    }
    res.status(200).json(user);
})

//Post create a new user
router.post("/",(req,res)=>{
    const newuser=req.body;
    users.push(newuser);
    res.status(201).json(newuser);
})

module.exports=router;
