import React, {  useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css"

const App = () =>{
    const [tasks,setTasks]= useState([]);

    const addTask = (task) =>{
        if(task.trim()){//removes spaces 
            setTasks([...tasks,task]);
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i!==index);
        setTasks(newTasks);
    };

    return(
        <div className="App">
            <h1>ToDo List</h1>
            <TaskInput addTask={addTask}/> // to dekho yha se ham bhej rhe hai props okk aor vha ham props krke bhi access kr skte hai aor ye object ki tarah pass
            //hota hai to {addTask} krke bhi access kr skte hai isko ham
            <TaskList tasks={tasks} deleteTask={deleteTask}/>
        </div>
    )
}

export default App;
