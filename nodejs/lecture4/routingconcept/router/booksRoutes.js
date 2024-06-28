const express=require("express");
const router=express.Router();

const books=[
    {id:1,title:"1984"},
    {id:2,title:"Brave New World"},
]

router.get("/",(req,res)=>{
    res.status(200).json(books);
})

module.exports=router;
