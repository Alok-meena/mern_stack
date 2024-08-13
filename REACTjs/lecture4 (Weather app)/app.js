//https://openweathermap.org/ for weather app this is used to get the api key and to call the weather api we require a api key


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

//can copy the code from the react bootstrap site after doing import 
//NOW TO USE REACT BOOTSTRAP INSTALL 2 THINGS
//npm install bootstrap react-bootstrap
//and index.js me ye import kiya hai / app.js me bhi kr skte the import 'bootstrap/dist/css/bootstrap.min.css';
//jb npm install kiya to bs un node modules me se css ko import kiya hai

//Bootstrap relies on jQuery for its JavaScript components, which can be unnecessary overhead in a React project. 
//React-Bootstrap eliminates the need for jQuery, aligning with modern JavaScript practices and ensuring a lighter, more efficient application.


//WHAT IS BOOTSTRAP
///Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.

//you can ALSO PICK UP REACT TEMPLATES WHICH ARE ALREADY READY
