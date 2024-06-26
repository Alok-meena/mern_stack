YHA PE HAM SERVER PE HI APNE FORM KO RUN KRENGE AND 
WE WILL SEE HOW WE GET THE DATA...





use of body parser



The body-parser middleware is used in Node.js and Express applications to handle and parse incoming request bodies, particularly when you need to process data submitted through forms. 
    Here's a detailed explanation of why body-parser is used and its importance:

Purpose of body-parser
When an HTTP request is made to your server, the data sent with that request (e.g., form data) is received as a stream of bytes.
In order to work with this data in your application, it needs to be parsed into a usable format, such as a JavaScript object. This is where body-parser comes in.

Why body-parser is Necessary
Parsing Form Data:

When a form is submitted via a POST request, the data in the form is URL-encoded by default.
body-parser helps to extract this data and convert it into a JavaScript object that can be easily accessed and used within your application.


    
const express=require("express");
const bodyParser=require("body-parser");//used to encode the bit by bit data
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");//aor / deke file ka nam dena
    //because hm file bhej rhe hai aor ham response me kafi type bhej skte hai
    //to ye html ka form hmane server pe bhej diya
})

//after this our form will open at the server

app.post("/submit",(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    
    //to ye console krne se data hme terminal me show hoga
    console.log("DATA WE REVEIVED ---->> NAME ",name,"PHONE",phone);
    
    //and response direct hmara serverpe jayega
    //aor yha response me hamne $ symbol use kiya because data is in json format and 
    //if we want to access it's value we have to do it
    res.send(`FORM SUBMITTED SUCEESSFULLY !!! <br> NAME:${name} <br> PHONE:${phone}`);
})

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`);
});
