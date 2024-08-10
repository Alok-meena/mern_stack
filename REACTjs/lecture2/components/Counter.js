import React, { useState } from "react";


const Counter = () => {
    const [count,setCount]=useState(0);

    return(
        <div className="App">
            <h1>Counter App with usestates</h1>
            <p>current counter : {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(0)}>Reset</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </div>
    );
}

export default Counter;

we can also do like this 

    function App(){
    const value=0;
    const [counter,counterlogic] = useState(value);

    const increment=()=>{
        counterlogic(counter+1);
    }

    const decrement=()=>{
        counterlogic(counter-1);//do it like this dont do it like counter--
    }

    const reset=()=>{
        counterlogic(0);
    }

    return(
        <div className="App">
            <h1>{counter}</h1>
           //yha ager only increment decremen likh doge to khuch nhi hoga 
        //value change krne ke liye usi function me pass krna hota hai and then also call
        //back function for calling increment function
        
            <button onClick={()=>counterlogic(increment)}>increment</button>
            <button onClick={()=>counterlogic(decrement)}>decrement</button>
            <button onClick={()=>counterlogic(reset)}>reset</button>
        </div>
    )
}

export default App;
