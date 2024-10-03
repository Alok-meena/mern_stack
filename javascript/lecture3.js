STRINGS IN JS---------

let string = 'this is nirbhay\'s string'

let newstring = `this is nirbhay's string`


//templates

let p = 'Nirbhay'

let str= `Hi i am ${p}`

//to \ (backslash) ham single and double quotes dono me use kr skte hai so that our text will be printed in the same
// line but ham jo type krenge vo apni screen me hi rhega okk

//and use backtick when we want to print the text in next line also here no need of slash
//just do press enter okk
let longStr='this is \
a very long\
string'

let s = 'this has some data here'
let key = 'has'
console.log(s.length)
console.log(s.indexOf(key))
console.log(s.indexOf('is'))
console.log(s.indexOf('is',3))


STRINGS ARE IMMUATABLE means cant be changed 
but array are mutable like shift unshfit push pop splice slice sort etc will return 
a new modified array okk vvvvvvvvvviiiiiiiiiiimmmmmmmmmmppppppppp


how to check no. of words in the string:--

let a=" hi guys welcome";
// console.log(a);
// console.log(a.trim());
// console.log(a);
console.log(a.trim().split(" ").length); //trim will remove the space from starting and ending
//and split will split the string into individual array elements after space 
// we did trim here itself as trim returns a new modified string because strings are immutable 
//so we did both here to calculate the lenght of the string okk

another thing

let a=" hi guys welcome";

console.log(a.trim().split("e"));

Output:

[ 'hi guys w', 'lcom', '' ]






let mainStr="this is a long string"

let smallStr=mainStr.slice(2,6);
let smallStr2=mainStr.slice(-6,-4);

console.log(smallStr);




let arr=[1,2,3]

console.log(arr[1]);

let arr2=[1,"hello",false]
console.log(typeof arr2[2])


for(let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}

for(let val of arr2){
    console.log(val);
}

for(let index in arr2){
    console.log(index)
    console.log(arr2[index])
}

//push , pop // shift //unshift // splice


let omit = arr2.splice(2,1);
arr2.splice(0,3,"hi","ho","ha");

let arr3= arr2.concat("yoooo","hii") 




//higher order funtion that takes or returns function

function outer(arg1){
    let var1=10;
    function inner(arg2){
        let var2=20;
        console.log(arg1,var1,arg2,var2)
    }
    return inner;

}

let x = outer("param1");

//tpye of x= function
// x = innter

// works as let x vali then x call hui then console vali inside inner function line

x('param2');


///// A closure is a function having access to the parent scope, even after the parent function has closed

//all scopes that were present at birth of innerfuntion, it will be accessible till its death.

// infinitely nestable

// if same variable in inner and outser scope, inner will print

//arguments keyword only contain of the function





HIGHER ORDER FUNCTION -------------

//higher order funtion that takes or returns function

function outer(arg1){
    let var1=10;
    function inner(arg2){
    let var2=20;
console.log(arg1,var1,arg2,var2)
    }
    return inner;

}

let x = outer("param1");
x("param2");

//tpye of x= function
// x = innter

// works as line 119, line 120, line 111

x('param2');


///// A closure is a function having access to the parent scope, even after the parent function has closed

//all scopes that were present at birth of innerfuntion, it will be accessible till its death.

// infinitely nestable

// if same variable in inner and outser scope, inner will print

//arguments keyword only contain of the function





//this keyword

// if function is directly called, global scope, points window

//to apne this keyword koo jha pe bhi call kroge vha ye point krega normally window me call kiya
//to window ko point krta hai o/w object me kiya to object ko krta hai point

function checkThis(){
    console.log(this)//to vs code me use kiya to window me function ko call kiya hoga to
   // window ko hi point krega jha ise run kiya
}

//checkThis()// window

let obj={//only in this case it will point to the object not the window
    1:1,
    2:2,
    fun:function(){
        console.log(this)
    }
}

//if z= obj.fun then again window then it will point to the object itself




let str = "ASASDS"
let num = 123
let bool = true
let arr = [23,32,33,45,55]
let obj = {a:"hello"}
let fun = ()=>{
    let x = 10;
}

// never use proto in code

// let x = "10" it is 3 level above null because 3 bar proto use krne ke bad NULL aya hai apna
// undefined
// x.__pr
// undefined
// x.__proto__
// String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
// x.__proto__.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// x.__proto__.__proto__.__proto__


// let obj2 = {a:"hello"}
// undefined
// obj2.__proto__
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// obj2.__proto__.__proto__
// null

// Everything is OBJ in JS


//Object.prototype

//String.protptype inherits from Object .protptype, Array.prototype

//All JavaScript objects inherit properties and methods from a prototype.

console.log(String.prototype.__proto__ === Object.prototype);  // true
console.log(Number.prototype.__proto__ === Object.prototype);  // true
console.log(Array.prototype.__proto__ === Object.prototype);   // true



let obj1={
    firstname:"alok",
    age:20
}

let obj2={
    lastname:"meena",
    profession:"student"
}

obj1.__proto__=obj2; //khuch nhi ab dono ka prototype means jha se function inherit kiye hai 
//use hamne same kr diya /equal to ab ham obj1 se bhi lastname ko access kr skte hai 
//obj1.lastname okk pahle nhi kr skte the but now we can
