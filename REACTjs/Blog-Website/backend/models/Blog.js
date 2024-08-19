import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{ type:String , required:true},
    content:{ type:String , required:true},
    author:{ type:mongoose.Schema.Types.ObjectId, ref:"User",required:true},
});


const Blog = mongoose.model("Blog",blogSchema);
export default Blog;
