const express=require("express");

express.Router() is a built-in method provided by Express.js to create a new router object.
express.Router() is a function provided by Express. When you call it, it creates a new Router object.
This Router object is used to define routes and middleware.

    
const router=express.Router();//R capital hona chahihe aor ye ek inbuilt function hai
//jo routing ko on kr dega

const users=[
    {id:1,name:"Alok"},
    {id:2,name:"Aman"},
]


//this api will get all the users
router.get("/",(req,res)=>{//ab yha router me Router fun call kiya to use hi use karna hai
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


//When you export router, you are exporting this instance of the Router object.
//Since you are exporting an instance, you use module.exports = router.
 //and it is not a function that's why {} is not used
module.exports=router;
//aor yha exports me curley brackets mt lagana
