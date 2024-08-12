// import React, {  useState } from "react";
// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import "./App.css"

// const App = () =>{
//     const [tasks,setTasks]= useState([]);

//     const addTask = (task) =>{
//         if(task.trim()){//removes spaces 
//             setTasks([...tasks,task]);
//         }
//     };

//     const deleteTask = (index) => {
//         const newTasks = tasks.filter((_, i) => i!==index);
//         setTasks(newTasks);
//     };

//     return(
//         <div className="App">
//             <h1>ToDo List</h1>
//             <TaskInput addTask={addTask}/>
//             <TaskList tasks={tasks} deleteTask={deleteTask}/>
//         </div>
//     )
// }

// export default App;



import React, { useState } from "react"
import "./App.css"
import axios from "axios"
import CityInput from "./components/CityInput";
import WeatherDisplay from "./components/WeatherDisplay";

const API_KEY = "e649ba4da49a38809228472667e8bda3";

const App = () =>{

    const [city, setCity] = useState("");
    const [weather , setWeather] = useState("");

    const getWeather = async (cityname) =>{
        try{
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
        }
        catch(e){
            console.log("Error:",e);
        }

    }

    const handleCityChange = (cityName) =>{
        setCity(cityName);
        if(cityName) {
            getWeather(cityName);
        }
    };

    return(
        <div className="App">
            <h1>Weather App</h1>
            <CityInput onCityChange={handleCityChange}/>
            {weather && <WeatherDisplay weather={weather}/>}
        </div>
        //to ye uper weather && isliye kiya because enter press krne pe hi api call hogi aor ham 
        //api call hone se pahle hi data ko access kr rhe hai jo ki shi nhi hai that's why we did like this
    );
}

export default App;
