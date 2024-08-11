import React, { useContext, useEffect, useState } from "react";

//to sbse pahle context object ko import karna hoga
import { ThemeContext } from "../contexts/ThemeContext";

const Counter = () => {
    
    const [count,setCount] = useState(0);

    //ab yha dekho theme ko access karna hai to juse use the hook
    //aor bracket me themecontext likh dena bas
    const { theme } = useContext(ThemeContext);

    useEffect(()=>{
        document.title = `Count:${count}`;
    },[count]);

    return (
        <div
           style={{
            //yha pe bhi ham theme ko use kr pa rhe hai as ye counter bhi themecontext ka children hai
              background: theme === "light"? "#fff" : "#333",
              color: theme === "light"? "#000" : "#fff",
           }}
        >

           <p>Current Count:{count}</p>
           <button onClick={()=> setCount(count+1)}>Increment</button>
           <button onClick={()=> setCount(count-1)}>Decrement</button>
        </div>
    )
};

export default Counter;
