setTimeout(() => {
    console.log("hello world");
}, 1000);//it will print the body after some delay

//it will perform the functions inside body after fixed intervals infinitely
setInterval(() => {
    console.log("padhai karo");
}, 2000);



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

fakeDownloadPromise().then(function(data){
    console.log("The data that we downloaded is")
        console.log(data)
    
}).catch(function(err){
    console.log(err)
})

let downloaded = fakeDownloadPromise();
downloaded.catch(function(err){
    console.log(err)
})

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

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

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
// let arr2=[...arr1];  it is a spread operator just use the brackets and ...arr1 will copy everything from arr1 to arr2
//let arr2=arr1.slice();
let arr2=arr1;
arr2[2][0] = 10;

console.log(arr1); // [1, 2, [10, 4]] (original array is affected)
console.log(arr2); // [1, 2, [10, 4]]

// Deep copy of an array with nested array
let arr3 = [1, 2, [3, 4]];
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


// to ye dono ke print hone me 1 sec ka time lag rha hai to vo indono function me ghumta rahega pahle alok print hua
//then alok phir 1 s bad print hoga isi beech aman print ho jayega because js kisi ke liye rukta nhi hai

//isme pahle alok 10 bar print hoga aor ye hone ke bad hi aman print hoga
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

async function task2(){//yha async means isme jo code hai vo time lene vala code hai
    await helloSayer(5,"Alok");//await add kiya means iss line ko complete krke hi next line me jayega 
    await helloSayer(5,"Aman");
}

task2();

//and this will print concurrently
function task2(){
    helloSayer(5,"Alok");
    helloSayer(5,"Aman");
}

task2();



//using promise.all()

// The js Promise. all method is used to wait for all promises to resolve, and then the values are logged. If 
async function task2(){
    await Promise.all([helloSayer(3,"nirbhay")
     ,helloSayer(3,"Ayush")
    , helloSayer(3,"Riya")])
console.log("BATCH ONE DONE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    await Promise.all([helloSayer(3,"nirbhay")
    ,helloSayer(3,"Ayush")
   , helloSayer(3,"Riya")])
}

task2()








