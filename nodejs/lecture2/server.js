npm init -y :- to include package.json

npm install express :- to install express framework

const express=require("express");//to yha pe express ka code use kr liya hai

const app=express();//to express ko call kiya aor uski functionalities app me aa gyi hai

//if 3000 is busy can use 8080 also
const port=3000;

//this 13-15 is GET api okkk!!!!
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(3000);//mtlb jab bhi koi 3000 port pe request bhejega tab use response milega

to isse hmara server run hoga localhost:3000 pe

or can do like this to check to hua ya nhi

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`);
});

TO ITNE CODE SE HMARA SERVER RUN HOGA 3000 PORT PE AOR HELLO WORLD PRINT HOGA VHA

AOR VERY VERY IMP KI JAISE HI VS CODE ME CTRL+C KIYA TO APNA SERVER BND HO JAYEGA 
BS JAB TAK VHA ON RHEGA TAB TAK SERVER ON RHEGA




let items=[
    {id:1,name:"Alok"},
    {id:2,name:"Alok1"},
    {id:3,name:"Alok2"},
    {id:4,name:"Alok3"},
];

app.get("/items",(req,res)=>{   VERY VERY IMP KI YHA PE HAMNE /ITEMS KIYA HAI TAKI JB URL ME /ITEMS DALE TAB YE AATE NHI DETE AOR / YE RHTA TB BHI AATA BUT NOT 
                                THAT MUCH COOL 
    res.json(items);
})


use this to send any data we use send to give any message and to send any data
always use .json format


and in postman in get method after pasting url of srever you will get the data there





POST:---
and to post data means to give data use this

isse pahle postman me body me ek json create kr lena for name okk aor id bhi vhi
se utha skte ho like this



const express=require("express");//to yha pe express ka code use kr liya hai

const app=express();//to express ko call kiya aor uski functionalities app me aa gyi hai

const port=3000;

//it is used so that to tell that data is of json format doing json parse
app.use(express.json()); //AOR YE HAMNE POSTMAN USE KARTE TIME HI KIYA HAI


let items=[];

let idcounter=1;


app.get("/items",(req,res)=>{
    res.json(items);
})

app.get("/",(req,res)=>{
    res.status(203).send("Hel World");
});

app.post("/items",(req,res)=>{
    const newItem={
        id:idcounter++,
        name:req.body.name,
    };

    items.push(newItem);
    res.status(201).json(items);
    //will take some data
    //save it to items
})

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`);
});

