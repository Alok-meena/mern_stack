import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
    return(
        <ul className="task-list">
             {tasks.map((task,index)=>{
                //to yha return lgaya as {} used this o/w use () to avoid return statement
                //aor yha jo ye key use ki hai ye react ki key
                //hai jo different element ko identify krne ke liye assign krte hai ham
                  return <TaskItem 
                   key={index}
                   task={task}
                   index={index}
                   deleteTask={deleteTask}
                />
            })}
        </ul>
    )
}

export default TaskList
