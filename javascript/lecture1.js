let a=10;
console.log(++a);
console.log(a++);
console.log(--a);
console.log(a--);
console.log(a);
console.log(a--);//yha tk value to 10 thi but pahle value 10 print hui hai aor phir 9 ho gyi
//decrement hoke aor niche print hui hai
console.log(a);


let a="alok";
a=parseInt(a);
console.log(typeof(a));

//parseInt() is used to convert the datatype of the variable 

//switch case
let a=10;
switch(a){
    case 1:
        console.log("no it's 1");
        break;//use karna nhi to case match ke bad sare case run ho jayenge
    case 10:
        console.log("correct");
        break;
    case 2:
        console.log("incorrect");
        break;
  default:
    console.log("default case");
}

//for in loop is used to iterate objects and for of loop is never used for objects as it is not iterable
let marks={
    harry:90,
    shubham:55,
    raj:60
}

for(i in marks){
    console.log("The marks of ",i,"is:",marks[i]);
}

//code to enter a number until we enter correct number
let n=44;
let i;
while(i!=n){
    alert("try again");

    i=prompt("enter the number");
}
console.log("you have entered correct number");

//continue harry

//ternary operator
let a=10;
a==10?console.log("yes it is",a):console.log("no it is not");
console.log("YOU can",(a<18?"not drive":"drive"));


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Loop Example</title>
  </head>
  <body>
    <h1>Check the Console for Loop Output</h1>

    <script>
      // JavaScript loop to log numbers from 1 to 10
      for (let i = 1; i <= 10; i++) {
        console.log(i);
      }
    </script>
  </body>
</html>


// var, let, and const
var globalVar = "I am a global variable (function-scoped)";
let blockVar = "I am a block-scoped variable";
const constantVar = "I am a constant variable (block-scoped)";

// You can reassign var and let
globalVar = "New value for globalVar";
blockVar = "New value for blockVar";

// You cannot reassign const
// constantVar = "New value for constantVar"; // This will cause an error

// Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];

// Strings
let greeting = "Hello, world!";
let name = "Alice";

// Integers
let a = 10;
let b = 20;

// Functions to add and subtract
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

console.log("Addition: " + add(a, b)); // 30
console.log("Subtraction: " + subtract(a, b)); // -10

// Different types of loops

//forEach loop
let arr=[1,"alok",2,"aman"];
let obj1={
    "name":"alok",
    "age":20,
    "country":"INDIA"
}
arr.forEach(function(i){
    console.log(i);
})

//can use like this also
arr.forEach(i=>(
    console.log(i)
));

//toUpperCase() function is used to conver the string to upper case
let arr=["dear","alok","and","aman"];
let obj1={
    "name":"alok",
    "age":20,
    "country":"INDIA"
}
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i].toUpperCase();
    console.log(arr[i]);
}


// For loop
console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// While loop
console.log("While loop:");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// Do-while loop
console.log("Do-while loop:");
i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);

// For-of loop (for iterating over arrays)
console.log("For-of loop:");
for (let number of numbers) {
    console.log(number);
}

// For-in loop (for iterating over object properties)
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log("For-in loop:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}





// Sample data for loops
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// For loop
console.log("For loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// ForEach loop
console.log("ForEach loop:");
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});

// For...in loop (used for objects)
console.log("For...in loop:");
for (let key in person) {
        console.log(key + ": " + person[key]);
}

// For...of loop (used for iterables like arrays)
console.log("For...of loop:");
for (let number of numbers) {
    console.log(number);
}

// While loop
console.log("While loop:");
let i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

// Do...while loop
console.log("Do...while loop:");
i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i < numbers.length);

// Break statement
console.log("Break statement:");
for (let i = 0; i < numbers.length; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    console.log(numbers[i]);
}

// Continue statement
console.log("Continue statement:");
for (let i = 0; i < numbers.length; i++) {
    if (i === 3) {
        continue; // Skip the rest of the loop when i is 3
    }
    console.log(numbers[i]);
}

// Nested loops
console.log("Nested loops:");
for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        console.log(fruits[i] + " " + numbers[j]);
    }
}



// Example: Using map to create a new array with each element doubled
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


// Example: Using filter to create a new array with only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Example: Using reduce to calculate the sum of the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


// Example: Using forEach to log each element to the console
numbers.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3
// 4
// 5

// Example: Using every to check if all numbers in the array are positive
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// Example: Using sort to sort the array in ascending order
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 1, 2, 3, 4, 5, 9]

// Example: Using slice to create a subarray
const subArray = numbers.slice(1, 4);
console.log(subArray); // Output: [2, 3, 4]

// Example: Using splice to remove elements and insert new ones
const splicedArray = numbers.slice(); // Create a copy of the array
splicedArray.splice(2, 1, 10, 20); // Remove 1 element at index 2 and insert 10 and 20
console.log(splicedArray); // Output: [1, 2, 10, 20, 4, 5]

// Normal Function Declaration
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5

// Normal Function Expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // Output: 6


// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};

console.log(addArrow(2, 3)); // Output: 5

// Arrow Function with Implicit Return (single expression)
const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(2, 3)); // Output: 6




// Creating different types of JSON objects

// Simple JSON object
let simpleObject = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

// JSON object with an array
let arrayObject = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "hiking", "coding"]
};

// JSON object with nested objects
let nestedObject = {
    name: "Charlie",
    age: 35,
    address: {
        street: "123 Main St",
        city: "Metropolis",
        zip: "12345"
    }
};

// JSON object with mixed types
let mixedObject = {
    name: "Dana",
    age: 40,
    married: true,
    children: null,
    pets: [
        {
            type: "dog",
            name: "Rex"
        },
        {
            type: "cat",
            name: "Whiskers"
        }
    ]
};

// JSON operations

// Converting JSON object to string
let jsonString = JSON.stringify(simpleObject);
console.log("JSON String:", jsonString);

// Converting JSON string back to object
let jsonObject = JSON.parse(jsonString);
console.log("JSON Object:", jsonObject);

// Accessing values in a JSON object
console.log("Name:", simpleObject.name); // Alice
console.log("Age:", simpleObject.age); // 25
console.log("City:", simpleObject.city); // Wonderland

// Modifying values in a JSON object
simpleObject.age = 26;
console.log("Updated Age:", simpleObject.age); // 26

// Adding new properties to a JSON object
simpleObject.country = "Wonderlandia";
console.log("Updated JSON Object:", simpleObject);

// Deleting properties from a JSON object
delete simpleObject.city;
console.log("JSON Object after deletion:", simpleObject);

// Iterating over a JSON object
for (let key in simpleObject) {
    if (simpleObject.hasOwnProperty(key)) {
        console.log(key + ": " + simpleObject[key]);
    }
}

// Working with nested JSON objects
console.log("Street:", nestedObject.address.street); // 123 Main St
console.log("City:", nestedObject.address.city); // Metropolis

// Iterating over nested JSON objects
for (let key in nestedObject.address) {
    if (nestedObject.address.hasOwnProperty(key)) {
        console.log(key + ": " + nestedObject.address[key]);
    }
}

// Working with arrays in JSON objects
arrayObject.hobbies.forEach(hobby => {
    console.log("Hobby:", hobby);
});

// Accessing nested arrays and objects in JSON
mixedObject.pets.forEach(pet => {
    console.log("Pet Type:", pet.type);
    console.log("Pet Name:", pet.name);
});


// Normal Function
function greet(name) {
    return "Hello, " + name + "!";
}

// Arrow Function
const greetArrow = (name) => {
    return "Hello, " + name + "!";
}

// Arrow Function with implicit return
const greetArrowShort = (name) => "Hello, " + name + "!";

// Example Functions with Different Return Types

// Function returning a string
function getString() {
    return "This is a string";
}

// Function returning a number
function getNumber() {
    return 42;
}

// Function returning a boolean
function getBoolean() {
    return true;
}

// Function returning an array
function getArray() {
    return [1, 2, 3, 4, 5];
}

// Function returning an object
function getObject() {
    return { key: "value" };
}

// Normal and Arrow Function Example
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Function with no return value (void function)
function logMessage(message) {
    console.log(message);
}

// Arrow function with no return value
const logMessageArrow = (message) => {
    console.log(message);
}

// Testing the functions
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greetArrow("Bob")); // "Hello, Bob!"
console.log(greetArrowShort("Charlie")); // "Hello, Charlie!"

console.log(getString()); // "This is a string"
console.log(getNumber()); // 42
console.log(getBoolean()); // true
console.log(getArray()); // [1, 2, 3, 4, 5]
console.log(getObject()); // { key: "value" }

console.log(add(5, 3)); // 8
console.log(addArrow(5, 3)); // 8

logMessage("This is a normal function log"); // Logs to console
logMessageArrow("This is an arrow function log"); // Logs to console
