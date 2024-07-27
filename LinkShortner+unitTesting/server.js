//first of all npm i shortid

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import linkRoutes from "./routes/links.js";

const app=express();
const port=3000;
const mongo_url="mongodb://localhost:27017/linkshortener";

mongoose.connect(mongo_url,{useNewUrlParser: true,
    useUnifiedTopology: true,});//the data which we provide in this is totally optional

app.use(bodyParser.json());
app.use("/api/links",linkRoutes);

app.listen(port,()=>{
    console.log("server running at http://localhost:3000/");
})

export {app};
