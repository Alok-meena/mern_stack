//Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
//Early Execution: Since it fires as soon as the HTML is loaded and parsed, you can start manipulating the DOM earlier than waiting for the complete load event, which waits for all resources to load.
//Using DOMContentLoaded is a best practice for running JavaScript that depends on the DOM being fully loaded and ready to be manipulated.

document.addEventListener("DOMContentLoaded",function(){
    //to ager hamne signup page khola to use pta lg jayega ki signup page khola hai aor iski id aa jayegi
    //aor baki 2 ki nhi aayegi aor if ke ander ka part run ho jayega

    const signupform=document.getElementById("signupform");
    const loginform=document.getElementById("loginform");
    const messageform=document.getElementById("messageform");
    const messagesDiv=document.getElementById("messages");
    
    //ye use kr rhe hai taki pta rhe konsa user text kr rha hai
    //and accordingly align kr ske
    let currentUser = localStorage.getItem("Username");


    if(signupform){
        //as we click submit this code will execute
        
        signupform.addEventListener("submit",async(e)=>{
            e.preventDefault();//ex submit button bnaya to page reload ho jayega to use prevent krne ke liye use kiya hai hamne
            const username=document.getElementById("username").value;//as it is in input field
            const password=document.getElementById("password").value;
            
            //here we are doing api call

            try{
                const response=await fetch("/auth/signup",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({username,password}),
                });

                if(response.status==201){
                    alert("Sign up successfully");
                    window.location.href="login.html";//redirect to that page
                }
                else{
                    const error=await response.json();
                    alert("Sign up Failed:"+error.error);
                }
            }
            catch(error){
                alert("Sign up Failed:"+error.message);
            }
        })
    }

    if(loginform){
        loginform.addEventListener("submit",async(e)=>{
            e.preventDefault();
            const username=document.getElementById("username").value;
            const password=document.getElementById("password").value;

            try{
                const response=await fetch("/auth/login",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify({username,password}),
                });

                //can also use status here baiscally means that response is correct no error
                if(response.ok){//response.ok is a property of the Response object. It indicates whether the HTTP request was successful.
                    const data=await response.json();//convert
                    //to hame data me data milega aor usme se ham token ko access krke localstorage me store kr rhe hai
                    localStorage.setItem("token",data.token);//so response me jo token milega use ham localstorage me store kr lenge
                    localStorage.setItem("Username",username);
                    currentUser=username;
                    window.location.href="chat.html";
                }
                else{
                    const error=await response.json();
                    alert("Login failed:",error);
                }
            }
            catch(e){
                alert("Login failed:",e);
            }
        })
    }

    if(messageform){
        //this is  to start socket in frontend same as b.e me ham app=express() krte hai na 
        //bas isme extra auth lga diya hai taki har user ki info alag se jaye
        const socket=io({
            auth:{
                token:localStorage.getItem("token"),
            },
        });

        //when message is received
        //socket.on means incoming message so reading it
        //so we are just adding that message inside the html

        socket.on("message",(message)=>{//name of the event is message
            //so we have to add that message in our browser we do in div

            const messageElement=document.createElement("div");
            if (message.user === currentUser) {
                messageElement.textContent = `You: ${message.text}`;
                messageElement.classList.add("message", "sent");
            } 
            else {
                messageElement.textContent = `${message.user}: ${message.text}`;
                messageElement.classList.add("message", "received");
            }
              
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });

        //chatbox message --> backend (toekn verify , user name, user text) ---> chatbox   USER TEXT MEANS WHICH USER SEND'S THIS MESSAGE
        // here sending message on submit and bhej kon rha hai uska token hmare pas uper save hai

        messageform.addEventListener("submit",(e)=>{
            e.preventDefault();
            const messageInput=document.getElementById("message");
            socket.emit("message",messageInput.value);//emit() to send a message to all the connected clients
            messageInput.value="";//means ek bar message send  kr diya to fir type box ko empty kr do 

            messagesDiv.scrollTop=messagesDiv.scrollHeight;
        })
    }

})




//preventDefault is a method provided by the Event interface in JavaScript. It's used to prevent the default behavior of an event from occurring. This method is commonly used to stop default actions associated with events, such as form submissions, link clicks, and more.

//TO BAS IS USE KRTE HAI TAKI JO DEFAULT WORK HAI USE HAM CONTROL KRE EX IF WE CLICK ON A LINK 
//THEN WE WILL DECIDE WHERE TO GO EITHER ON THE LINK OR WHERE
