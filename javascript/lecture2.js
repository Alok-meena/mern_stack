c=20 // GLobal Variable
var d=30; // Funtion Scope   
let e = 50 // Block Scope



function fun (){
    let a =5
    if(a==5){
        let b=10; // block
        var f = 20; //funtion
        t = 30;
        console.log("Inside",b);
    }

    console.log("Outside",f); 
}

fun();
console.log("Global",t); 

square_root(10)
square_root_2(20)

// Hoisting -> 
//Takes it to top of the code if function keyword is defined first
//function declaration
function square_root(n){
    console.log("In first Function")
    return Math.sqrt(n)
}

// console.log(square_root(4))

//gives error if called before
//function Expression

var square_root_2 = function(){
    console.log("In second Function");
    return "Something";
}

// square_root(10)
// square_root_2(20)




let arr = ["Apple", "Mango","Guava"];
arr.length

for (let i = 0;i<5;i++){
console.log(arr[i]);
}
arr.push("Banana");
arr.pop()
arr.indexOf("Mango");
arr.shift()// remove from front
arr.unshift("Kiwi");




//OOPS in JS
// ALLOWS to Create Object without defining class


let bird={
    x:100,
    y:20,
    color:"Blue",
    eggs:["eggOne","eggTwo","eggThree","eggFour"],
    fly:function(){
        console.log("Bird is Flying",this.x,this.y)
    }
}

for(let i =0;i<bird.eggs.length;i++ ){
    console.log(bird.eggs[i]);
}

bird.eggs.forEach(function(val,idx){
    console.log(idx,val);
})
bird.fly();





let apple = {
    taste:"sweet",
    color:"red",

}
//another way for OOPs
function Fruit(taste,color){
    this.color=color;
    this.taste=taste;
}

//new keyword
let mango=new Fruit("Sweet","Yellow")
let orange=new Fruit("sour","orange")


//Class Keyword (EcmaScript 2015)
//class declaration
class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
}
// class expresstion
let FruitClass2 = class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }}

let Kiwi= new FruitClass("Sour","Green");
let Kiwi2= new FruitClass2("Sour","Green");




let string = 'this is nirbhay\'s string'

let newstring = `this is nirbhay's string`


//templates

let p = 'Nirbhay'

let str= `Hi i am ${p}`

let longStr='this is \
a very long\
string'

let s = 'this has some data here'
let key = 'has'

console.log(s.indexOf(key))




// c=20; // Global Scope
// var d = 30; // Funtion Scope
// let e= 40; // Block Scope
//const z= 40; // Block Scope


// console.log("C=",c);
// console.log("D=",d);
// console.log("E=",e)
// const name = "Something111"
// function fun(){ 
//     let a = 5;
//     if(a==5){ 
//         const name = "Something222"
//         let b= 10; // block
//         var f = 20; // function
//         t = 30; // global
//         console.log("INSIDE BLOCK->>>>",b,f,t, name)
//     }
//     console.log("INSIDE FUNCTOIN-->>",f,t)
// }

// fun();
// console.log("GLOBALLL",t)

// let num1 = 100;
// num1=200;

// const num2=100;
// num2=200




// var one = 10;
// function fun(){
//     var one = 20;
//     if(one ==20){
//         var one = 30;
//         console.log("Inside",one)
//     }
//     console.log("Funtion",one)
// }
// fun();
// console.log("GLOBAL",one)

// // YOU SHOULD ALWAYS USE LET AND CONST

// //Hoisting

// square_root(10);
// square_root2(10);

// // function declaration
// function square_root(number){
// let sqRoot= Math.sqrt(number);
// console.log("FUN 1",sqRoot)
// }


// // function expression
// var square_root2 = function(number){
// let sqRoot= Math.sqrt(number);
// console.log("Fun 2",sqRoot)
// }





// let a= 10 // INT
// let b = true // Bool
// let c = "a" // char
// let d = "abcd" // string
// let e = null
// let f ;


// // Array = Group of variables / group of char/string/numnber


// let fruits = ["Apple","Mango","Orange"]

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-2));


// JS allows to Create OBJ without classes

// let bird= {
//     name:"hen",
//     color:"blue",
//     eggs:["eggOne","eggTwo","eggThree","eggFour"],
//     fly:function(){
//         console.log("Bird is flying",this.name)
//     }
// }
// for(let i =0;i<bird.eggs.length;i++ ){
//     console.log(bird.eggs[i]);
// }

// bird.eggs.forEach(function(val){
//     console.log(val)
// })

//  bird.fly()

// one way to make objects
// let apple={
//     taste:"sweet",
//     color:"red",
// }


// Function
//ES6 
function fruit(taste,color){
    this.color=color
    this.taste=taste
}
// new keyword to make object
let mango = new fruit("Sweet","Yellow");

//Class declaration
class FruitClass{
    constructor(taste,color,name){
        this.color=color
        this.taste=taste  
        this.name=name
    }
}

//class expression
let fruitclass2= class{
    constructor(taste,color,name){
        this.color=color
        this.taste=taste  
        this.name=name
    }
}

let kiwi = new FruitClass("Sour","Green",'kiwi')


// Create an Employee class with properties like salary, company, name, position,....[]..{}....

// 3-4 objects



// function checkNumber(num){
//     if(num<10){
// console.log("IN IFF")
//     }
//     else if(num <20){
//         console.log("IN ELSE IF")
//     }

//     else{
// console.log("IN ELSE")
//     }
// }

// let a="10"4,
// if(a==10){
// console.log("A is 10")
// }
// else {
//     console.log("NOOO")
// }


// =
// ==
// ===

// =-> 
// let a = 10

// ==
// if(a==10) // a ki value = 10 hai...
// if(a===10)// a ki value = 10 and a ka type = INT / 10 ka type
