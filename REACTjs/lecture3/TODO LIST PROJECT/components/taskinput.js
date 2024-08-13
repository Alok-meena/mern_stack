import React, { useState } from "react";



//Object-like Access: When props are passed to a component, they are available as an object, which is why you can use object destructuring syntax { addTask } to access the addTask prop directly. 
//This is a feature of JavaScript ES6 and is not specific to React.
const TaskInput = ({addTask})=>{
    const [task,setTask]=useState("");
    const handleSubmit = (e) =>{
        //jab ham submit krte hai to page reload ho jata hai and data go lost so to prevent it we use preventdefault
        e.preventDefault();
        addTask(task);
        setTask("");
    };

    return(
        <form onSubmit={handleSubmit} className="task-input">
            <input 
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Add a new Task"
            />
            <button type="submit">Add A Task</button>
       </form>
    );
};

export default TaskInput;
