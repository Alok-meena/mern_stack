HW for tomorrow -
You guys already know how to write APIs and you also know how to write something in a file and read from a file.

You have to create 2 apis, one that will store ( post) book information (name, id , author etc) in 
a json file / txt file and other api will read / search( get) from the file.

It’s the same as we did before with arrays , now we need to store and read from file .

Additional  - create one more api to edit the content of the file( like edit title or author)





const express=require("express");
const app=express();
const port=3000;

app.use(express.json());
const fs=require("fs");

const path=require("path");
const filepath=path.join(__dirname,"hi.json");

let books=[
    {name:"Alok",id:1,author:"Kabir singh"},
    {name:"Aman",id:2,author:"Saksena Sahab"}
]

app.post("/store",(req,res)=>{ 
    const newbook=req.body;
    books.push(newbook);
    fs.writeFile(filepath,JSON.stringify(books,null,2),(err)=>{
        if(err) throw err;
        console.log("data has been written");
    })
    res.json(newbook);
})

app.get("/search",(req,res)=>{
    fs.readFile(filepath,"utf8",(err,data)=>{
        console.log("data of json file is:");
        console.log(data);
    })
    res.json(books);
})

app.listen(port,()=>{
    console.log("SERVER RUNNING AT http://localhost:3000");
})
