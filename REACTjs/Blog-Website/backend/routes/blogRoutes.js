import express from "express";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
const router = express.Router();

//Route will show all the blogs on our website 
router.get("/", async(req,res)=>{
    try{
        //means sara data leke aao aor uska email dedo hame  
        const blogs = await Blog.find().populate("author","email");
        res.json(blogs);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})

//To create a new Blog
router.post("/", authenticateToken, async (req,res) => {
    const {title,content} = req.body;
    const author = req.user.id;

    const blog = new Blog({
        title,
        content,
        author,
    });

    try{
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    }
    catch(err){
        res.status(400).jons({message:err.message});
    }
})

export default router;
