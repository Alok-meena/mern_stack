//to dekho yha bhi function ko as a argument pass krte hai but difference is that
//yha pe us callback function ko after sometime execute krte hai 
example

function fetchData(callback) {
    //to dekho ye call back function hai settimeout apna function hai inbuilt
    //and usme hamen arrow function use kiya ()=> can also use function(){} okk
    setTimeout(() => {
        console.log("Data fetched");
        callback();  // The callback is executed here
    }, 1000);
}

function processData() {
    console.log("Processing data");
}

fetchData(processData);
// Output after 1 second:
// "Data fetched"
// "Processing data"



setTimeout(() => {
    console.log("hello world");
}, 1000);//it will print the body after some delay

//it will perform the functions inside body after fixed intervals infinitely
setInterval(() => {
    console.log("padhai karo");
    
}, 2000);

how to stop ??

    let count=0;
let x=setInterval(() => {
    console.log("hello guys");
    if(count==4){
        stop();
    }
    count++;
},1000);

function stop(){
    clearInterval(x);
}



PROMISES:--


function fakeDownload(done){ 
    setTimeout(function(){ //callbackk
        let downloadedData = "something"
        done(downloadedData)
    },1000)
}

fakeDownload(function(data){ //callback
    console.log("we have downloaded a file");
    console.log(data)
}) 

this concept is used in promise


this is sir code

function fakeDownloadPromise(){
    let correct = true
    return new Promise(function (resolve,reject){//reoslve means success and use then and reject means fails and use catch to tell the error
        //to hmari jo promise hoti hai vo khuch time leti hai kisi work ko perform krne ke liye 
        //that's why we used settimeout here
        setTimeout(function(){
            let downloadedData = "Something"
            if(correct){
            resolve(downloadedData)
            }
            else{
                reject(new Error("GOT AN ERROR"))
            }
        },1000)
    })
}

const data=fakedownloadPromise();
console.log(data);

//output
ye isliye aaya h because hamne new Promise return ki hai okk
// Promise { <pending> }
//means abhi pta nhi lga ki promise success hui hai ya fail to get to know it do as follows:


//to pahle hota tha then catch ab hota hai try catch okkk
//exmaple ye dekho pahle then catch and ab async await ke sath try catch use hota hai

//example


// Old pattern (Promise with then-catch):
// javascript
// Copy code
// fetch('api/data')
//   .then(response => response.json())
//   .then(data => {
//     // Handle data
//   })
//   .catch(error => {
//     // Handle error
//   });


// Modern pattern (Async/Await with try-catch):
// javascript
// Copy code
// try {
//   const response = await fetch('api/data');
//   const data = await response.json();
//   // Handle data
// } catch (error) {
//   // Handle error
// }
// The try-catch approach is now more widely used with async/await because it's cleaner and easier to follow, especially when dealing with complex logic.












fakeDownloadPromise().then(function(data){
    console.log("The data that we downloaded is")
        console.log(data)
    
}).catch(function(err){
    console.log(err)
})

//or can write it as like this also

let downloaded=fakedownloadPromise();
downloaded.then(function(data){
    console.log("data is downloaded");
    console.log(data);
}).catch(function(err){
    console.log("data is not downloaded");
    console.log(err);
})

//can also use arrow function like
downloaded.catch((err)=>{
    console.log(err);
});

setTimeout(function()
{
    downloaded.then(function (data){
    console.log("DATA DOWNLOADED IS")
    console.log(data)
})
},3000)


let correct=true;

//this function returns a promise that whether it fails or pass
function fakedownloadpromise(){
    return new Promise(function(resolve,reject){//new keyword is used to return the promise
        setTimeout(() => {
            if(correct){
                resolve("SUCCESS");
             }
            else{
                reject(new Error("GOT AN ERROR"));//here new Error is used to return an error
            }
        }, 1000);
    })
}

//we can do this to check the promise
let data=console.log(fakedownloadpromise());
console.log(data);

//this is used to check the case when the promise success or fails
fakedownloadpromise().then(function(data){
    console.log("DATA IS DOWNLOADING");
    console.log(data);
}).catch(function(err){
    console.log(err);
});


//can do like this also in this function is used and in below one arrow function is used
let downloaded=fakedownloadpromise();
downloaded.then(function(data){console.log(data)});
downloaded.catch(function(err){console.log(err)});


let downloaded=fakedownloadpromise();
downloaded.then((data)=>console.log(data));
downloaded.catch((err)=>console.log(err));

this is mine code



IIFE:--
//IIFE Immediately Invoked Function Expression

THIS IS A NORMAL FUNCTION
function sayHello(){
console.log("Hello")
}

sayHello();

THIS IS IIFE

(function (){
    console.log("Hello 2")
})();

(function (){
    let a = 10;
    let b = 20;
    console.log(a+b);
})();

//can pass arguments like this also or like below to below also

(function(a,b,c,d){
    console.log(a,b,c,d);
})(1,2,3,4);


(function(a,b,c,d){
    a("hello",b(4,1));
    a("There",c(1,44));
    a("HII",d(3,2));
})(console.log,Math.min,Math.max,Math.pow);

//can be used as arrow function also
((a,b,c,d)=>{
    console.log(a,b,c,d);
})(1,2,3,4);

o/p:-
hello 1
There 44
HII 9


//here a == console.log and a() ==console.log() and similarly other functions are used okkk


call by calue and call by reference:-
  
let winner = "Nirbhay";
function changeWinner(val) {
  val = "Raj";
}
console.log("The winner is", winner);
changeWinner(winner); // pass by value is JS
console.log("Now The winner is", winner);

let winners = ["Nirbhay1", "Nirbhay2", "Nirbhay3"];
function changeWinner2(val) {
  winners[0] = "123";
  winners[1] = "123";
  winners[2] = "123";
}
console.log("The winner is", winners);
changeWinner2(winner); // pass by Reference
console.log("Now The winner is", winners);

//JS always passes by value but in case of object or array ie not primitive, 
//array name points to x, x is refernce to array, value itself is reference in array or Object


//JSON.parse(json) it will convert the object which is string into a object 


I GOT TO KNEW VERY IMP THING WE KNOW THAT JS OBJECT IS ALSO CALLED JSON FORMAT BUT THERE IS A LITTLE DIFFERENCE ALSO LOOK AT THIS



// JavaScript Object Keys
// In JavaScript, object keys can be defined in two ways:
// With Double Quotes:
// You can use double quotes around the keys.
// javascript
// Copy code
// let obj = {
//     "name": "alok",
//     "branch": "cse"
// };
// Without Quotes:
// You can omit the quotes if the key is a valid identifier (i.e., it starts with a letter, underscore _, or dollar sign $, and contains only letters, numbers, underscores, or dollar signs).
// javascript
// Copy code
// let obj = {
//     name: "alok",
//     branch: "cse"
// };
// JSON Object Keys
// In JSON (JavaScript Object Notation), all keys must be enclosed in double quotes. JSON is a strict subset of JavaScript, so it requires double quotes around keys and string values.
// json
// Copy code
// {
//     "name": "alok",
//     "branch": "cse"
// }
// Summary
// JavaScript: Object keys can be in quotes (single or double) or omitted if they are valid identifiers.
// JSON: All keys must be in double quotes.
// So, while it's not necessary to use double quotes for object keys in JavaScript (as long as they are valid identifiers), it is strictly required in JSON.

also another difference


// but what i knew is that js object and json format are same
// ChatGPT said:
// ChatGPT
// JavaScript objects and JSON (JavaScript Object Notation) are closely related but have key differences. Here’s a clarification to help you understand their similarities and distinctions:

// Similarities
// Basic Structure:

// Both JavaScript objects and JSON use a key-value pair structure.
// For example:
// JavaScript Object:
// javascript
// Copy code
// let obj = {
//     name: "alok",
//     branch: "cse"
// };
// JSON:
// json
// Copy code
// {
//     "name": "alok",
//     "branch": "cse"
// }
// Data Representation:

// Both can represent complex data structures like arrays, nested objects, etc.
// Key Differences
// Syntax:

// JavaScript Object:
// Keys can be unquoted (if valid identifiers) or quoted (single or double quotes).
// Values can be functions, undefined, or any valid JavaScript data type.
// JSON:
// Keys must be double-quoted.
// Values must be valid JSON data types, which include strings (in double quotes), numbers, objects, arrays, true, false, or null. Functions and undefined are not valid in JSON.
// Example:

// javascript
// Copy code
// // Valid JavaScript Object
// let obj = {
//     name: "alok",   // valid without quotes
//     age: undefined, // valid in JS
//     greet: function() { return "Hello"; } // valid in JS
// };

// // Invalid JSON
// let jsonString = `{
//     "name": "alok",
//     "age": undefined,  // invalid in JSON
//     "greet": function() { return "Hello"; } // invalid in JSON
// }`;
// Usage:

// JavaScript Objects:
// Used within JavaScript programs to store and manipulate data.
// JSON:
// Used primarily for data interchange between a server and a web application. JSON is often used in APIs to send and receive structured data.
// Data Types:

// JSON does not support all data types that JavaScript does. For instance, you cannot have functions, undefined, or symbols in JSON.
// Conclusion
// While JavaScript objects and JSON share a similar syntax, they are not the same. JSON is a strict text format used for data exchange, while JavaScript objects are more flexible and can include a wider range of data types and structures. Understanding these differences is essential for effectively working with both in web development and data interchange.















const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true

//and JSON.stringify() will convert the object into a string by adding quotes
const json={'result':true,'count':45};
console.log(json);
const obj=JSON.stringify(json);
console.log(obj);


//deep copy
let x = 10;
let y = x; // This is a copy by value

console.log(x); // 10
console.log(y); // 10

y = 20;

console.log(x); // 10 (x remains unchanged)
console.log(y); // 20


// Shallow copy of an array with nested array
let arr1 = [1, 2, [3, 4]];//[3,4] is nested array , array inside an array

Three ways to copy an array into another array
//ye dono apna shallow copy krte hai okkkkkkkk
// let arr2=[...arr1];  it is a spread operator just use the brackets and ...arr1 will copy everything from arr1 to arr2
//let arr2=arr1.slice(); ager slice() me khuch nhi dete hai to ye pura array return kr deta hai
let arr2=arr1;
arr2[2][0] = 10;

//to yha pe original array ko affect hua because nested array me change kiya jo ki non primitive hai and by reference / shallow copy hai
//ager normal krte like arr2[2]=10 then change nhi hota as ye apna primitive value hai 
//so to avoid this change make deep copy not shallow by following method

console.log(arr1); // [1, 2, [10, 4]] (original array is affected)
console.log(arr2); // [1, 2, [10, 4]]

// Deep copy of an array with nested array
let arr3 = [1, 2, [3, 4]];
//becuase jab string me convert kiya to vo primitive type me convert ho gya that's why deep copy hui

//ab yha pe ek nya array create hua hai arr3 ka reference nhi rhega yha pe abb okk
let arr4 = JSON.parse(JSON.stringify(arr3));

arr4[2][0] = 10;

console.log(arr3); // [1, 2, [3, 4]] (original array is not affected)
console.log(arr4); // [1, 2, [10, 4]]



same thing with object

// Shallow copy of an object with nested object
let obj1={a:1,b:{c:2}};
// let obj2=obj1;
let obj2={...obj1};
obj2.b.c=10;

console.log(obj1); // { a: 1, b: { c: 10 } } (original object is affected)
console.log(obj2); // { a: 1, b: { c: 10 } }


// Deep copy of an object with nested object
let obj3 = { a: 1, b: { c: 2 } };
let obj4 = JSON.parse(JSON.stringify(obj3));

obj4.b.c = 10;

console.log(obj3); // { a: 1, b: { c: 2 } } (original object is not affected)
console.log(obj4); // { a: 1, b: { c: 10 } }




// https://www.jsv9000.app/

//call stack

//In JavaScript, the call stack is like a to-do list for functions in your program.
//It follows the rule of "Last In, First Out," meaning the last thing added is the first to be done.
//A call stack is like a script's roadmap for a JavaScript Engine

function tenth() { }

function ninth() { tenth() }

function eigth() { ninth() }

function seventh() { eigth() }

function sixth() { seventh() }

function fifth() { sixth() }

function fourth() { fifth() }

function third() { fourth() }

function second() { third() }

function first() { second() }

first();



function sayhello(){
    console.log("hello world");
}

setTimeout(sayhello,1000);
setTimeout(sayhello,3000);



function helloSayer(tillcount,name){
    return new Promise((resolve,reject)=>{
        let count=0;
        let loopid=setInterval(()=>{
            count++;
            console.log("HELLO",name);
            if(count==tillcount){
                clearInterval(loopid);
                resolve();
            }
        },100);
    });
}
//isme to ek sath print ho rhe hai
helloSayer(10,"Alok");
helloSayer(20,"Aman");

//to jaise hi alok print hua then agle alok ke liye 1s ka gap aayega to us 1s ke gap me
//apna aman print ho gya as next function call ho gya okk

output
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Alok
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman
HELLO Aman



// to ye dono ke print hone me 1 sec ka time lag rha hai to vo indono function me ghumta rahega pahle alok print hua
//then alok phir 1 s bad print hoga isi beech aman print ho jayega because js kisi ke liye rukta nhi hai

//isme pahle alok 10 bar print hoga aor ye hone ke bad hi aman print hoga

//to .then() means jab apni promise resolve() hogi tabhi aaage bdo nhi to pahle promise ke 
//resolve hone ka wait kro that's why if we dont give resolve() then aman will not be printed
helloSayer(10,"Alok").then(()=>{
    helloSayer(5,"Aman");
})

//this is callback hell waiting for one another
helloSayer(10,"Alok").then(()=>{
    helloSayer(5,"Aman").then(()=>{
        helloSayer(4,"Nishant").then(()=>{
            helloSayer(3,"Kalya");
        })
    })
})

//can do like tis also in arrow function we don't require brackets

helloSayer(3, "nirbhay")
  .then(() => helloSayer(4, "raj"))
  .then(() => helloSayer(5, "Priya"))
  .then(() => helloSayer(5, "Garima"));
     .
     .
     .
this below will do the same thing done by this upper then it waits but it does it in a neater way

is uper vale ka hi neat version ye async await hai 

    HAM ALWAYS .THEN KI JAGAH PE ASYNC AWAIT USE KRTE HAI OKKK
means ki then ki tarah hi pahle ye hoga fir hi aage jana okk async operation

async function task2(){//yha async means isme jo code hai vo time lene vala code hai
    //to phale alok then aman 5 bar print hoga okk
    //to then ki jagah ye use krte hai ham kya await ki ye hoga tabhi aage jana nhi to wait krna
    //and to use await use async at the start
    await helloSayer(5,"Alok");//await add kiya means iss line ko complete krke hi next line me jayega  same as then okk
    await helloSayer(5,"Aman");
}

task2();

//and this will print concurrently means dono ko ek sath
function task2(){
    helloSayer(5,"Alok");
    helloSayer(5,"Aman");
}

task2();



//using promise.all()

// The js Promise. all method is used to wait for all promises to resolve, and then the values are logged. If 
async function task2(){
    //to primise.all sabhi ko concurrently work krvayega and ager bich me break hua to fir koi bhi run nhi hoga okkk
    await Promise.all([
      helloSayer(3,"nirbhay")
     ,helloSayer(3,"Ayush")
    , helloSayer(3,"Riya")])
console.log("BATCH ONE DONE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    await Promise.all([helloSayer(3,"nirbhay")
    ,helloSayer(3,"Ayush")
   , helloSayer(3,"Riya")])
}

task2()

but if we do like this then sbse pahle apna batch one done print hoga as every statement is taking
some time so after that everything will be printed concurrently as await is not added there

async function task(){
    Promise.all([sayhello(5,"Alok"),sayhello(5,"Aman")]);
    console.log("batch 1 done ............");
    Promise.all([sayhello(5,"ajay"),sayhello(5,"karan")])
}

















