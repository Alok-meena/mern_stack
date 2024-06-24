VERY VERY IMP KI CODE ME HAM HMESHA req use krte hai because response to ham hmesha bhejte hai



const express=require("express");//to yha pe express ka code use kr liya hai

const app=express();//to express ko call kiya aor uski functionalities app me aa gyi hai

const port=3000;

//it is used so that to tell that data is of json format doing json parse
app.use(express.json());


let items=[];

let idcounter=1;


app.get("/items",(req,res)=>{ 
    res.json(items);
})



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


lecture 3 pahle vala lecture 2 ka hai

//PUT API IS USED TO UPDATE THE ITEMS 

//to ye niche jo /items:id likha hai isme id ki jagah khuch bhi aa skta hai
//koi bhi variable ex hello , 1, 2, etc jo ham url me hi items/1 de diya for example
//can use any name istead of id

//ye jo path me /:id hai means / ke bad ager ye variable ho to kya changes karne honge
//and to pick it use req.params.id

//aor path me koi bhi id deke uski koi bhi property change krva skte hai
app.put("/items/:id",(req,res)=>{
    const id=parseInt(req.params.id);

    const item=items.find((item)=>item.id==id);//to yha pe item aaya hai jiski id id hai

    if(item){
        item.name=req.body.name;
        res.status(200).json(items);
    }
    else{
        res.status(404).json({error: "Item not found"});
    }
})

//delete button

app.delete("/items/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const itemIndex=items.findIndex((item)=>item.id==id);//isme hamne item ka index findout kr liya hai

    //findIndex returns index of element o/w -1
    if(itemIndex!=-1){
        //splice index pe work krta hai to hamne index use kiya uper put me bhi kr skte hai index
        const deleteItem=items.splice(itemIndex,1);
        //TO INDEX ITEMINDEX SE LEKE TOTAL 1 ELEMENT KO REMOVE KR DEGA
        res.json(deleteItem);
    }
    else{
        res.status(404).json({error:"Item not found"});
        //BHAI VERY IMP JO HAM RESPONSE BHJETE HAI VO HMARA POSTMAN ME DISPLAY HOTA HAI
    }
})

//METHOD TO GET THE NAME FROM THE ITEMS LIST BY WRITING IT IN THE PATH

app.get("/items/:name",(req,res)=>{
    const name=req.params.name;

    const nameItem=items.find((item)=>item.name==name);
    if(nameItem){
        res.status(201).json(nameItem);
    }
    else{
        res.status(404).json({error:"Item not found"});
    }
})

//this method is used if we want to send only 1 variable 
//BUT IF WE WANT TO SEND MULTIPLE VARIABLES THEN WE HAVE TO USE QUERY PARAMS

//QUERY PARAMS....
//and inside path give search aor get me postman me path me like /searach?name=alok ese hi
app.get("/search",(req,res)=>{
    const name=req.query.name;

    const nameItem=items.find((item)=>item.name==name);
    if(nameItem){
        res.status(201).json(nameItem);
    }
      
    res.status(404).json({error:"Item not found"});
})




app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`);
});
