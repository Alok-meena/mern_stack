 //so what if our data is empty and if we want to insert a lot of data then do make 
 //a separte file and send data through api's

 //TO BAS YE DATA SAVE KRNE KE LIYE USE KIYA HAI HAMNE

 const axios=require("axios");

 const users = [
    {"name": "Alice Johnson","email": "alice.johnson@example.com"},
    {"name": "Bob Smith","email": "bob.smith@example.com"},
    {"name": "Charlie Brown","email": "charlie.brown@example.com"},
    {"name": "Diana Prince","email": "diana.prince@example.com"},
    {"name": "Eve White", "email": "eve.white@example.com"},
];

const products = [
    {
        "name": "Laptop",
        "description": "High-performance laptop with SSD storage",
        "price": 1200.00
    },
    {
        "name": "Smartphone",
        "description": "Latest smartphone with advanced camera features",
        "price": 800.00
    },
    {
        "name": "Headphones",
        "description": "Noise-canceling headphones with wireless connectivity",
        "price": 150.00
    },
    {
        "name": "Monitor",
        "description": "27-inch 4K monitor with HDR support",
        "price": 500.00
    }
];




const orders = [
    {"user_id": 1,"product_id": 101,"quantity": 2},
    {"user_id": 2,"product_id": 102,"quantity": 1},
    {"user_id": 3,"product_id": 103,"quantity": 5},
    {"user_id": 1,"product_id": 104,"quantity": 3},
    {"user_id": 4,"product_id": 102,"quantity": 1},
];


const apiBase="http://localhost:3000/api";//ye path se diya to bs apni api's call krenge

const createData=async()=>{
    console.log("STARTING");
    for(const user of users){// this is a for of loop users ko access kr rhe hai
        await axios.post(`${apiBase}/users`,user);
        console.log(`user ${user.name} created`);
    }
    for(const product of products){
        await axios.post(`${apiBase}/users`,product);
        console.log(`Product ${product.name} created`);
    }
    for(const order of orders){
        await axios.post(`${apiBase}/users`,order);
        console.log(`Order for user ${order.user_id} and 
            product ${order.product_id} created`);
    };
};

createData();
