const {greet}=require("./server3.js");

const {add,subtract}=require("./math.js");

// console.log(greet("Alok"));

// console.log("2,4=",add(2,4));
// console.log("2-4=",subtract(2,4));

file accessed successfully

o/p
HELLO Alok
2,4= 6
2-4= -2

//file system 
const fs=require("fs");

const data=`
${greetingMessage}
${additionResult}
${subtractionResult}
`
//first uper file system define kr diya and then write 3rd parameter of err call
//back function is totally optional 
fs.writeFile("output.txt",data,(err)=>{
    if(err) throw err;
    console.log("DATA HAS BEEN WRITTEN");
})


how to have the file in the same folder like this:---


  
const fs=require("fs");

const path=require("path");

const filepath=path.join(__dirname,"intro.txt");
console.log(filepath);

const data=`Hello guys
kese ho aap sab bhi me to bdiya hu
app sunao
`;

fs.writeFile(filepath,data,(err)=>{
    if(err) throw err;
    console.log("DATA HAS BEEN WRITTEN");
})  



and if you want to save to any other folder then u just have to give it's path
to kya karna ki jis bhi folder me save karna hai usme jake vhi jese uper kiya ki 39 se 41 
bs 41 me dirname hi print karna aor last me file name add kr dena and change slash to forward
slash bs aor starting me D: ye bhi then ho jayega





const data=`Hello guys
kese ho aap sab bhi me to bdiya hu
app sunao
`;

const d="D:/mernstack_course/nodejs/project1/intro.txt";

fs.writeFile(d,data,(err)=>{
    if(err) throw err;
    console.log("DATA HAS BEEN WRITTEN");
})  

//how to read data just use the path

to ager file khi aor hai aor current folder jha code likh rhe ho vha nhi hai to 
bs jha file hai vha jake path le aao

like this :--
  
const d="D:/mernstack_course/javascript_/output.txt";

fs.readFile(d,"utf8",(err,data)=>{
    if(err) throw err;
    console.log("DATA OF OUTPUT.TEXT FILE IS:")
    console.log(data);
})

o/w ye current folder me file hai to


const fs=require("fs");

const path=require("path");

const filepath=path.join(__dirname,"output.txt");//ye path jha hmari file hai vha se leke aana

fs.readFile(filepath,"utf8",(err,data)=>{
    if(err) throw err;
    console.log("DATA OF OUTPUT.TEXT FILE IS:")
    console.log(data);
})


utf8 type hai to encode the data in the file
