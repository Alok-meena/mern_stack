import React from "react";

function Greetings(props){
    //DEKHO AGER HTML ME JS USE KARNA HAI TO {} KE ANDER HI USE KR SKTE HAI
    return <h1>HELLO {props.name}</h1>; 
}

function App(){
    return (
        <div className="App">
            <Greetings name="Alok"/>
        </div>
    );
}

export default App;

this is how to use props in react to pass a data from parent to child component 


STATE HOOK IN REACT :-----------


import React, { useState } from "react";

function Greetings(props){
    const isLoggedin=props.isLoggedin;
    return (
        <div>
          {isLoggedin ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}
        </div>
        // If isLoggedin is true, the expression after the ? is returned: <h1>Welcome Back</h1>
        // If isLoggedin is false, the expression after the : is returned: <h1>Please Log In</h1>
    );
}

//ye jo niche statehook define kiya hai vo similar hai ese:-
// const isloggedin=false;
// function setIsLoggedIn(value){
//     isloggedin=value;
// }

function App(){
    //to yha bs isloggedin variable hai and setloggedin function 
    //jo iski value ko condition ke basis pe change krega
    const [isLoggedin, setIsLoggedIn] = useState(false);//default value false dal di isme 

    //ye function call honge to isloggedin ki value change hogi
    const handleLogin= ()=>{
        setIsLoggedIn(true);
    }

    const handleLogout= ()=>{
        setIsLoggedIn(false);
    }

    return (
        //yha niche greetings me hamne function pass kiya hai
        <div className="App">
            <Greetings isLoggedin={isLoggedin}/>
      // to ager isloggedin true hai to click krte hi handlelogout yani false kr do aor 
      //vese hi name bhi change krke logout kr do button ager true hai to
            <button onClick={isLoggedin? handleLogout: handleLogin}>
                {isLoggedin ? "Logout":"Login"};
            </button>
        </div>
    );
}

export default App; 

ye jo pahle isloggedin = krke bheja to vo props ka name hai to access it by props using it's name

Variable Declaration: In the App component, isLoggedIn is a state variable managed by the useState hook.
Prop Passing: isLoggedIn={isLoggedIn} in the App component is passing the state variable isLoggedIn as a prop to the Greetings component.
The name of the prop is isLoggedIn.
Prop Receiving: In the Greetings component, you receive this prop through props and access its value using props.isLoggedIn.



very imp info about state hook and passing data as props

Strings are passed with quotes: <Greetings name="Alok" />
JavaScript expressions (variables, functions, etc.) are passed with curly braces: <Greetings isLoggedIn={isLoggedIn} />
Accessing Props:

Inside the Greetings component, you access the prop via props.isLoggedIn.
State Management:

useState is used to create a state variable (isLoggedIn) and a function to update it (setIsLoggedIn).
handleLogin and handleLogout functions update the state.




useState()

State Variable:

isLoggedIn: This is the state variable that holds the current state. Initially, it's set to the value passed to useState, which in this case is false.
State Update Function:

setIsLoggedIn: This is a function that you call to update the state variable. When you call setIsLoggedIn with a new value, React will re-render the component with the new state.
Initial State:

useState(false): The argument passed to useState is the initial state value. Here, the initial state of isLoggedIn is set to false.


another example of useState() is:---



import React, { useState } from "react";

function App(){
    //to yha bs isloggedin variable hai and setloggedin function 
    //jo iski value ko condition ke basis pe change krega
    const [message,setMessage] = useState("click the button to change message");

    const handlemessage=()=>{
        setMessage("Button Clicked");
    }

    return(
        <div className="App">
            <p>{message}</p>
            <button onClick={handlemessage}>
                Click me
            </button>
        </div>
    );
}

export default App; 


