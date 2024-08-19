import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import blogRoute from "./routes/blogRoutes.js"
import authRoute from "./routes/authRoutes.js"

dotenv.config();

const app=express();
const port=5000;

app.use(cors());//taki apna react app api's ko use kr ske call kr paye without any error
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/blog-platform",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("MnogoDB connected"))
  .catch((err) => console.log(err));


app.use("/api/blogs",blogRoute);
app.use("/api/auth",authRoute);

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})
