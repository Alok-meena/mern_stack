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
