// const { response } = require("express");

//to jab page ka content load ho jaye tab
document.addEventListener("DOMContentLoaded",()=>{
    checkLogin();
    fetch("/api/books").then((response)=>response.json())
    .then((books)=>{
        const booksDiv=document.getElementById("books");
        booksDiv.innerHTML="";
        books.forEach((book)=>{
            const bookDiv=document.createElement("div");
            bookDiv.className="book";
            bookDiv.innerHTML=`
                <img src="${book.imageUrl}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
                <p>$${book.price}</p>
                <button onclick="orderBook('${book._id}',${book.price})">Order</button>
            `;//aor jaise hi orderbook button press kiya to orderbook function call ho jayega
        booksDiv.appendChild(bookDiv);
        });
    });
});


function checkLogin(){
    const token=localStorage.getItem("token");
    if(token){
        //to ager token hai to only logout button show kro 
        document.getElementById("login-btn").style.display="none";
        document.getElementById("signup-btn").style.display="none";
        document.getElementById("logout-btn").style.display="inline-block";
    }
    else{
        //and ager token nhi hai to login and signup button show kro bas
        document.getElementById("login-btn").style.display="inline-block";
        document.getElementById("signup-btn").style.display="inline-block";
        document.getElementById("logout-btn").style.display="none";
    }
}

//if logout if pressed then delete the token and reload the home page

document.getElementById("logout-btn").addEventListener("click",()=>{
    localStorage.removeItem("token");
    //after removing the token calling this function to reload the buttons accordingly
    checkLogin();
    alert("Logged Out Sucessfully");
    window.location.href="/";
})

//taki jaise hi book orde ho so to place order ye function call ho jaye
function orderBook(bookId,price){
    //first of all check if token exist means the user is logged in
    const token=localStorage.getItem("token");
    if(!token){
        alert("Please Login To Order...");
        return ;
    }
    fetch("/api/orders",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            books:[{book:bookId,quantity:1}],
            total:price,
        }),
    })
    .then((response)=>response.json())
    .then((order)=>{
        if(order.error){
            alert(`Error:${order.error}`);
        }
        else{
            alert("Book ORDERED!");
        }
    })
    .catch((error)=>{
        console.log("Error:",error);
    });    
}
