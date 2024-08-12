import React from "react";

const WeatherDisplay = ({ weather }) =>{
    console.log(weather);
    return <div className="weather-display">
               <h2>{weather.name}</h2>
               <p>{weather.main.temp}</p>
               <p>{weather.weather[0].description}</p>
          </div>
};

export default WeatherDisplay;
