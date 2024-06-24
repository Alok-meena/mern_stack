
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");//aor / deke file ka nam dena
    //because hm file bhej rhe hai aor ham response me kafi type bhej skte hai
})

//after this our form will open at the server

app.post("/submit",(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;

    console.log("DATA WE REVEIVED ---->> NAME ",name,"PHONE",phone);

    res.send(`FORM SUBMITTED SUCEESSFULLY !!! <br> NAME:${name} <br> PHONE:${phone})`);
})

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`);
});
