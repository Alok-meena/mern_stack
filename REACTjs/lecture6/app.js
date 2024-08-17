// import React, { useState } from "react";
// import axios from "axios";
// import "./App.css";
// import RecipeInput from "./components/RecipeInput.js";
// import RecipeList from "./components/RecipeList.js";

// const App = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getRecipes = async (searchQuery) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `http://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
//       );
//       setRecipes(response.data.meals);
//     } catch (error) {
//       console.log(error);
//     }
//     setLoading(false);
//   };

//   const handleQueryChange = (searchQuery) => {
//     if (searchQuery) {
//       getRecipes(searchQuery);
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>TheRcipeHub</h1>
//         <h2>Welcome to the Recipes Bar</h2>
//       </header>
//       <div className="stats">
//         <span>Total Meals: 303</span>
//         <span>Total Ingredients: 575</span>
//         <span>Images: 303</span>
//       </div>
//       <RecipeInput onQueryChange={handleQueryChange} />
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <RecipeList recipes={recipes} />
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTask, deleteTask } from "./actions/taskAction.js";
import "./App.css"


const App = () => {
    const [task,setTask] = useState("");
    const tasks = useSelector((state)=>state.tasks.tasks);
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.trim()){
            dispatch(addTask({id:Date.now(),name:task}));
            setTask("");
        }
    };

    return(
        <div className="container">
            <h1>Task Manager</h1>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   value={task}
                   onChange={(e)=>setTask(e.target.value)}
                   placeholder="Add a new Task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.length>0?(
                    tasks.map((task)=>(
                        <li key={task.id}>
                            {task.name}
                            <button onClick={()=> dispatch(deleteTask(task.id))}>
                                DELETE
                            </button>
                        </li>
                    ))
                ):(
                    <p>No Task Available. Add a new Task</p>
                )}
            </ul>
        </div>
    );
};

export default App;
