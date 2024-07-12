HW for tomorrow -
You guys already know how to write APIs and you also know how to write something in a file and read from a file.

You have to create 2 apis, one that will store ( post) book information (name, id , author etc) in 
a json file / txt file and other api will read / search( get) from the file.

It’s the same as we did before with arrays , now we need to store and read from file .

Additional  - create one more api to edit the content of the file( like edit title or author)



//so data will be added only after you call the post api and printed after calling get api


Synchronous (fs.writeFileSync)
Blocking: The function blocks the event loop until the file operation is complete. This means that no other code will run until the file is fully written.
Simpler Error Handling: Since it uses try-catch for error handling, the code can be simpler in certain contexts.
Use Case: Suitable for scripts or operations where blocking is acceptable or even desired, such as initialization scripts, small command-line tools, 
or scenarios where file operations must complete before proceeding.


fs.writeFileSync ye bhi use kr skte the ye try and catch bhi use karta hai as our NODE JS IS ASYNCHRONOUS

sync means other code ko block kr degi until present code finishes and 

HMARI NODE JS ASYN HAI  so it will not block any other code



const express=require("express");
const app=express();
const port=3000;

app.use(express.json());
const fs=require("fs");

const path=require("path");
const filepath=path.join(__dirname,"hi.json");



let book=[];
let idcounter=1;

//to yha pahle hi file read krke data dave krva liya hai hamne
fs.readFile(filepath, "utf8", (err, data) => {
    if (!err) {
        try {
            book = JSON.parse(data);
            //The use of JSON.parse(data) after reading from a JSON file like hi.json is necessary to convert the string representation of JSON
            //data into a JavaScript object. Here’s why this step is important in the context of your application:

            
            // Initialize book array with existing data
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
});


app.post("/add",(req,res)=>{ 
    const newbook={
        id:idcounter++,
        name:req.body.name,
        phone:req.body.phone
    }
    book.push(newbook);
    fs.writeFile(filepath,JSON.stringify(book,null,2),(err)=>{//converting object into a json string
        if(err) throw err;
        console.log("data has been written");
    })
    res.json(newbook);
})

app.get("/read",(req,res)=>{
    fs.readFile(filepath,"utf8",(err,data)=>{
        console.log("data of json file is:");
        // book = JSON.parse(data); yha nhi kiya because book me file ka data tabhi save hoga if pahle get kiya if post kiya to nhi hoga 
        console.log(data);
        res.send(data);
    })
    
})

app.listen(port,()=>{
    console.log("SERVER RUNNING AT http://localhost:3000");
})


When you write data to a file using Node.js, whether it's JSON or any other format, you still need to convert your data to
a string format because files store data in byte streams, which are inherently strings at the lowest level

THIS IS WHY DATA IS CONVERTED INTO STRING FORAMT as files work in stream bytes and lowest level data is string so convert 



Null (null): When you pass null as the second parameter (replacer) to JSON.stringify(),
you're indicating that no transformation of the object properties is needed. This means all properties of
the object will be included in the resulting JSON string as-is, without any filtering or transformation.

SPACE FROM THE LEFT HAND SIDE

2 (Number): When you pass 2 as the third parameter (space) to JSON.stringify(), you're specifying that you want the output JSON 
string to be formatted with indentation of 2 spaces. This helps improve the readability of the JSON string by adding whitespace characters
(spaces and line breaks) between elements and nested objects.













