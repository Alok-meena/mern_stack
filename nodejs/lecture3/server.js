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
//jaise uper body ko pick kiya req.body se so parameter doge alag se koi bhi

//aor path me koi bhi id deke uski koi bhi property change krva skte hai

//using REQUEST PARAMS
app.put("/items/:id",(req,res)=>{
    const id=parseInt(req.params.id);

    const item=items.find((item)=>item.id==id);//to yha pe item aaya hai jiski id id hai

    if(item){
        item.name=req.body.name;
        res.status(200).json(items);//items yani sare item bhej diye only changed item bhi bhej skte the
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

    //VERY IMP KI UPER JO PARAMETER DIYA HAI VO PICK KRO PAHLE PARAMS USE KRKE
    //THEN FIND IT IN THE ARRAY
    const name=req.params.name;

    const nameItem=items.find((item)=>item.name==name);
    if(nameItem){
        res.status(201).json(nameItem);
    }
    else{
        res.status(404).json({error:"Item not found"});
    }
})

// GET: Retrieve an item by ID (Request Param)
// curl -X GET http://localhost:3000/items/1
app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);//because api me data string format me jata hai
    const item = items.find((item) => item.id === id);
  
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  });

//this method is used if we want to send only 1 variable 
//BUT IF WE WANT TO SEND MULTIPLE VARIABLES THEN WE HAVE TO USE QUERY PARAMS

//QUERY PARAMS....
//and inside path give search aor get me postman me path me like /searach?name=alok ese hi

//search ke alava khuch aor bhi use kr skte hai but hamne ye kiya hai for understanding

app.get("/search",(req,res)=>{
    const name=req.query.name;

    const nameItem=items.find((item)=>item.name==name);
    if(nameItem){
        res.status(201).json(nameItem);
    }
      
    res.status(404).json({error:"Item not found"});
})

1). THIS METHOD IS BY USING FILTER AND THE ABOVE ONE IS USING FIND METHOD

app.get("/search",(req,res)=>{
    const name=req.query.name;
    // const filterItem=items.find((item)=>item.name==name);
    const filterItem=items.filter((item)=>item.name.includes(name));
    if(filterItem){
        res.status(201).json(filterItem);
    }
      
    res.status(404).json({error:"Item not found"});
})    


2). BY THIS CODE WE CAN ACCESS MULTIPLE PARAMETERS BY SEARCHING


app.get("/search",(req,res)=>{
    const id=parseInt(req.query.id,10);
    const name=req.query.name;
    //yha filter hi use hoga if both condition true then return multiple 
    const item=items.filter((itemm)=>(itemm.id===id || itemm.name===name));
    
    if(item){
        res.json(item);
    }
    else{
        res.status(404).json({error:"Item and Id not found"});
    }
})


3). BY THIS CODE WE CAN SORT THE ITEMS BY ID OR NAME

pp.get("/sort", (req, res) => {
    //...items do shallow copy of the array items
    let sortedItems = [...items];
    const sortBy = req.query.sortBy; // 'id' or 'name'
    const order = req.query.order;   // 'asc' or 'desc'

    if (sortBy === 'id') {
        sortedItems.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'name') {
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (order === 'desc') {
        sortedItems.reverse();
    }
    

    res.json(sortedItems);
});

TO BAS QUERY PARAMS ME SORTBY KA METHOD AND ORDER IN ASC OR DESC KE ACCORDING 
SORT HO JAYEGA



WHAT DOES LOCALCOMPARE DO
//The localeCompare() method compares two strings in the current locale. 
//The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
//The current locale is based on the language settings of the browser.


//use this http://localhost:3000/sort?sortBy=id

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}/`);
});
