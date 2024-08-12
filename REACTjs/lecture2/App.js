import React from "react";

function Greetings(props){
    //DEKHO AGER HTML ME JS USE KARNA HAI TO {} KE ANDER HI USE KR SKTE HAI
    return <h1>HELLO {props.name}</h1>; 
    //to props ek jsx fun hai to {} me likha hai isko
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

2). how to send data from child to parent , just pass a callback function from child to parent

import React, { useState } from "react"

//yha pe flow of execution alag hai dekho pahle return pe jayenge and then cick kiya button to fir handlebbuttonwork pe senddata vala fun me data jayega
//sidha sendatatoparent pe jha child ko call kiya hai hai then vha se handlparentdata pe data pahuch jayega ookk

VERY VERY IMP

//Destructuring of Props in ReactJS is used to extract specific values from the props object passed down to a component, allowing us to use those values as standalone variables in the component. 
const Child=({sendDataToParent})=>{
    // const sendDataToParent=props.sendDataToParent;
    //to ye uper jo directly FUNCTION ko destructure kiya hai vo same hai jaise ye uper props
    //ko use krke krte hai bs directly kr liya to kese bhi kr skte ho
    const handleButtonWork=()=>{
        const data=" HELLO FROM CHILD SIDE";
        sendDataToParent(data);
    }

    return(
        <div>
            <button onClick={handleButtonWork}>Send Data to parent</button>
        </div>
    )
}
function App(){

    const [parentData,setParentData]=useState("");

    const handleparentdata=(data)=>{
        setParentData(data);
    };

    return(
        <div className="App">
            <h1>Parent</h1>
          //to jo data ham children se bhej rhe hai vo parentdata me store kr rhe hai
        //isiliye iski value show kr rhe hai
            <p>Data from Children {parentData}</p>
            <Child sendDataToParent={handleparentdata}/>
        </div>
    )
}

export default App


STATE HOOK IN REACT :-----------


import React, { useState } from "react";

function Greetings(props){
    const isLoggedin=props.isLoggedin;
    return (
        <div>
          //it is known as conditional rendering means condition ke basis pe changes ho rhe hai
          {isLoggedin ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}
          //js ko {} me hi likhte hai
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
       // Use curly braces {} when you need to pass anything other than a string literal as a prop value, such as variables,
        //numbers, booleans, objects, functions, or even complex expressions like {count > 0}.







        
            //to yha bs isloggedin variable ko pass kiya hai aor khuch nhi 
           //for example we can also do like this
            //            <Greetings isloggedin={isloggedin} name={name}/>
        //and then in greetings function         
        //{isloggedin?<h1>Your are logged in Mr {props.name}</h1>:<h1>Your are logged out</h1>}



        
      // to ager isloggedin true hai to click krte hi handlelogout yani false kr do aor 
      //vese hi name bhi change krke logout kr do button ager true hai to

           //to bas button click krne pe value change ho rhi hai button name kica
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

function ImageGallery() {
  const [index, setIndex] = useState(0);
    
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



Context Hooks 

function Button() {
  const theme = useContext(ThemeContext);
    

Context lets a component receive information from distant parents without passing it as props.
For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.


Effect Hooks 

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
    

Effects let a component connect to and synchronize with external systems. 
This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

useEffect connects a component to an external system.
